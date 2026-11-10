const BASE_URL =
  process.env.SSLCOMMERZ_IS_LIVE === "true"
    ? "https://securepay.sslcommerz.com"
    : "https://sandbox.sslcommerz.com";

const credentials = () => ({
  store_id: process.env.SSLCOMMERZ_STORE_ID!,
  store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD!,
});

type StartPaymentInput = {
  tranId: string;
  amount: number;
  name: string;
  email: string;
  phone: string;
};

// 1) Ask SSLCommerz for a payment page URL
export async function startPayment(input: StartPaymentInput): Promise<string> {
  const callback = `${process.env.APP_URL}/api/donations/callback`;

  const res = await fetch(`${BASE_URL}/gwprocess/v4/api.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    cache: "no-store",
    body: new URLSearchParams({
      ...credentials(),
      total_amount: String(input.amount),
      currency: "BDT",
      tran_id: input.tranId,
      success_url: `${callback}/success`,
      fail_url: `${callback}/fail`,
      cancel_url: `${callback}/cancel`,
      ipn_url: `${callback}/ipn`,
      cus_name: input.name,
      cus_email: input.email,
      cus_phone: input.phone,
      cus_add1: "Bangladesh",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      shipping_method: "NO",
      product_name: "Donation",
      product_category: "Donation",
      product_profile: "non-physical-goods",
    }),
  });

  const data = await res.json();
  if (data.status !== "SUCCESS" || !data.GatewayPageURL) {
    throw new Error(data.failedreason || "Could not start SSLCommerz payment");
  }
  return data.GatewayPageURL;
}

// 2) After payment, ask SSLCommerz if it is really paid (never trust the browser)
export async function verifyPayment(valId: string) {
  const params = new URLSearchParams({ val_id: valId, ...credentials(), format: "json" });
  const res = await fetch(
    `${BASE_URL}/validator/api/validationserverAPI.php?${params}`,
    { cache: "no-store" }
  );
  return res.json();
}