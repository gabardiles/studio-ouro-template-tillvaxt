"use client";

import { useState } from "react";

function formatSEK(n: number): string {
  return n.toLocaleString("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  });
}

interface RotCalculatorProps {
  accentColor: string;
}

export function RotCalculator({ accentColor }: RotCalculatorProps) {
  const [laborCost, setLaborCost] = useState("");
  const [persons, setPersons] = useState(1);

  const raw = laborCost.replace(/\s/g, "").replace(",", ".");
  const labor = parseFloat(raw) || 0;

  const maxDeductionPerPerson = 50_000;
  const totalMax = maxDeductionPerPerson * persons;
  const rawDeduction = labor * 0.3;
  const actualDeduction = Math.min(rawDeduction, totalMax);
  const youPay = Math.max(labor - actualDeduction, 0);
  const isCapped = rawDeduction > totalMax;

  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-1 flex items-center gap-2">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: accentColor }}
        >
          %
        </span>
        <h3 className="text-lg font-semibold text-white">ROT-kalkylator</h3>
      </div>
      <p className="mb-6 text-sm text-white/60">
        Beräkna ditt ROT-avdrag direkt — 30% av arbetskostnaden.
      </p>

      <div className="mb-4">
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          Arbetskostnad (exkl. moms)
        </label>
        <div className="relative">
          <input
            type="text"
            inputMode="numeric"
            value={laborCost}
            onChange={(e) =>
              setLaborCost(e.target.value.replace(/[^0-9\s,. ]/g, ""))
            }
            placeholder="t.ex. 80 000"
            className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 pr-12 text-white placeholder-white/35 outline-none ring-0 transition focus:border-transparent focus:ring-2"
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white/50">
            kr
          </span>
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          Antal personer
        </label>
        <div className="flex gap-2">
          {[1, 2].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPersons(n)}
              className="flex-1 cursor-pointer rounded-xl py-2.5 text-sm font-medium transition-all"
              style={
                persons === n
                  ? { backgroundColor: accentColor, color: "#fff" }
                  : {
                      backgroundColor: "rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.65)",
                    }
              }
            >
              {n} person{n > 1 ? "er" : ""}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 border-t border-white/20 pt-5">
        <div className="flex items-center justify-between rounded-lg bg-white/[0.08] px-3 py-2 text-sm">
          <span className="text-white/60">
            Max avdrag ({persons} person{persons > 1 ? "er" : ""})
          </span>
          <span className="font-semibold text-white">{formatSEK(totalMax)}</span>
        </div>

        {labor > 0 ? (
          <>
            <div className="flex items-center justify-between text-sm text-white/65">
              <span>Arbetskostnad</span>
              <span>{formatSEK(labor)}</span>
            </div>
            <div className="flex items-center justify-between text-sm font-medium text-emerald-300">
              <span>
                ROT-avdrag (30%)
                {isCapped && (
                  <span className="ml-1 text-xs text-amber-300/80">
                    — max uppnått
                  </span>
                )}
              </span>
              <span>− {formatSEK(actualDeduction)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/20 pt-3 text-lg font-bold text-white">
              <span>Du betalar</span>
              <span style={{ color: accentColor }}>{formatSEK(youPay)}</span>
            </div>
            {isCapped && (
              <p className="text-xs text-amber-300/75">
                * Avdraget begränsat till max {formatSEK(totalMax)} för {persons}{" "}
                person{persons > 1 ? "er" : ""}.
              </p>
            )}
          </>
        ) : (
          <p className="py-2 text-center text-xs text-white/35">
            Ange arbetskostnad för att beräkna ditt ROT-avdrag
          </p>
        )}

        <p className="pt-1 text-xs text-white/40">
          Vi sköter all rapportering till Skatteverket åt dig.
        </p>
      </div>
    </div>
  );
}
