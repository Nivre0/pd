import fraktionen from "../data/fraktionen.json";

export default function Fraktionen() {
  const sortedFraktionen = [...fraktionen].sort((a, b) =>
    a.name.localeCompare(b.name, "de", { sensitivity: "base" })
  );

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">Fraktionen</h1>

      {/* Liste */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedFraktionen.map((f, idx) => {
          const isTerror = f.status === "Terrorstatus";

          return (
            <div
              key={`${f.name}-${idx}`}
              className={[
                "rounded-2xl border p-5 space-y-3 transition",
                isTerror
                  ? "border-accent bg-accent/20"
                  : "border-white/10 bg-white/5",
              ].join(" ")}
            >
              <div className="text-xl font-bold text-white">{f.name}</div>

              <div className="space-y-1 text-white/85">
                <div>
                  <span className="font-semibold text-accentText">Farbe:</span>{" "}
                  {f.farbe}
                </div>

                <div>
                  <span className="font-semibold text-accentText">12er:</span>{" "}
                  {f.leader}
                </div>

                <div>
                  <span className="font-semibold text-accentText">Status:</span>{" "}
                  {f.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legende */}
      <div className="pt-4 border-t border-white/10">
        <h2 className="text-2xl font-bold text-accentText">Legende</h2>

        <div className="mt-4 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="font-semibold text-white">Positiv</span>{" "}
            <span className="text-white/70">= Keine Probleme</span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="font-semibold text-white">Neutral</span>{" "}
            <span className="text-white/70">= Keine Eskalationen</span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="font-semibold text-white">Beobachtung</span>{" "}
            <span className="text-white/70">
              = Massnahmen in Planung bei keiner Besserung
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="font-semibold text-white">Bearbeitung</span>{" "}
            <span className="text-white/70">
              = Massnahmen in Vorbereitung
            </span>
          </div>

          <div className="rounded-2xl border border-accent bg-accent/20 p-4">
            <span className="font-semibold text-accentText">Terrorstatus</span>{" "}
            <span className="text-white/80">
              = PD darf Call auf Frak eröffnen, PDW für alle und gezieltes Jagen
              der Personen mit Gewalt
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
