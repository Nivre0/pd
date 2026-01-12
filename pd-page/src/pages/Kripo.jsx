import kripo from "../data/kripo.json";

export default function Kripo() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">{kripo.titel}</h1>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <p className="text-white/85 leading-relaxed">{kripo.einleitung}</p>

        <ul className="list-disc space-y-2 pl-6 text-white/85">
          {kripo.aufgaben.map((a, idx) => (
            <li key={idx} className="leading-relaxed">
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-2xl font-bold text-white">Voraussetzungen & Rechte</h2>

        <ul className="list-disc space-y-2 pl-6 text-white/85">
          {kripo.bedingungen.map((b, idx) => (
            <li key={idx} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
