/**
 * References – "Våra uppdrag" cards with optional image, hover effect.
 * Mobile: swipeable slider with dot pagination. All content from client.config.ts.
 */

import { client } from "../../client.config";
import { ReferencesSlider } from "@/components/ReferencesSlider";

export function References() {
  return (
    <section id="referenser" className="bg-[var(--section-alt)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-zinc-700">
          Tidigare projekt
        </h2>
        <h3 className="mt-3 text-center text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
          Våra uppdrag
        </h3>

        <div className="mt-14">
          <ReferencesSlider
            references={client.references}
            primaryColor={client.brand.primaryColor}
            accentColor={client.brand.accentColor}
          />
        </div>
      </div>
    </section>
  );
}
