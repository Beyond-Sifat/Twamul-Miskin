"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";


export default function Footer(){

    const t = useTranslations("footer");
    const locale = useLocale();


    const quickLinks=[
        {label: t("home"), href: "/"},
        {label: t("about"), href: "/about"},
        {label: t("contact"), href: "/contact"},
        {label: t("activities"), href: "/activities"},
    ];

    return(
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <div>
                    <Link href ={`/${locale}`}
                    className = "text-xl font-bold text-white">
                        
                    {locale==="bn"? "ত্বআমুল মিসকীন" : "Twamul Miskin"}</Link>

                    <p>{t("description")}</p>
                </div>


                <div>
                    <h1>{t("quickLinks")}</h1>
                    <ul>
                        {quickLinks.map((item)=>(
                            <li key={item.href}>
                                <Link href={`/${locale}${item.href}`} className="text-blue-400 hover:text-blue-600">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}