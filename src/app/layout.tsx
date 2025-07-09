import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Navigation } from "@/components/navigation";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Scrole - Discover Amazing Shopify Stores",
  description: "Discover curated Shopify stores and their best products. Find trending fashion, watches, fitness gear, beauty products and more.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased"}>
        <ClientBody>
          <Navigation />
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </ClientBody>
      </body>
    </html>
  );
}