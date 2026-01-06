import allgemeineRegeln from "../data/leitfaden_allgemeineRegeln.json";
import rechte from "../data/leitfaden_rechte.json";
import jobMenue from "../data/leitfaden_jobMenue.json";
import oTablet from "../data/leitfaden_oTablet.json";

export default function Leitfaden() {
  const chapters = [allgemeineRegeln, rechte, jobMenue, oTablet];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      {/* Inhaltsverzeichnis */}
      <aside className="lg:sticky lg:top-24 h-fit">
        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="border-b border-white/10 px-4 py-3">
            <div className="text-sm text-white/70">Leitfaden</div>
            <div className="text-lg font-bold text-accentText">
              Inhaltsverzeichnis
            </div>
          </div>

          <nav className="p-2 space-y-1">
            {chapters.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className="w-full text-left rounded-xl px-3 py-2 text-white/85 hover:bg-white/5 hover:text-white transition border border-transparent hover:border-accent"
                type="button"
              >
                {c.titel}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-accentText">Leitfaden</h1>

        {/* Allgemeine Regeln */}
        <article
          id={allgemeineRegeln.id}
          className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h2 className="text-2xl font-bold text-white">
            {allgemeineRegeln.titel}
          </h2>

          <ul className="mt-4 list-disc space-y-3 pl-6 text-white/85">
            {allgemeineRegeln.punkte.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </article>

        {/* Rechte */}
        <article
          id={rechte.id}
          className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h2 className="text-2xl font-bold text-white">{rechte.titel}</h2>

          <div className="mt-4 rounded-2xl border border-accent/40 bg-primary/40 p-5">
            <p className="text-white/90 leading-relaxed">{rechte.text}</p>
          </div>
        </article>

        {/* Job-Menü */}
        <article
          id={jobMenue.id}
          className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h2 className="text-2xl font-bold text-white">
            {jobMenue.titel}
          </h2>

          <div className="mt-4 space-y-4">
            {jobMenue.punkte.map((punkt, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-primary/40 p-5"
              >
                <div className="text-lg font-semibold text-accentText">
                  {punkt.titel}
                </div>

                <ul className="mt-3 list-disc space-y-2 pl-6 text-white/85">
                  {punkt.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        {/* O-Tablet */}
        <article
          id={oTablet.id}
          className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h2 className="text-2xl font-bold text-white">{oTablet.titel}</h2>

          <ul className="mt-4 list-disc space-y-3 pl-6 text-white/85">
            {oTablet.punkte.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
