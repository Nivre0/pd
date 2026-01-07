import ortskenntnis1 from "../assets/ortskenntnis_1.png";
import ortskenntnis2 from "../assets/ortskenntnis_2.png";

export default function Ortskenntnis() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">
        Ortskenntnis
      </h1>

      <p className="text-white/80 max-w-3xl">
        Auf dieser Seite findest du wichtige Karten und Übersichten zur
        Ortskenntnis. Diese helfen dir, dich im Einsatz besser zu orientieren.
      </p>

      {/* Bilder */}
      <div className="space-y-6">
        {[ortskenntnis1, ortskenntnis2].map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <img
              src={img}
              alt={`Ortskenntnis ${idx + 1}`}
              className="mx-auto w-full max-w-5xl rounded-xl border border-accent/40 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
