import { useState } from "react";
import leitung from "../data/leitung.json";

function resolveAsset(imageFileName) {
  if (!imageFileName) return null;
  try {
    return new URL(`../assets/${imageFileName}`, import.meta.url).href;
  } catch {
    return null;
  }
}

function PersonCard({ person }) {
  const src = resolveAsset(person.image);
  const [imgOk, setImgOk] = useState(!!src);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      {/* Bild */}
      <div className="h-56 bg-primary/40 border-b border-white/10 flex items-center justify-center">
        {src && imgOk ? (
          <img
            src={src}
            alt={`${person.rang} ${person.name}`}
            className="h-full w-full object-contain"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="text-white/50 text-sm">Bild Platzhalter</div>
        )}
      </div>

      {/* Text */}
      <div className="p-5">
        <div className="text-sm font-semibold text-accentText">
          {person.rang}
        </div>
        <div className="mt-1 text-xl font-bold text-white">
          {person.name}
        </div>
      </div>
    </div>
  );
}

export default function Leitung() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-accentText">Leitung</h1>

      {/* Kommandant – zentriert */}
      <section className="grid grid-cols-1 sm:grid-cols-3">
        <div className="sm:col-start-2">
          <PersonCard person={leitung.kommandant} />
        </div>
      </section>

      {/* Stv. Kommandant – zentriert */}
      <section className="grid grid-cols-1 sm:grid-cols-3">
        <div className="sm:col-start-2">
          <PersonCard person={leitung.stvKommandant} />
        </div>
      </section>

      {/* Fachoffiziere */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leitung.fachoffiziere.map((p, idx) => (
          <PersonCard key={`${p.name}-${idx}`} person={p} />
        ))}
      </section>
    </div>
  );
}
