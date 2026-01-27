import { useRef, useState } from "react";
import commands from "../data/commands.json";

export default function Commands() {
  const [lastCopied, setLastCopied] = useState("");
  const resetTimer = useRef(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    setLastCopied(text);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setLastCopied(""), 1500);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">Commands</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {commands.map((c, idx) => (
          <div
            key={`${c.command}-${idx}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3"
          >
            <button
              type="button"
              onClick={() => copyToClipboard(c.command)}
              className="w-full text-left rounded-xl border border-white/10 bg-primary/40 px-3 py-2 hover:bg-primary/60 transition"
              title="Klick zum Kopieren"
            >
              <span className="font-mono text-accentText text-lg">
                {c.command}
              </span>
            </button>

            <p className="text-white/85 leading-relaxed">{c.beschreibung}</p>

            {lastCopied === c.command && (
              <div className="text-sm text-white/70">Kopiert</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
