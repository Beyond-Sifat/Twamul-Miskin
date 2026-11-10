export type DonationPayload = {
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  amount: number;
  locale: "bn" | "en";
};

export async function initiateDonation(payload: DonationPayload) {
  const res = await fetch("/api/donations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Something went wrong");

  return data as { success: boolean; gatewayUrl: string };
}