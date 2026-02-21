/**
 * References – "Våra uppdrag" cards with optional image, hover effect.
 * All content from client.config.ts. Placeholder uses Lucide ImageIcon.
 */

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { client } from "../../client.config";

export function References() {
  return (
    <section id="referenser" className="bg-[var(--section-alt)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
          Tidigare projekt
        </p>
        <h2 className="mt-3 text-center text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
          Våra uppdrag
        </h2>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {client.references.map((ref) => (
            <article
              key={ref.title}
              className="group w-full flex-1 overflow-hidden rounded-lg border border-zinc-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:min-w-[280px] sm:max-w-[380px]"
            >
              {ref.image ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={ref.image}
                    alt={ref.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${client.brand.primaryColor} 0%, #16213e 50%, ${client.brand.accentColor}55 100%)` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-white/15" strokeWidth={1} />
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-medium text-zinc-900">{ref.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{ref.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
