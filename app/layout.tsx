import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "./_components/site-shell";

export const metadata: Metadata = {
  title: "TechVanta Labs",
  description: "TechVanta Labs website structure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
