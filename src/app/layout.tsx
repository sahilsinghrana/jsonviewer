import Script from "next/script";
import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Online JSON Viewer & Formatter – Dark Mode, Beautify, Validate",
  description:
    "Use our free online JSON Viewer to format, beautify, validate, and explore JSON instantly with dark mode and zero data upload.",
  keywords: [
    "online json viewer",
    "json formatter",
    "json validator",
    "beautify json",
    "prettify json",
    "json beautifier",
    "json editor",
    "dark mode",
    "json tool",
    "format json online",
    "free json viewer",
    "json tree view",
    "json syntax highlighter"
  ],
  authors: [{ name: "Sahil Rana", url: "https://jsonviewer.sahilrana.in" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Online JSON Viewer & Formatter",
    description:
      "Format, validate, beautify, and explore JSON with dark mode—no data upload, fast and free.",
    url: "https://jsonviewer.sahilrana.in",
    siteName: "JSON Viewer",
    images: [
      {
        url: "https://jsonviewer.sahilrana.in/og-image.webp",
        width: 500,
        height: 500,
        alt: "Online JSON Viewer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Viewer & Formatter – Dark Mode",
    description: "Fast, free online tool to format, validate, beautify JSON with dark mode.",
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
              name: "Online JSON Formatter and Viewer",
              url: "https://jsonviewer.sahilrana.in",
              description:
                "JSON Viewer and JSON formatter with Dark mode. View, Prettify, Beautify, Format or remove spaces from Json.",
              applicationCategory: "Utility",
              operatingSystem: "All",
              browserRequirements: "HTML5 compatible browser",
              screenshot:
                "https://jsonviewer.sahilrana.in/jsonviewerscreenshot.png",
            }),
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HCV9XTH1KH" />
        <Script id="show-banner">
          {` window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-HCV9XTH1KH');`}
        </Script>
        <link rel="canonical" href="https://jsonviewer.sahilrana.in" />
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
            <p aria-hidden className="hidden">
              Format, View, prettify or beautify json
            </p>
            <footer className="fixed bottom-0 w-full bg-zinc-400/50 text-black dark:text-slate-200/60 dark:bg-black text-center font-raleway font-light text-xs py-1">
              <div>
                Made with 💞 By{" "}
                <a
                  className="hover:underline"
                  href="https://sahilrana.in"
                  target="_blank"
                >
                  Sahil Rana
                </a>
              </div>
            </footer>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
