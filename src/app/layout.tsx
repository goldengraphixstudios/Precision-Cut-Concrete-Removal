import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileBar from "@/components/layout/MobileBar";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SeoJsonLd from "@/components/seo/SeoJsonLd";

const heading = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://precisioncutconcreteremoval.com"),
  title: {
    default: "Precision Cut Concrete Removal | St. Augustine Beach, FL",
    template: "%s | Precision Cut Concrete Removal",
  },
  description:
    "Concrete cutting, slab and wall cutting, core drilling, and fast debris hauling in St. Augustine Beach and nearby cities. Clean cuts. Fast response. Free estimates.",
  openGraph: {
    title: "Precision Cut Concrete Removal",
    description:
      "Concrete cutting, driveway and sidewalk removal, core drilling, trenching, and debris hauling in St. Augustine Beach, FL.",
    type: "website",
    url: "https://precisioncutconcreteremoval.com",
    images: [
      {
        url: "/brand/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Precision Cut Concrete Removal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Cut Concrete Removal",
    description:
      "Fast, precise concrete cutting and removal in St. Augustine Beach, FL.",
    images: ["/brand/og-image.svg"],
  },
  icons: {
    icon: "/brand/favicon.ico",
  },
  keywords: [
    "concrete cutting",
    "saw cutting",
    "core drilling",
    "driveway removal",
    "slab cutting",
    "concrete removal",
    "St. Augustine Beach",
    "debris hauling",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:rounded-full focus:bg-safety focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        <SeoJsonLd />
        <SmoothScroll>
          <Header />
          <main id="content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <MobileBar />
        </SmoothScroll>
      </body>
    </html>
  );
}



