/**
 * JSON-LD schema generation from client.config.ts.
 * Used in layout.tsx to inject LocalBusiness and FAQPage scripts for SEO.
 */

import { client } from "../../client.config";

/** LocalBusiness (or subtype e.g. Plumber) schema for rich results and knowledge panel. */
export function getLocalBusinessSchema(): object {
  const baseUrl = client.meta.domain ? `https://${client.meta.domain}` : undefined;
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": client.seo.businessType,
    name: client.brand.name,
    ...(baseUrl && { url: baseUrl }),
    telephone: client.contact.phone,
    email: client.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: client.contact.address,
      addressLocality: client.seo.geo.city,
      addressRegion: client.seo.geo.region,
      addressCountry: client.seo.geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: client.seo.geo.lat,
      longitude: client.seo.geo.lng,
    },
    openingHours: client.contact.hours,
    areaServed: client.seo.serviceArea,
  };

  if (client.reviews.show && client.reviews.score && client.reviews.count) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: client.reviews.score,
      reviewCount: client.reviews.count,
    };
  }

  return schema;
}

/** FAQPage schema for FAQ rich results in search. */
export function getFaqSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: client.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
