import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { seo } from "@/lib/content";
import "./globals.css";

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
  metadataBase: new URL("https://pustelnikcoach.vercel.app"),
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    locale: "cs_CZ",
    type: "website",
    images: ["/og-image.jpg"],
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
      </body>
    </html>
  );
}
