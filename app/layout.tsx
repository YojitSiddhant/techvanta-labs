import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { SiteShell } from "./_components/site-shell";
import { organizationJsonLd, siteConfig, websiteJsonLd } from "./seo";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Custom Software, Websites & Mobile Apps`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "TechVanta Labs",
    "custom software development Bhopal",
    "website development India",
    "mobile app development",
    "ERP development",
    "CRM development",
    "business intelligence",
    "cloud computing",
    "cyber security",
    "digital marketing",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/home",
  },
  openGraph: {
    title: `${siteConfig.name} | Custom Software, Websites & Mobile Apps`,
    description: siteConfig.description,
    url: "/home",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TechVanta Labs digital technology solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Custom Software, Websites & Mobile Apps`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      data-theme="light"
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
