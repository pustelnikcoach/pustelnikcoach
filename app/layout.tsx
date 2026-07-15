import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import { seo } from "@/lib/content";
import "./globals.css";

// Google Analytics 4 Measurement ID — pokud chceš změnit GA property, uprav jen tuhle hodnotu.
const GA_ID = "G-R562N8TS0Y";
// Google Ads conversion ID — pro měření konverzí z reklam.
const ADS_ID = "AW-18227137742";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL("https://pustelnikcoach.cz"),
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: "https://pustelnikcoach.cz",
    siteName: "Pustelnik Coach",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Petr Pustelník | Osobní trenér Ostrava / Opava",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a href="#top" className="skip-link">
          Přeskočit na obsah
        </a>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
            gtag('config', '${ADS_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
