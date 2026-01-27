import { useMemo, useState } from "react";
import kapoDienstgrade from "../data/dienstgrade_kapo.json";
import kripoDienstgrade from "../data/dienstgrade_kripo.json";

function Chevron({ open }) {
  return (
    <svg
      className={[
        "h-5 w-5 transition-transform",
        open ? "rotate-180" : "rotate-0",
      ].join(" ")}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AccordionList({ daten }) {
  const [openRangs, setOpenRangs] = useState(() => new Set());

  const toggle = (rang) => {
    setOpenRangs((prev) => {
      const next = new Set(prev);
      if (next.has(rang)) next.delete(rang);
      else next.add(rang);
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {daten.map((d) => {
        const open = openRangs.has(d.rang);

        return (
          <div
            key={d.rang}
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(d.rang)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition"
              aria-expanded={open}
            >
              <h2 className="text-2xl font-bold text-white">{d.rang}</h2>
              <div className="shrink-0 rounded-xl border border-white/10 bg-primary/40 p-2 text-accentText">
                <Chevron open={open} />
              </div>
            </button>

            {open && (
              <div className="px-5 pb-5 space-y-3">
                {d.beschreibung && <p className="text-white/85">{d.beschreibung}</p>}

                {d.lohn && d.lohn !== "—" && (
                  <div>
                    <span className="font-semibold text-accentText">Lohn:</span>{" "}
                    <span className="text-white/90">{d.lohn}</span>
                  </div>
                )}

                {d.ausruestung && (
                  <div>
                    <span className="font-semibold text-accentText">Ausrüstung:</span>{" "}
                    <span className="text-white/90">{d.ausruestung}</span>
                  </div>
                )}

                {d.fahrzeuge && (
                  <div>
                    <span className="font-semibold text-accentText">Fahrzeuge:</span>{" "}
                    <span className="text-white/90">{d.fahrzeuge}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Dienstgrade() {
  const [abteilung, setAbteilung] = useState("KAPO");

  const daten = useMemo(() => {
    return abteilung === "KAPO" ? kapoDienstgrade : kripoDienstgrade;
  }, [abteilung]);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">Dienstgrade</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {["KAPO", "KRIPO"].map((t) => {
          const active = abteilung === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setAbteilung(t)}
              className={[
                "rounded-2xl border px-5 py-2 font-semibold transition",
                active
                  ? "border-accent bg-accent/15 text-accentText"
                  : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-accent",
              ].join(" ")}
            >
              {t}
            </button>
          );
        })}
      </div>

      <AccordionList key={abteilung} daten={daten} />
    </div>
  );
}
