export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  display: "swap",
  variable: "--font-poppins",
  weight: "400",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "JAT Banking",
  description: "JAT is a modern banking platform for everyone.",
  referrer: 'origin-when-cross-origin',
  creator: 'Maxjoy Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
