export type DonationMethod =
  | { id: "bkash" | "nagad" | "rocket"; name: string; kind: "mobile"; number: string; qr?: string }
  | { id: "bank"; kind: "bank"; details: { field: string; value: string }[] };

// Replace every placeholder with the foundation's REAL details.
export const donationMethods: DonationMethod[] = [
  { id: "bkash", name: "bKash", kind: "mobile", number: "01302315657", qr: "/qr/bKash_qr.png" },
  { id: "nagad", name: "Nagad", kind: "mobile", number: "01XXXXXXXXX"},
  {
    id: "bank",
    kind: "bank",
    details: [
      { field: "bankName", value: "Bank name here" },
      { field: "accountName", value: "Account holder name" },
      { field: "accountNumber", value: "0000000000000" },
      { field: "branch", value: "Branch name" },
      { field: "routingNumber", value: "000000000" },
    ],
  },
  { id: "rocket", name: "Rocket", kind: "mobile", number: "01XXXXXXXXX"},
];