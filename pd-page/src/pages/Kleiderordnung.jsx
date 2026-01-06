import organigramRanks from "../assets/OrganigramRanks.png";

const OUTFITS = [
  {
    title: "Aspirant",
    code: "MX2UYS",
    note: "",
  },
  {
    title: "Polizist (Sommer)",
    code: "FR11Y3",
    note: "",
  },
  {
    title: "Polizist (Winter)",
    code: null, // "-" => kein Code
    note: "Kommt noch",
  },
  {
    title: "Motorradstreife",
    code: null,
    note: "Kommt noch",
  },
  {
    title: "Diamant",
    code: null,
    note: "Kommt noch",
  },
];

export default function Kleiderordnung() {
  const copyToClipboard = async (code) => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      // Optional: später Toast/Notification. Für jetzt schlicht.
      alert(`Code kopiert: ${code}`);
    } catch {
      // Fallback, falls Clipboard API blockiert ist
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert(`Code kopiert: ${code}`);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">Kleiderordnung</h1>

      {/* Textblock */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
        <p className="text-white/90">
          Im Kleiderladen den Code eingeben. Ihr könnt Dinge wie Kopfbedeckung,
          Brille, usw. selber wählen, es sollte jedoch professionell bleiben.
        </p>
        <p className="text-white/90">
          Passt euer Oberteil gemäss eurem Rang an (siehe Bild unten).
        </p>
      </div>

      {/* Outfit Grid */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-accentText">Outfits</h2>
        <p className="text-white/70">
          Klicke auf ein Outfit, um den Code zu kopieren. (Bilder kommen noch.)
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OUTFITS.map((o) => {
            const isDisabled = !o.code;

            return (
              <button
                key={o.title}
                type="button"
                onClick={() => copyToClipboard(o.code)}
                disabled={isDisabled}
                className={[
                  "text-left rounded-2xl border p-4 transition",
                  "bg-white/5 border-white/10",
                  isDisabled
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-white/10 hover:border-accent focus:outline-none focus:border-accent",
                ].join(" ")}
              >
                {/* Image placeholder */}
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
                    {o.note ? (
                      <div className="mt-1 text-sm text-white/60">{o.note}</div>
                    ) : null}
                  </div>

                  <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-1">
                    <span className="font-mono text-accentText">
                      {o.code ?? "—"}
                    </span>
                  </div>
                </div>

                {!isDisabled ? (
                  <div className="mt-3 text-sm text-white/70">
                    Klick zum Kopieren
                  </div>
                ) : (
                  <div className="mt-3 text-sm text-white/50">
                    Noch nicht verfügbar
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Organigramm / Ranks Bild */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <img
          src={organigramRanks}
          alt="Organigramm Ranks"
          className="mx-auto max-w-full rounded-xl border border-accent/40"
        />
      </div>
    </div>
  );
}
