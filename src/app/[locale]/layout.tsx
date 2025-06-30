import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PND dev",
  description: "cv panuwat phetseekeww",
  icons: {
    icon: "/favicon.ico",
  },
};

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <div className="relative min-h-screen bg-[url('/bg-page.jpg')] bg-cover bg-center font-sans  sm:px-12  text-black  ">
            <div className="relative z-10 flex flex-col min-h-screen">
              <div className="py-4 bg-white/70 border-b border-gray-200 backdrop-blur sticky top-0 z-50 shadow-b-lg sm:rounded-bl-xl sm:rounded-br-xl">
                <Header />
              </div>
              {children}
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
