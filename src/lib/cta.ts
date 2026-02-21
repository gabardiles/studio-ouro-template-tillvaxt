/**
 * Resolves primary CTA href: uses contact.phone for tel: links when available,
 * falls back to #kontakt when phone is missing (avoids broken "tel:null").
 */

import { client } from "../../client.config";

export function getPrimaryCtaHref(): string {
  const href = client.hero.cta.primary.href;
  const phone = client.contact.phone?.trim();
  if (href.startsWith("tel:") && phone) {
    return `tel:${phone.replace(/[\s-]/g, "")}`;
  }
  if (href.startsWith("tel:") && !phone) {
    return "#kontakt";
  }
  return href;
}
