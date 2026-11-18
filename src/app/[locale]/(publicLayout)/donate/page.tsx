// page.tsx

import DonationForm from "@/components/donation/DonationForm";
import DonationMethods from "@/components/donation/DonationMethods";

export default function DonatePage() {
  return (
    <section className="px-4 py-12">
      {/* <DonationForm /> */}
      <DonationMethods />
    </section>
  );
}