"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations("Home.hero");

    return (
        <section className="relative overflow-hidden bg-emerald-950 text-white">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-800 via-emerald-850 to-slate-800" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-8">
                <div className="space-y-6">
                    <span className="inline-flex rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100">
                        {t("eyebrow")}
                    </span>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        {t("title")}
                    </h1>

                    <p className="max-w-xl text-base leading-8 text-emerald-100/90 sm:text-lg">
                        {t("description")}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            href="/donate"
                            className="rounded-lg bg-amber-400 px-6 py-3.5 font-semibold text-emerald-950 transition hover:bg-amber-300"
                        >
                            {t("donateButton")}
                        </Link>

                        <Link
                            href="/about"
                            className="rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                        >
                            {t("aboutButton")}
                        </Link>
                    </div>

                    <p className="text-sm leading-6 text-emerald-100/70">
                        {t("note")}
                    </p>
                </div>

                <div className="flex min-h-72 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:min-h-96">
                    <div className="max-w-md text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10 text-4xl text-amber-300">
                            ✦
                        </div>

                        <h2 className="text-2xl font-bold sm:text-3xl">
                            {t("highlightTitle")}
                        </h2>

                        <p className="mt-4 leading-8 text-emerald-100/80">
                            {t("highlightDescription")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}