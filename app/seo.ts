import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techvantalabs.com";

export const siteConfig = {
  name: "TechVanta Labs",
  legalName: "TechVanta Labs Pvt Ltd",
  url: siteUrl,
  email: "info@techvantalabs.com",
  address: {
    streetAddress: "118, Sunder Nagar, Ashoka Garden",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462023",
    addressCountry: "IN",
  },
  description:
    "TechVanta Labs builds custom software, websites, mobile apps, ERP, CRM, cloud, analytics, branding, and digital marketing solutions for growing businesses.",
};

export const routeSeo = {
  home: {
    path: "/home",
    title: "Custom Software, Websites & Mobile Apps",
    description:
      "TechVanta Labs delivers custom software, modern websites, mobile apps, ERP, CRM, analytics, and digital growth solutions for businesses across India.",
    priority: 1,
  },
  about: {
    path: "/about",
    title: "About TechVanta Labs",
    description:
      "Learn how TechVanta Labs designs and delivers practical, secure, scalable digital systems from its Bhopal-based technology team.",
    priority: 0.8,
  },
  services: {
    path: "/services",
    title: "Software Development, Web Design & Digital Services",
    description:
      "Explore TechVanta Labs services including custom software development, website development, mobile app development, branding, and digital marketing.",
    priority: 0.95,
  },
  products: {
    path: "/products",
    title: "ERP, CRM & Industry Product Systems",
    description:
      "Discover TechVanta Labs product systems for pharmacy inventory, financial services lead management, and integrated government ERP workflows.",
    priority: 0.9,
  },
  expertise: {
    path: "/expertise",
    title: "Cloud, Analytics, Cyber Security & BI Expertise",
    description:
      "TechVanta Labs expertise spans business intelligence, cloud computing, cyber security, business analytics, and high-performance app development.",
    priority: 0.85,
  },
  whyUs: {
    path: "/why-us",
    title: "Why Choose TechVanta Labs",
    description:
      "See why organizations choose TechVanta Labs for tailored technology delivery, clear communication, scalable builds, and dependable support.",
    priority: 0.8,
  },
  contact: {
    path: "/contact",
    title: "Contact TechVanta Labs",
    description:
      "Contact TechVanta Labs in Bhopal for custom software, websites, mobile apps, support, digital marketing, ERP, CRM, and technology consulting.",
    priority: 0.75,
  },
  legal: {
    path: "/legal",
    title: "Terms, Privacy & Refund Policy",
    description:
      "Review TechVanta Labs terms, privacy commitments, cancellation conditions, refund policy, and service liability information.",
    priority: 0.4,
  },
} as const;

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "TechVanta Labs digital technology solutions",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata(route: keyof typeof routeSeo): Metadata {
  const seo = routeSeo[route];
  const url = absoluteUrl(seo.path);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.path,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage.url],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Custom software development",
    "Website development",
    "Mobile app development",
    "ERP systems",
    "CRM systems",
    "Business intelligence",
    "Cloud computing",
    "Cyber security",
    "Digital marketing",
    "Branding",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  inLanguage: "en-IN",
};
