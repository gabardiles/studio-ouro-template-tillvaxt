/**
 * Root layout – metadata, schema, and brand theme from client.config.ts.
 * All SEO meta tags and JSON-LD are generated from config.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { client } from "../../client.config";
import { getLocalBusinessSchema, getFaqSchema } from "@/lib/schema";
import { ScrollToHash } from "@/components/ScrollToHash";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = client.meta.domain ? `https://${client.meta.domain}` : null;

export const metadata: Metadata = {
  title: {
    default: client.meta.title,
    template: `%s — ${client.brand.name}`,
  },
  description: client.meta.description,
  ...(baseUrl && {
    metadataBase: new URL(baseUrl),
    alternates: { canonical: baseUrl },
  }),
  openGraph: {
    title: client.meta.title,
    description: client.meta.description,
    type: "website",
    ...(baseUrl && { url: baseUrl }),
    locale: "sv_SE",
  },
  other: {
    "geo.region": "SE-M",
    "geo.placename": client.seo.geo.city,
    "geo.position": `${client.seo.geo.lat};${client.seo.geo.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const primary = client.brand.primaryColor;
  const accent = client.brand.accentColor;
  const localBusinessSchema =
    client.schema.enabled && client.schema.localBusiness
      ? getLocalBusinessSchema()
      : null;
  const faqSchema =
    client.schema.enabled && client.schema.faqPage ? getFaqSchema() : null;

  return (
    <html
      lang={client.meta.language}
      style={
        {
          "--primary": primary,
          "--accent": accent,
        } as React.CSSProperties
      }
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {localBusinessSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessSchema),
            }}
          />
        )}
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        )}
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
