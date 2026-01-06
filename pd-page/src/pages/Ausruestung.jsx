import ausruestung from "../data/ausruestung.json";

export default function Ausruestung() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">
        Dienstausrüstung
      </h1>

      <p className="text-white/85 max-w-3xl">
        Bevor Sie Ihren Dienst antreten, überprüfen Sie bitte, ob Ihre Dienstausrüstung vollständig ist. Achten Sie darauf, dass Sie möglicherweise nicht alle Waffen mitnehmen dürfen.
      </p>

      <div className="space-y-6">
        {ausruestung.abschnitte.map((abschnitt, idx) => (
          <section
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-2xl font-bold text-white">
              {abschnitt.titel}
            </h2>

            {abschnitt.hinweis && (
              <div className="mt-2 text-sm text-accentText">
                Hinweis: {abschnitt.hinweis}
              </div>
            )}

            <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
              {abschnitt.punkte.map((punkt, i) => (
                <li key={i} className="leading-relaxed">
                  {punkt}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
