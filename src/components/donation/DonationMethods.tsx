
"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { donationMethods } from "@/data/donationMethods";
import CopyButton from "./CopyButton";

export default function DonationMethods() {
  const t = useTranslations("donate");

  // The currently selected payment method
  const [activeId, setActiveId] = useState(donationMethods[0].id);

  // Find the selected method from the donation methods array
  const active = donationMethods.find((method) => method.id === activeId)!;

  // Get the translated name of each payment method
  const labelOf = (method: (typeof donationMethods)[number]) => {
    if (method.kind === "bank") {
      return t("bankTransfer");
    }

    // Example: bkash -> methods.bkash
    // Example: nagad -> methods.nagad
    return t(`methods.${method.id}`);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

      {/* Page Heading */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          {t("eyebrow")}
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
          {t("titleM")}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
          {t("description")}
        </p>
      </div>

      {/* Main Payment Area */}
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

        {/* Left: Payment Method Selection */}
        <aside className="rounded-xl border border-gray-200 bg-white p-5">
          <h3 className="mb-4 text-base font-bold text-gray-900">
            {t("methodsHeading")}
          </h3>

          <div
            role="tablist"
            aria-label={t("methodsHeading")}
            className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {donationMethods.map((method) => {
              const isActive = method.id === activeId;

              return (
                <button
                  key={method.id}
                  type="button"
                  role="tab"
                  id={`tab-${method.id}`}
                  aria-selected={isActive}
                  aria-controls="payment-details"
                  onClick={() => setActiveId(method.id)}
                  className={`flex min-w-max items-center justify-between gap-4 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
                    isActive
                      ? "border-emerald-700 bg-emerald-50 text-emerald-900"
                      : "border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-gray-50"
                  }`}
                >
                  <span>{labelOf(method)}</span>

                  {isActive && (
                    <span
                      className="text-emerald-700"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right: Selected Payment Details */}
        <div
          id="payment-details"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="min-w-0 rounded-xl border border-gray-200 bg-white p-5 sm:p-7"
        >
          {/* Details Header */}
          <div className="border-b border-gray-100 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {t("selectedMethod")}
                </p>

                <h3 className="mt-2 text-xl font-bold text-gray-900 md:text-2xl">
                  {labelOf(active)}
                </h3>
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                {t("activeMethod")}
              </span>
            </div>
          </div>

          {/* Mobile Banking Details */}
          {active.kind === "mobile" ? (
            <div className="pt-6">

              <p className="text-sm leading-7 text-gray-600">
                {t("mobileInstruction", {
                  method: labelOf(active),
                })}
              </p>

              {/* Account Number */}
              <div className="mt-5 rounded-lg bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-500">
                  {t("numberLabel")}
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <p className="break-all text-xl font-bold tracking-wide text-gray-900">
                    {active.number}
                  </p>

                  <CopyButton text={active.number} />
                </div>
              </div>

              {/* QR Code */}
              <div className="mt-7">
                <h4 className="mb-2 font-semibold text-gray-900">
                  {t("scanQr")}
                </h4>

                {/*<p className="mb-4 text-sm text-gray-500">
                  {t("qrDescription")}
                </p>

                {/*<div className="inline-flex rounded-xl border border-gray-200 bg-white p-3">
                  <Image
                    src={active.qr}
                    alt={`${labelOf(active)} QR code`}
                    width={220}
                    height={220}
                    className="h-auto w-[180px] sm:w-[220px]"
                  />
                </div>*/}
              </div>
            </div>
          ) : (
            /* Bank Transfer Details */
            <div className="pt-6">

              <p className="text-sm leading-7 text-gray-600">
                {t("bankInstruction")}
              </p>

              <div className="mt-5 divide-y divide-gray-100 rounded-lg border border-gray-100">
                {active.details.map((detail) => (
                  <div
                    key={detail.field}
                    className="flex flex-wrap items-center justify-between gap-3 p-4"
                  >
                    <div className="min-w-0">
                      <dt className="text-xs font-medium text-gray-500">
                        {t(`bank.${detail.field}`)}
                      </dt>

                      <dd className="mt-1 break-all font-semibold text-gray-900">
                        {detail.value}
                      </dd>
                    </div>

                    <CopyButton text={detail.value} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payment Reminder */}
          <div className="mt-7 rounded-lg border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-amber-900">
              {t("paymentReminder")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
