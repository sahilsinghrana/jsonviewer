import type { Metadata } from "next";

import Script from "next/script";

import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "JSON Viewer",
  description: "JSON Viewer with Dark mode.",
  keywords: ["json", "viewer", "dark mode", "developer tool", "Sahil", "Rana"],
  authors: [{ name: "Sahil Rana", url: "https://jsonviewer.sahilrana.in" }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "JSON Viewer",
    description: "JSON Viewer with Dark mode.",
    url: "https://jsonviewer.sahilrana.in",
    siteName: "JSON Viewer",
    images: [
      {
        url: "https://jsonviewer.sahilrana.in/og-image.webp",
        width: 500,
        height: 500,
        alt: "JSON Viewer",
      },
    ],
    locale: "en_US",
    type: "website", // Open Graph type; for web apps, additional JSON‑LD is provided.
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Viewer",
    description: "JSON Viewer with Dark mode.",
    images: ["https://jsonviewer.sahilrana.in/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "JSON Viewer",
              url: "https://jsonviewer.sahilrana.in",
              description: "JSON Viewer with Dark mode.",
              applicationCategory: "Utility",
              operatingSystem: "All",
              browserRequirements: "HTML5 compatible browser",
              screenshot:
                "https://jsonviewer.sahilrana.in/jsonviewerscreenshot.png",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Toaster position="top-center" richColors closeButton />
            <ThemeToggle />
            {children}
          </>
        </ThemeProvider>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HCV9XTH1KH" />
      <Script id="show-banner">
        {` window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-HCV9XTH1KH');`}
      </Script>
    </html>
  );
}
