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
  title: "PT WILDHAN BANGUN SEJAHTERA - Konstruksi Jalan Raya Profesional",
  description: "Perusahaan konstruksi jalan raya terkemuka di Gorontalo. Menyediakan layanan pembangunan infrastruktur jalan yang berkualitas dengan standar profesional dan pengalaman bertahun-tahun.",
  keywords: ["PT WILDHAN BANGUN SEJAHTERA", "konstruksi jalan", "infrastruktur", "pembangunan jalan", "Gorontalo", "kontraktor", "road construction"],
  authors: [{ name: "PT WILDHAN BANGUN SEJAHTERA" }],
  icons: {
    icon: "/company-logo.png",
  },
  openGraph: {
    title: "PT WILDHAN BANGUN SEJAHTERA - Konstruksi Jalan Raya",
    description: "Perusahaan konstruksi jalan raya terkemuka di Gorontalo dengan layanan infrastruktur berkualitas tinggi",
    url: "https://wildhanbangunsejahtera.com",
    siteName: "PT WILDHAN BANGUN SEJAHTERA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT WILDHAN BANGUN SEJAHTERA - Konstruksi Jalan Raya",
    description: "Perusahaan konstruksi jalan raya terkemuka di Gorontalo",
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
