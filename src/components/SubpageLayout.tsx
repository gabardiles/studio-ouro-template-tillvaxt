/**
 * Shared layout for subpages – back link, header/footer, and CTA banner.
 * Keeps subpages consistent with the one-pager shell.
 */

import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { client } from "../../client.config";
import { getPrimaryCtaHref } from "@/lib/cta";

export function SubpageLayout({
  children,
  backLabel = "Tillbaka",
}: {
  children: React.ReactNode;
  backLabel?: string;
}) {
  return (
    <>
      <Header />
      <main>
        {/* Back link */}
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-[var(--accent)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>

        {children}

        {/* CTA banner */}
        <section className="bg-[var(--primary)] py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-medium text-white sm:text-3xl">
              Redo att komma igång?
            </h2>
            <p className="mt-3 text-zinc-300">
              Kontakta oss för en kostnadsfri offert – vi återkommer inom 2 timmar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={getPrimaryCtaHref()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[var(--accent)]/30 transition hover:brightness-110"
              >
                <Phone className="h-5 w-5" />
                {client.hero.cta.primary.text}
              </a>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10"
              >
                Skicka förfrågan
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
