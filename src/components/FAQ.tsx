"use client";

/**
 * FAQ – single card with divider lines between items.
 * JSON-LD FAQPage schema generated in layout from the same client.faq data.
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { client } from "../../client.config";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-zinc-700">
          Svar på vanliga funderingar
        </h2>
        <h3 className="mt-3 text-center text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
          Vanliga frågor
        </h3>

        <div className="mt-14 overflow-hidden rounded-lg border border-zinc-200 bg-white">
          {client.faq.map((item, index) => {
            const isOpen = openIndex === index;
            const isLast = index === client.faq.length - 1;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-medium text-zinc-900 transition-colors hover:text-zinc-700"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-[var(--accent)] text-white" : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-200 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-zinc-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
                {!isLast && <div className="mx-6 border-t border-zinc-100" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
