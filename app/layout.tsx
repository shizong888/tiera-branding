import type { Metadata } from "next";
import { IBM_Plex_Sans, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BrandProvider } from "@/lib/brand-context";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiera VPN | Secure. Intelligent. Modern.",
  description: "Tiera is a premium, intelligent VPN designed for people who value privacy without complexity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${manrope.variable} ${geistMono.variable} antialiased`}
      >
        <BrandProvider>
          {children}
        </BrandProvider>
      </body>
    </html>
  );
}
