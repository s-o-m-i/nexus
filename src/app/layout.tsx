import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devmola.com"),
  title: {
    default: "DevMola | Software Development & Digital Growth",
    template: "%s | DevMola",
  },
  description: "DevMola is a software development company that provides a wide range of services to businesses and individuals.",
  keywords: ["software development", "web development", "mobile app development", "digital marketing", "SEO"],
  alternates: {
    canonical: "https://devmola.com/",
  },
  openGraph: {
    title: "DevMola | Software Development & Digital Growth",
    description: "DevMola is a software development company that provides a wide range of services to businesses and individuals.",
    type: "website",
    url: "https://devmola.com",
    siteName: "DevMola",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevMola | Software Development & Digital Growth",
    description: "DevMola is a software development company that provides a wide range of services to businesses and individuals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        {/* Google Analytics tag */}
        <link rel="icon" type="image/svg+xml" href="/next.svg" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LT68PB6M75"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LT68PB6M75');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
