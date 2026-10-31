
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
    const t = useTranslations("Contact");
    // const locale = useLocale();

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Frontend only. Email/backend integration will be added later.
        setSubmitted(true);
        e.currentTarget.reset();
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-[#F7F8F4] px-5 py-20 md:py-28">
                <div className="mx-auto max-w-7xl text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                        {t("hero.eyebrow")}
                    </p>

                    <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                        {t("hero.title")}
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
                        {t("hero.description")}
                    </p>
                </div>
            </section>

            {/* Contact Form + Information */}
            <section className="px-5 py-20 md:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Contact Form */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                {t("form.title")}
                            </h2>

                            <p className="mt-3 leading-7 text-gray-500">
                                {t("form.description")}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                    {t("form.name")}
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder={t("form.namePlaceholder")}
                                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                        {t("form.email")}
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder={t("form.emailPlaceholder")}
                                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                                        {t("form.phone")}
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        placeholder={t("form.phonePlaceholder")}
                                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                                    {t("form.subject")}
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder={t("form.subjectPlaceholder")}
                                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                                    {t("form.message")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder={t("form.messagePlaceholder")}
                                    className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-green-800 px-6 py-4 font-semibold text-white transition hover:bg-green-900 sm:w-auto"
                            >
                                {t("form.submit")} <span aria-hidden="true">→</span>
                            </button>

                            {submitted && (
                                <p role="status" className="text-sm text-amber-700">
                                    {t("form.demoNotice")}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:pt-2">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                {t("info.title")}
                            </h2>

                            <p className="mt-3 leading-7 text-gray-500">
                                {t("info.description")}
                            </p>
                        </div>

                        <div className="space-y-7">
                            {/* Address */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-800">
                                    <MapPin className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {t("info.addressTitle")}
                                    </h3>
                                    <p className="mt-2 max-w-sm leading-7 text-gray-500">
                                        {t("info.address")}
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-800">
                                    <Phone className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {t("info.phoneTitle")}
                                    </h3>
                                    <a
                                        href="tel:+8801302315657"
                                        className="mt-2 inline-block text-gray-500 transition hover:text-green-800"
                                    >
                                        01302-315657
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-800">
                                    <Mail className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {t("info.emailTitle")}
                                    </h3>
                                    <a
                                        href="mailto:twamul.miskin@gmail.com"
                                        className="mt-2 inline-block break-all text-gray-500 transition hover:text-green-800"
                                    >
                                        twamul.miskin@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Website */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-800">
                                    <Globe className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {t("info.websiteTitle")}
                                    </h3>
                                    <a
                                        href="https://towamulmiskin.lovable.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block break-all text-gray-500 transition hover:text-green-800"
                                    >
                                        towamulmiskin.lovable.app
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Small Contact Note */}
                        <div className="mt-10 rounded-xl border border-green-100 bg-green-50/70 p-6">
                            <h3 className="font-semibold text-gray-900">
                                {t("info.noteTitle")}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-gray-600">
                                {t("info.noteDescription")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Mission CTA */}
            <section className="bg-linear-to-br from-slate-600 to-green-800 px-5 py-16 md:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
                        {t("cta.eyebrow")}
                    </p>

                    <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                        {t("cta.title")}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100/80">
                        {t("cta.description")}
                    </p>

                    <Link

                        href="/donate"
                        className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 font-semibold text-green-900 transition hover:bg-green-50"
                    >
                        {t("cta.button")}
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
