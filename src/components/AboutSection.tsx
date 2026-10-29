"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutSection() {
    const t = useTranslations("Home.about");

    const supportAreas = [
        { title: t("areas.poor.title"), description: t("areas.poor.description") },
        { title: t("areas.disaster.title"), description: t("areas.disaster.description") },
        { title: t("areas.homeless.title"), description: t("areas.homeless.description") },
    ];

    return (
        <section className="bg-white px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            {t("eyebrow")}
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                            {t("title")}
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            {t("description")}
                        </p>

                        <p className="mt-4 leading-8 text-slate-600">
                            {t("purpose")}
                        </p>

                        <Link
                            href="/about"
                            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-emerald-800 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
                        >
                            {t("button")}
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>

                    <div className="grid gap-5">
                        <div className="rounded-2xl border border-emerald-100 hover:bg-emerald-100 p-6 sm:p-8">
                            <h3 className="text-xl font-bold text-emerald-950">
                                {t("missionTitle")}
                            </h3>
                            <p className="mt-3 leading-7 text-slate-700">
                                {t("mission")}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 hover:bg-emerald-100 p-6 sm:p-8">
                            <h3 className="text-xl font-bold text-slate-900">
                                {t("visionTitle")}
                            </h3>
                            <p className="mt-3 leading-7 text-slate-600">
                                {t("vision")}
                            </p>
                        </div>

                        <div className="pt-2">
                            <h3 className="mb-4 text-lg font-bold text-slate-900">
                                {t("areasTitle")}
                            </h3>

                            <div className="space-y-4">
                                {supportAreas.map((area) => (
                                    <div key={area.title} className="flex gap-3">
                                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-700" />
                                        <div>
                                            <h4 className="font-semibold text-slate-800">
                                                {area.title}
                                            </h4>
                                            <p className="mt-1 leading-7 text-slate-600">
                                                {area.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}