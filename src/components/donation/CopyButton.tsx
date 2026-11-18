"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function CopyButton({ text }: { text: string }) {
    const t = useTranslations("donate");
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {

        }
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50"
        >
            {copied ? t("copied") : t("copy")}
        </button>
    );
}