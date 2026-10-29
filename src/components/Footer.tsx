"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");
    const locale = useLocale();

    const currentYear = 2026;

    const quickLinks = [
        { label: t("home"), href: "" },
        { label: t("about"), href: "/about" },
        { label: t("campaigns"), href: "/campaigns" },
        { label: t("activities"), href: "/activities" },
        { label: t("transparency"), href: "/transparency" },
        { label: t("contact"), href: "/contact" },
    ];

    return (
        <footer className="bg-emerald-950 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                    <Link
                        href={`/${locale}`}
                        className="text-xl font-bold text-white"
                    >
                        {locale === "bn" ? "ত্বআমুল মিসকীন" : "Twamul Miskin"}
                    </Link>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-emerald-100">
                        {t("description")}
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t("quickLinks")}</h2>

                    <ul className="mt-4 space-y-3">
                        {quickLinks.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={`/${locale}${item.href}`}
                                    className="text-sm text-emerald-100 transition hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">{t("contactHeading")}</h2>

                    <div className="mt-4 space-y-3 text-sm text-emerald-100">
                        <p>
                            <span className="font-medium text-white">
                                {t("addressLabel")}
                            </span>{" "}
                            {/* Bangladesh */}
                            {t("address")}
                        </p>

                        <p>
                            <span className="font-medium text-white">
                                {t("email")}:
                            </span>{" "}
                            {/* Replace with the foundation's actual email */}
                            <span>twamil.miskin@gmail.com</span>
                        </p>

                        <p>
                            <span className="font-medium text-white">
                                {t("phoneLable")}:
                            </span>{" "}
                            {/* Replace with the foundation's actual phone number */}
                            <span> {t("phone")}</span>
                        </p>

                        <Link
                            href={`/${locale}/donate`}
                            className="inline-block rounded-md bg-white px-4 py-2 font-semibold text-emerald-950 transition hover:bg-emerald-100"
                        >
                            {t("donate")}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-emerald-800">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-emerald-100 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p>
                        © {currentYear} Twamul Miskin. {t("copyright")}
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <Link
                            href={`/${locale}/privacy-policy`}
                            className="hover:text-white"
                        >
                            {t("privacyPolicy")}
                        </Link>

                        <Link
                            href={`/${locale}/terms`}
                            className="hover:text-white"
                        >
                            {t("terms")}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
