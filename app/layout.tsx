import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ThemeProvider from "./theme";
import { seo } from "@/config/siteConfig";

// =============================================================================
//  SEO metadata — pulls title, description, and OG image from
//  config/siteConfig.ts so editing one file updates both the visible text
//  AND how the site appears in search results / social previews.
// =============================================================================
export const metadata: Metadata = {
  // Resolves relative paths (like og:image) against your real domain.
  // Update seo.siteUrl in config/siteConfig.ts before deploying.
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: seo.title,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: seo.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
