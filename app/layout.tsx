import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import { seo } from "@/lib/content";
import { PlanMagnetModal } from "@/components/PlanMagnetModal";
import "./globals.css";

// Google Analytics 4 Measurement ID — pokud chceš změnit GA property, uprav jen tuhle hodnotu.
const GA_ID = "G-R562N8TS0Y";
// Google Ads conversion ID — pro měření konverzí z reklam.
const ADS_ID = "AW-18227137742";
// Meta Pixel ID — mereni konverzi z Meta reklam (dataset pustelnikcoach.cz).
const META_PIXEL_ID = "1734988351152547";

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
  other: {
    "facebook-domain-verification": "jx5vclzzsra2flah7wclujequucaq6",
  },
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
        <PlanMagnetModal />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
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
