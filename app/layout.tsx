import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oceangate — From the world to Djibouti",
  description:
    "Oceangate International Shipping (OGIS). Maritime agency at the Port of Djibouti. Ship registration, port assistance, cargo handling, customs, bunkering — 24/7.",
  openGraph: {
    title: "Oceangate International Shipping",
    description: "Maritime agency at the gateway of the Red Sea.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
