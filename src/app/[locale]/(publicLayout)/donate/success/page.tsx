import { useTranslations } from "next-intl";

export default function DonationSuccessPage() {
  const t = useTranslations("donate");
  return (
    <section className="px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-emerald-800">{t("successTitle")}</h1>
      <p className="mt-2 text-gray-600">{t("successText")}</p>
    </section>
  );
}