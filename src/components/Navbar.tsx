
"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function Navbar() {
    const t = useTranslations("navbar");
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const navItems = [
        { label: t("home"), href: "" },
        { label: t("about"), href: "/about" },
        { label: t("campaigns"), href: "/campaigns" },
        // { label: t("activities"), href: "/activities" },
        // { label: t("transparency"), href: "/transparency" },
         { label: t("contact"), href: "/contact" },
    ];

    function switchLanguage() {
        const nextLocale = locale === "en" ? "bn" : "en";

        startTransition(() => {
            router.replace(`/${nextLocale}${pathname.replace(/^\/(en|bn)/, "")}`);
        });

        setMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link
                    href={`/${locale}`}
                    className="text-xl font-bold text-emerald-800"
                >
                    {locale === "bn" ? "তাওয়ামুল মিসকিন" : "Twamul Miskin"}
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={`/${locale}${item.href}`}
                            className="text-sm font-medium text-gray-700 transition hover:text-emerald-700"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <button
                        type="button"
                        onClick={switchLanguage}
                        disabled={isPending}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                        aria-label={t("language")}
                    >
                        {locale === "en" ? "বাংলা" : "English"}
                    </button>

                    <Link
                        href={`/${locale}/donate`}
                        className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
                    >
                        {t("donate")}
                    </Link>
                </div>

                <button
                    type="button"
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? t("closeMenu") : t("menu")}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </nav>

            {menuOpen && (
                <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={`/${locale}${item.href}`}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-gray-700 hover:text-emerald-700"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <button
                            type="button"
                            onClick={switchLanguage}
                            disabled={isPending}
                            className="w-fit rounded-md border border-gray-300 px-3 py-2 text-sm"
                        >
                            {locale === "en" ? "বাংলা" : "English"}
                        </button>

                        <Link
                            href={`/${locale}/donate`}
                            onClick={() => setMenuOpen(false)}
                            className="w-fit rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
                        >
                            {t("donate")}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
