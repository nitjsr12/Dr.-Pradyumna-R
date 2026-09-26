import type { Metadata } from "next";
import { Inter, Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import {
  defaultMetadata,
  medicalDoctorJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${manrope.variable} ${dmSerif.variable}`}
    >
      <body className="min-h-screen overflow-x-clip pb-[calc(4rem+env(safe-area-inset-bottom))] text-text antialiased md:pb-0">
        <JsonLd data={[websiteJsonLd(), medicalDoctorJsonLd()]} />
        <Navbar />
        <main id="main-content" className="min-w-0 overflow-x-clip">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
        <MobileStickyCta />
      </body>
    </html>
  );
}
