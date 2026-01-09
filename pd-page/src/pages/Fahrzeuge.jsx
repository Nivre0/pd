import { useState } from "react";
import fahrzeuge from "../data/fahrzeuge.json";

function resolveAsset(imageFileName) {
  if (!imageFileName) return null;
  try {
    return new URL(`../assets/${imageFileName}`, import.meta.url).href;
  } catch {
    return null;
  }
}

function VehicleCard({ v }) {
  const src = resolveAsset(v.image);
  const [imgOk, setImgOk] = useState(!!src);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      {/* Bild */}
      <div className="h-56 bg-primary/40 border-b border-white/10 flex items-center justify-center">
        {src && imgOk ? (
          <img
            src={src}
            alt={v.name}
            className="h-full w-full object-contain"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="text-white/50 text-sm">Bild Platzhalter</div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="text-xl font-bold text-white">{v.name}</div>

        <div className="space-y-1 text-white/85">
          <div>
            <span className="font-semibold text-accentText">Garage:</span>{" "}
            {v.garage}
          </div>
          <div>
            <span className="font-semibold text-accentText">Rang:</span>{" "}
            {v.rang}
          </div>
          <div>
            <span className="font-semibold text-accentText">Sitzplätze:</span>{" "}
            {v.sitzplaetze}
          </div>
          <div>
            <span className="font-semibold text-accentText">
              Kofferraum Platz:
            </span>{" "}
            {v.kofferraumPlatz}
          </div>

          {v.notiz && (
            <div className="pt-2 text-white/75 leading-relaxed">
              <span className="font-semibold text-accentText">Notiz:</span>{" "}
              {v.notiz}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Fahrzeuge() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">Fahrzeuge</h1>

      <p className="text-white/80 max-w-3xl">
        Übersicht der Fahrzeuge inkl. Garage, Rang, Sitzplätzen und
        Kofferraum-Kapazität.
      </p>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 max-w-3xl space-y-4">
        <div>
            <h2 className="text-xl font-bold text-accentText">Vorschriften</h2>
            <p className="mt-2 text-white/80">
            Bitte halte dich an die folgenden Regeln zur Fahrzeuglackierung und
            Nutzung.
            </p>
        </div>

        <div className="space-y-2 text-white/85">
            <p>
            <span className="font-semibold text-accentText">Standardfarbe:</span>{" "}
            #FFFFFF (Weiss)
            </p>
            <p>
            <span className="font-semibold text-accentText">Motorrad:</span>{" "}
            Sekundärfarbe #FF5100
            </p>
            <p className="text-white/75">
            Ansonsten gelten die normalen Vorschriften.
            </p>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="space-y-2 text-white/85">
            <p className="font-semibold text-accentText">KRIPO-Ausnahmen</p>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
            <li>Lackierung</li>
            <li>Scheibentönung</li>
            </ul>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="space-y-2 text-white/85">
            <p className="font-semibold text-accentText">Leitung</p>
            <p className="text-white/75">
            Alle Leitungsmitglieder können:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
            <li>jegliche Bewilligungen erteilen</li>
            <li>jegliche Bewilligungen revidieren</li>
            <li>Anpassungen vorschreiben</li>
            </ul>
        </div>
        </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fahrzeuge.map((v, idx) => (
          <VehicleCard key={`${v.name}-${idx}`} v={v} />
        ))}
      </div>
    </div>
  );
}
