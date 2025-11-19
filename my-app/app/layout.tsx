import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acharya Kartike Guru Ji",
  description: "Acharya Kartike Guru Ji is a renowned Vedic astrologer and puja specialist known for his expertise in Kaal Sarp Dosh Nivaran, Narayan Nagbali, Tripindi Shraddh, Pitar Dosh Nivaran, Mahamrityunjay Jaap, Grah Shanti, Yog Shanti, Nakshatra Shanti, Vastu Shanti, Rudrabhishek, and traditional Tarpan, Pind Daan & Shraddh pujas. With over 20 years of experience, he performs authentic Vedic rituals at Trimbakeshwar Jyotirlinga, offering personalized guidance and blessings to devotees across India and worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
