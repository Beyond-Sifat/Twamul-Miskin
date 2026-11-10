import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Donation } from "@/models/Donation";
import { startPayment } from "@/lib/sslcommerz";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const donorName = String(body.donorName ?? "").trim();
    const donorEmail = String(body.donorEmail ?? "").trim();
    const donorPhone = String(body.donorPhone ?? "").trim();
    const amount = Number(body.amount);
    const locale = body.locale === "en" ? "en" : "bn";

    const valid =
      donorName.length >= 2 &&
      /^\S+@\S+\.\S+$/.test(donorEmail) &&
      /^01[3-9]\d{8}$/.test(donorPhone) &&
      amount >= 10 &&
      amount <= 500000;

    if (!valid) {
      return NextResponse.json({ success: false, message: "Invalid data" }, { status: 400 });
    }

    await connectDB();

    const tranId = `DON-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
    await Donation.create({ tranId, donorName, donorEmail, donorPhone, amount, locale });

    try {
      const gatewayUrl = await startPayment({
        tranId,
        amount,
        name: donorName,
        email: donorEmail,
        phone: donorPhone,
      });
      return NextResponse.json({ success: true, gatewayUrl });
    } catch (error) {
      await Donation.updateOne({ tranId }, { status: "failed" });
      throw error;
    }
  } catch (error) {
    console.error("[donations]", error);
    return NextResponse.json(
      { success: false, message: "Could not start the payment" },
      { status: 500 }
    );
  }
}