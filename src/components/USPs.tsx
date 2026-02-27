/**
 * USPs – "Varför välja oss?" with prominent icon circles and card-style items.
 * All content from client.config.ts.
 */

import { client } from "../../client.config";

export function USPs() {
  return (
    <section className="bg-[var(--primary)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-white/80">
          Trygga val
        </h2>
        <h3 className="mt-3 text-center text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Varför välja oss?
        </h3>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {client.usps.map((usp, i) => (
            <div key={usp.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-xl font-bold text-white shadow-lg shadow-[var(--accent)]/30">
                {i + 1}
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">
                {usp.title}
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-200">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
