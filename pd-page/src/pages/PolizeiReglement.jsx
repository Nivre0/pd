import reglementPunkte from "../data/polizeiReglement.json";

export default function PolizeiReglement() {
  return (
    <div className="space-y-6">
      {/* Titel */}
      <h1 className="text-4xl font-bold text-white">
        Polizei Reglement
      </h1>

      {/* Einleitung */}
      <p className="text-white/85 max-w-4xl">
        Dieses Reglement ist von allen Angestellten der Polizei einzuhalten.
        Zuwiderhandeln wird mittels Verwarnungen, Suspendierungen bis hin zu
        Kündigungen empfindlich sanktioniert. Sanktionen der Regierung bleiben
        vorbehalten.
      </p>

      {/* Reglement Box */}
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
        {/* Roter Streifen links */}
        <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-accent" />

        <ol className="list-decimal space-y-4 pl-6 text-white/90">
          {reglementPunkte.map((punkt, index) => (
            <li key={index} className="leading-relaxed">
              {punkt}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
