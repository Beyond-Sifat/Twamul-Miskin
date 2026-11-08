import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Donation } from "@/models/Donation";
import { verifyPayment } from "@/lib/sslcommerz";

const ALLOWED = ["success", "fail", "cancel", "ipn"];

// SSLCommerz sends a POST (form data) to these URLs
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ status: string }> }
) {
  const { status } = await params;
  if (!ALLOWED.includes(status)) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const form = await req.formData();
  const tranId = String(form.get("tran_id") ?? "");
  const valId = String(form.get("val_id") ?? "");

  await connectDB();
  const donation = await Donation.findOne({ tranId });

  const redirectTo = (path: string) =>
    NextResponse.redirect(
      new URL(`/${donation?.locale ?? "bn"}${path}`, process.env.APP_URL),
      303 // turns the POST into a normal page visit
    );

  if (!donation) {
    return status === "ipn"
      ? NextResponse.json({ message: "Unknown transaction" }, { status: 404 })
      : redirectTo("/donate/failed");
  }

  // Payment finished: verify with SSLCommerz, then mark as paid
  if ((status === "success" || status === "ipn") && donation.status !== "paid" && valId) {
    const result = await verifyPayment(valId);

    const ok =
      (result.status === "VALID" || result.status === "VALIDATED") &&
      result.tran_id === tranId &&
      Number(result.amount) === donation.amount;

    if (ok) {
      donation.status = "paid";
      donation.paidAt = new Date();
      donation.gatewayResponse = result;
      await donation.save();
    }
  }

  if (status === "ipn") return NextResponse.json({ received: true });
  if (status === "success") {
    return redirectTo(donation.status === "paid" ? "/donate/success" : "/donate/failed");
  }

  // fail or cancel
  if (donation.status === "pending") {
    donation.status = status === "fail" ? "failed" : "cancelled";
    await donation.save();
  }
  return redirectTo(status === "cancel" ? "/donate" : "/donate/failed");
}