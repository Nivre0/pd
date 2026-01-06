import { useRef, useState } from "react";
import organigramRanks from "../assets/OrganigramRanks.png";
import outfits from "../data/kleiderordnungOutfits.json";

export default function Kleiderordnung() {
  const [copiedCode, setCopiedCode] = useState(null);
  const hideTimerRef = useRef(null);

  const copyToClipboard = async (code) => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    setCopiedCode(code);

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = setTimeout(() => {
      setCopiedCode(null);
      hideTimerRef.current = null;
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">Kleiderordnung</h1>

      {/* Text */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
        <p className="text-white/90">
          Im Kleiderladen den Code eingeben. Ihr könnt Dinge wie Kopfbedeckung,
          Brille, usw. selber wählen, es sollte jedoch professionell bleiben.
        </p>
        <p className="text-white/90">
          Passt euer Oberteil gemäss eurem Rang an (siehe PDF oben).
        </p>
      </div>

      {/* Outfits */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-accentText">Outfits</h2>
        <p className="text-white/70">
          Klicke auf ein Outfit, um den Code zu kopieren.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outfits.map((o) => {
            const disabled = !o.code;

            return (
              <button
                key={o.title}
                type="button"
                disabled={disabled}
                onClick={() => copyToClipboard(o.code)}
                className={[
                  "text-left rounded-2xl border p-4 transition",
                  "bg-white/5 border-white/10",
                  disabled
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-white/10 hover:border-accent",
                ].join(" ")}
              >
                {/* Bild Platzhalter */}
                <div className="mb-4 flex h-36 items-center justify-center rounded-xl border border-white/10 bg-primary/40">
                  <span className="text-white/50 text-sm">
                    Bild Platzhalter
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {o.title}
                    </div>
                    {o.note && (
                      <div className="mt-1 text-sm text-white/60">
                        {o.note}
                      </div>
                    )}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1">
                    <span className="font-mono text-accentText">
                      {o.code ?? "—"}
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-sm text-white/70">
                  {disabled ? "Noch nicht verfügbar" : "Klick zum Kopieren"}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Organigramm */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <img
          src={organigramRanks}
          alt="Organigramm Ranks"
          className="mx-auto max-w-full rounded-xl border border-accent/40"
        />
      </div>

      {/* Sticky Toast unten */}
      {copiedCode && (
        <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2">
          <div className="rounded-2xl border border-accent/40 bg-primary/95 backdrop-blur px-5 py-4 shadow-lg">
            <div className="text-sm text-white/70">Code kopiert</div>
            <div className="mt-1">
              <span className="font-mono text-accentText text-lg">
                {copiedCode}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
