import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { LocaleToaster } from "@/components/LocaleToaster";
import "./globals.css";

const titleFont = Playfair_Display({
  variable: "--font-title",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mensa Glam 2026",
  description: "Mensa LATAM social event in Buenos Aires.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${titleFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <LocaleToaster />
      </body>
    </html>
  );
}
