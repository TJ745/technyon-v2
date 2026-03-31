import type { Metadata } from "next";
import { Barlow, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/layout/Cursor";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TECHNYON — Precision Technology",
  description:
    "Curated premium electronics and smart appliances. Your trusted gateway to intelligent living.",
  keywords: ["tech", "electronics", "smart appliances", "London", "TECHNYON"],
  openGraph: {
    title: "TECHNYON — Precision Technology",
    description: "Curated premium electronics and smart appliances.",
    url: "https://www.technyon.com",
    siteName: "TECHNYON",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${exo2.variable} ${barlow.variable} antialiased`}
    >
      <body>
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
