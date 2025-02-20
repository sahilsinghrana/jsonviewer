import Script from "next/script";
import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "JSON Viewer",
  description:
    "JSON Viewer and json formatter with Dark mode. Format or parse Json.",
  keywords: [
    "json",
    "viewer",
    "dark",
    "developer",
    "Sahil",
    "Rana",
    "Formatter",
    "Parser",
  ],
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
    type: "website",
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
              description: "JSON Viewer and formatter with Dark mode.",
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
            <footer className="fixed bottom-0 w-full bg-zinc-400/50 text-black dark:text-slate-200/50 dark:bg-black text-center font-raleway font-light text-xs py-1">
              Made with 💞 By{" "}
              <a
                className="hover:underline"
                href="https://sahilrana.in"
                target="_blank"
              >
                Sahil Rana
              </a>
            </footer>
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
