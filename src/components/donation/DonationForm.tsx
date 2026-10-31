"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
// import { initiateDonation } from "@/lib/api/donation.api";

export default function DonationForm() {
    const t = useTranslations("donate");
    // const locale = useLocale() as "bn" | "en";

    const [form, setForm] = useState({ donorName: "", donorEmail: "", donorPhone: "", amount: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm((prev) => ({ ...prev, [key]: e.target.value }));

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        // try {
        //     const res = await initiateDonation({ ...form, amount: Number(form.amount), locale });
        //     if (res.gatewayUrl) {
        //         window.location.href = res.gatewayUrl; // go to SSLCommerz
        //     }
        // } catch (err) {
        //     setError(err instanceof Error ? err.message : t("error"));
        //     setLoading(false);
        // }
    }

    const inputClass = "w-full rounded-md border border-gray-300 px-3 py-2 text-sm";

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-emerald-800">{t("title")}</h1>

            <input className={inputClass} placeholder={t("name")} value={form.donorName} onChange={update("donorName")} required />
            <input className={inputClass} type="email" placeholder={t("email")} value={form.donorEmail} onChange={update("donorEmail")} required />
            <input className={inputClass} placeholder={t("phone")} value={form.donorPhone} onChange={update("donorPhone")} required />
            <input className={inputClass} type="number" min={10} placeholder={t("amount")} value={form.amount} onChange={update("amount")} required />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-800 disabled:opacity-50"
            >
                {loading ? t("processing") : t("submit")}
            </button>
        </form>
    );
}