/**
 * About – two-column layout: text + link left, image right.
 * Stats bar spans full container width below. All content from client.config.ts.
 */

import Link from "next/link";
import Image from "next/image";
import { ImageIcon, ArrowRight } from "lucide-react";
import { client } from "../../client.config";

export function About() {
  const { about } = client;

  return (
    <section id="om-oss" className="bg-[var(--section-alt)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Two-column: text + image */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
              Om oss
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              {about.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              {about.body}
            </p>
            {about.secondaryBody && (
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                {about.secondaryBody}
              </p>
            )}

            <Link
              href="/om-oss"
              className="mt-6 inline-flex items-center gap-1.5 text-base font-medium text-[var(--accent)] transition-colors hover:brightness-110"
            >
              Läs mer om oss <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center justify-center">
            {about.image ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 shadow-lg">
                <Image
                  src={about.image}
                  alt={about.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${client.brand.primaryColor} 0%, #16213e 60%, ${client.brand.accentColor}66 100%)` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="h-20 w-20 text-white/20" strokeWidth={1} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats bar – full container width */}
        {about.stats.length > 0 && (
          <div className="mt-14 flex flex-wrap items-center divide-x divide-zinc-200 rounded-lg border border-zinc-200 bg-white sm:flex-nowrap">
            {about.stats.map((stat) => (
              <div key={stat.label} className="flex-1 basis-1/2 px-4 py-6 text-center sm:basis-0">
                <p className="text-2xl font-medium text-[var(--primary)] sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
