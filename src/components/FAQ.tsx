"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("Home.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = t.raw("items") as {
    question: string;
    answer: string;
  }[];

  return (
    <section className="bg-slate-50 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            {t("eyebrow")}
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold leading-7 text-slate-900">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl text-emerald-700"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="px-5 pb-5 leading-8 text-slate-600 sm:px-6"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600">{t("stillQuestions")}</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-lg border border-emerald-800 px-5 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-800 hover:text-white"
          >
            {t("contactButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}