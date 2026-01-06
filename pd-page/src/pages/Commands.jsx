import commands from "../data/commands.json";

export default function Commands() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">Commands</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {commands.map((c, idx) => (
          <div
            key={`${c.command}-${idx}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3"
          >
            <div className="rounded-xl border border-white/10 bg-primary/40 px-3 py-2">
              <span className="font-mono text-accentText text-lg">
                {c.command}
              </span>
            </div>

            <p className="text-white/85 leading-relaxed">{c.beschreibung}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
