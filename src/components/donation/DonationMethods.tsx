"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { donationMethods } from "@/data/donationMethods";
import CopyButton from "./CopyButton";

export default function DonationMethods() {
  const t = useTranslations("donate");
  const [activeId, setActiveId] = useState(donationMethods[0].id);
  const active = donationMethods.find((m) => m.id === activeId)!;

  const labelOf = (m: (typeof donationMethods)[number]) =>
    m.kind === "bank" ? t("bankTransfer") : m.name;

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-2xl font-bold text-emerald-800">{t("title")}</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-[280px_1fr]">
        {/* Left: method list */}
        <div>
          <h2 className="mb-3 font-semibold text-gray-800">{t("methodsHeading")}</h2>
          <div className="flex flex-col gap-3">
            {donationMethods.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveId(m.id)}
                aria-pressed={m.id === activeId}
                className={`rounded-lg border-2 px-4 py-3 text-left text-sm font-semibold transition ${
                  m.id === activeId
                    ? "border-emerald-700 bg-emerald-50 text-emerald-900"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {labelOf(m)}
              </button>
            ))}
          </div>
        </div>

        {/* Right: details */}
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900">{labelOf(active)}</h2>

          {active.kind === "mobile" ? (
            <>
              <p className="mt-3 text-sm text-gray-600">
                {t("mobileInstruction", { method: active.name })}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-sm text-gray-600">{t("numberLabel")}:</span>
                <span className="text-lg font-bold">{active.number}</span>
                <CopyButton text={active.number} />
              </div>

              <div className="mt-6">
                <p className="mb-2 text-sm font-medium text-gray-700">{t("scanQr")}</p>
                <Image
                  src={active.qr}
                  alt={`${active.name} QR`}
                  width={240}
                  height={240}
                  className="rounded-md border border-gray-200"
                />
              </div>
            </>
          ) : (
            <>
              <p className="mt-3 text-sm text-gray-600">{t("bankInstruction")}</p>

              <dl className="mt-4 divide-y divide-gray-100">
                {active.details.map((d) => (
                  <div key={d.field} className="flex flex-wrap items-center justify-between gap-2 py-3">
                    <div>
                      <dt className="text-xs text-gray-500">{t(`bank.${d.field}`)}</dt>
                      <dd className="font-semibold">{d.value}</dd>
                    </div>
                    <CopyButton text={d.value} />
                  </div>
                ))}
              </dl>
            </>
          )}
        </div>
      </div>
    </div>
  );
}