import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://yusssuf-website.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yusuf Ansari | Front End Web Developer",
    template: "%s | Yusuf Ansari",
  },
  description:
    "A Front End Web Developer Portfolio created using Next.js, TypeScript & Tailwind CSS.",
  keywords: [
    "Yusuf Ansari",
    "Front End Web Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Yusuf Ansari", url: siteUrl }],
  creator: "Yusuf Ansari",
  alternates: {
    canonical: "https://yusuf0786.github.io/mywebsite/",
  },
  verification: {
    google: "BhJrHvP820i8RZ3nEKPnvulfJ26NSopHTu8_Jw0u-Vs",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Yusuf Ansari | Front End Web Developer",
    description:
      "A Front End Web Developer Portfolio created using Next.js, TypeScript & Tailwind CSS.",
    siteName: "Yusuf Ansari Portfolio",
    images: [
      {
        url: "https://yusuf0786.github.io/portfolio/img/myimg.png",
        width: 1200,
        height: 630,
        alt: "Yusuf Ansari Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf Ansari | Front End Web Developer",
    description:
      "A Front End Web Developer Portfolio created using Next.js, TypeScript & Tailwind CSS.",
    images: ["https://yusuf0786.github.io/portfolio/img/myimg.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yusuf Ansari",
  author: {
    "@type": "Person",
    name: "Yusuf Ansari",
  },
  image: "https://yusuf0786.github.io/portfolio/img/myimg.png",
  url: siteUrl,
  publisher: {
    "@type": "Organization",
    name: "Yusuf Ansari",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="[scrollbar-gutter:stable] scroll-smooth">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WBB7TWYR8D"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WBB7TWYR8D', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-1">{children}</div>
          <div id="modal-root" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
