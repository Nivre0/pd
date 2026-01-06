import dienstgrade from "../data/dienstgrade.json";

export default function Dienstgrade() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">Dienstgrade</h1>

      <div className="space-y-4">
        {dienstgrade.map((d) => (
          <div
            key={d.rang}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3"
          >
            <h2 className="text-2xl font-bold text-white">{d.rang}</h2>

            <p className="text-white/85">{d.beschreibung}</p>

            {/* Lohn */}
            <div>
              <span className="font-semibold text-accentText">Lohn:</span>{" "}
              <span className="text-white/90">{d.lohn}</span>
            </div>

            {/* Ausrüstung */}
            <div>
              <span className="font-semibold text-accentText">
                Ausrüstung:
              </span>{" "}
              <span className="text-white/90">{d.ausruestung}</span>
            </div>

            {/* Fahrzeuge – jetzt UNTER Ausrüstung */}
            <div>
              <span className="font-semibold text-accentText">
                Fahrzeuge:
              </span>{" "}
              <span className="text-white/90">{d.fahrzeuge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
