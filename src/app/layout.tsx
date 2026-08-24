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

// Le nom complet est la seule requête sur laquelle il n'y a aucune concurrence :
// il ouvre le titre, dans l'ordre exact utilisé sur LinkedIn.
const TITRE = "Mifid ADOYI GADO | Business Development & Partenariats stratégiques";
const RESUME =
  "Business developer à Lomé, Togo. 800+ inscrits acquis pour la Semaine de la Logistique, 5M+ FCFA de partenariats mobilisés auprès du PNUD, de la GIZ et de la Chambre de Commerce, 2 000+ prospects contactés en Afrique de l'Ouest.";

export const metadata: Metadata = {
  title: TITRE,
  description: RESUME,
  keywords: [
    "Mifid Adoyi Gado",
    "Business Development",
    "Partenariats stratégiques",
    "Prospection B2B",
    "Growth Marketing",
    "Logistique",
    "Supply Chain",
    "Lomé",
    "Togo",
    "Afrique de l'Ouest",
  ],
  authors: [{ name: "Mifid ADOYI GADO" }],
  openGraph: {
    title: TITRE,
    description: RESUME,
    type: "profile",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
