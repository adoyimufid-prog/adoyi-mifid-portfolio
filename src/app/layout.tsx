import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adoyi Gado Mifid | Growth Marketing & Prospection",
  description: "Portfolio d'Adoyi Gado Mifid - Spécialiste en Growth Marketing & Prospection basé à Lomé, Togo. 3+ ans d'expérience, data-driven.",
  keywords: ["Growth Marketing", "Prospection B2B", "Acquisition", "Marketing Digital", "Lomé", "Togo", "Adoyi Mifid"],
  authors: [{ name: "Adoyi Gado Mifid" }],
  openGraph: {
    title: "Adoyi Gado Mifid | Growth Marketing & Prospection",
    description: "Spécialiste en Growth Marketing & Prospection - Lomé, Togo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
