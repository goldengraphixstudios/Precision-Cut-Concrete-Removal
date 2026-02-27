import { business, services } from "@/lib/data";

export default function SeoJsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    url: siteUrl,
    telephone: "+1-386-213-0370",
    email: business.email,
    areaServed: business.serviceAreas,
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Augustine Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
    serviceType: services.map((service) => service.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}



