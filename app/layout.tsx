import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { profile } from "@/lib/resume-data";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://khushikrishnamurthy.com"; // TODO: replace with real deployed domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Khushi Krishnamurthy",
    "Business Analytics",
    "BBA student portfolio",
    "Excel SQL Python",
    "Data Analyst in training",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    url: siteUrl,
    siteName: profile.name,
    type: "profile",
    // TODO: add /public/og-image.png (1200x630) — see README > Placeholder Assets
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Skip link — accessibility-first */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-signal focus:text-paper focus:px-4 focus:py-2 focus:rounded-md"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
