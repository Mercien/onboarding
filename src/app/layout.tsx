import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Brands Digitals Agency | Digital Transformation for African Startups",
  description: "Digital transformation agency based in Lagos, Nigeria, serving funded startups and scaleups across Africa.",
  metadataBase: new URL("https://brandsdigitals.com.ng"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col font-body bg-navy text-foreground">
        {children}
      </body>
    </html>
  );
}

