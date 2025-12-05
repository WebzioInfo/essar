import Head from "next/head";
import Services from "../components/Services";

export default function ServicePage() {
    return (
        <>
            <Head>
                <title>RO & Packaged Drinking Water Plant Services | Turnkey Solutions</title>
                <meta
                    name="description"
                    content="We provide turnkey water plant solutions including RO plant setup, consultancy, laboratory setup, licensing, branding, and training. Start your water business with expert guidance."
                />
                <meta
                    name="keywords"
                    content="RO plant setup, packaged drinking water plant, water plant consultancy, laboratory setup, water testing, licensing compliance, FSSAI registration, plant branding, staff training, water plant operations"
                />

                {/* Structured Data JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "provider": {
                                "@type": "Organization",
                                "name": "Essar Enterprises",
                                "url": "https://www.essarenterprises.com"
                            },
                            "serviceType": [
                                "RO Plant Installation & Design",
                                "Packaged Drinking Water Plant Consultancy",
                                "Laboratory Setup & Water Testing",
                                "Licensing & Compliance Assistance",
                                "Branding & Business Consultancy",
                                "Training & Operational Support"
                            ],
                            "description": "Full turnkey solutions for packaged drinking water plants including design, setup, licensing, branding, laboratory setup, and training.",
                            "areaServed": "India",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://www.essarenterprises.com/services"
                            }
                        }),
                    }}
                />
            </Head>


            <Services />
        </>
    );
}
