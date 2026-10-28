import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQ";


export default function HomePage() {
    // Take 3 featured campaigns for section D
    // const featuredCampaigns = CAMPAIGNS.slice(0, 3);

    return (
        <>
            <div>
                <Banner/>
                <AboutSection/>
                <FAQSection/>
            </div>
        </>
    );
}