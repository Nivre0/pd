import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import radioCodes from "../data/radioCodes.json";

function normalizeAnswer(s) {
  return (s ?? "")
    .toString()
    .replace(/\([^)]*\)/g, "") // Klammern ignorieren
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FunkCodesLearn() {
  const questions = useMemo(() => shuffle(radioCodes), []);

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState([]);
  const inputRef = useRef(null);

  const current = questions[index];
  const isFinished = index >= questions.length;
  const correctCount = answers.filter((a) => a.isCorrect).length;

  function submit() {
    if (!current) return;

    const isCorrect =
      normalizeAnswer(input) === normalizeAnswer(current.text);

    setAnswers((prev) => [
      ...prev,
      {
        code: current.code,
        correctText: current.text,
        userText: input,
        isCorrect,
      },
    ]);

    setInput("");
    setIndex((prev) => prev + 1);
    setTimeout(() => inputRef.current?.focus(), 0);
  }

  function restart() {
    window.location.reload();
  }

  /* ===========================
     FINISH SCREEN
  ============================ */
  if (isFinished) {
    return (
      <div className="space-y-6">
        {/* Header + Top Back Button */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-accentText">
              Funk Codes lernen
            </h1>
            <p className="mt-2 text-white/80">
              Fertig! Hier sind deine Resultate.
            </p>
          </div>

          <Link
            to="/learning/funk-codes"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition"
          >
            Zurück zu Funk Codes
          </Link>
        </div>

        {/* Score */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-lg">
            <span className="font-semibold text-accentText">Score:</span>{" "}
            {correctCount} / {answers.length}
          </div>

          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-accent"
              style={{
                width: `${Math.round(
                  (correctCount / answers.length) * 100
                )}%`,
              }}
            />
          </div>

          <div className="mt-4">
            <button
              onClick={restart}
              className="rounded-2xl border border-accent bg-accent/15 px-5 py-2 font-semibold text-accentText hover:bg-accent/25 transition"
            >
              Nochmal lernen
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="bg-accent/20 px-4 py-3 font-semibold text-accentText">
            Details
          </div>

          <div className="divide-y divide-white/10">
            {answers.map((a, i) => (
              <div key={i} className="px-4 py-4 space-y-1">
                <div className="flex justify-between items-center">
                  <div className="font-mono text-accentText">{a.code}</div>
                  <div
                    className={`rounded-full px-3 py-1 text-sm border ${
                      a.isCorrect
                        ? "border-white/15 bg-white/5 text-white"
                        : "border-accent bg-accent/15 text-accentText"
                    }`}
                  >
                    {a.isCorrect ? "Richtig" : "Falsch"}
                  </div>
                </div>

                <div className="text-white/85">
                  <span className="text-white/60">Deine Antwort:</span>{" "}
                  {a.userText || "—"}
                </div>
                <div className="text-white/85">
                  <span className="text-white/60">Richtig wäre:</span>{" "}
                  {a.correctText}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="flex justify-start pt-4">
          <Link
            to="/learning/funk-codes"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition"
          >
            ← Zurück zu Funk Codes
          </Link>
        </div>
      </div>
    );
  }

  /* ===========================
     QUIZ SCREEN
  ============================ */

  const progress = Math.round((index / questions.length) * 100);

  return (
    <div className="space-y-6">
      {/* Header + Top Back Button */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-accentText">
            Funk Codes lernen
          </h1>
          <p className="mt-2 text-white/80">
            Tippe die Bedeutung zum angezeigten Code ein.
          </p>
        </div>

        <Link
          to="/learning/funk-codes"
          className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition"
        >
          Zurück zu Funk Codes
        </Link>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
        <div className="flex justify-between text-white/70">
          <div>
            Frage <span className="text-white">{index + 1}</span> /{" "}
            <span className="text-white">{questions.length}</span>
          </div>
          <div>
            Richtig:{" "}
            <span className="text-accentText font-semibold">
              {correctCount}
            </span>
          </div>
        </div>

        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-accent"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-primary/40 p-5">
          <div className="text-sm text-white/60">Code</div>
          <div className="mt-1 font-mono text-3xl text-accentText">
            {current.code}
          </div>
        </div>

        <div>
          <label className="text-sm text-white/80">Bedeutung</label>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className="mt-1 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent"
            placeholder="Antwort eingeben…"
            autoFocus
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={submit}
            className="rounded-2xl border border-accent bg-accent/15 px-5 py-3 font-semibold text-accentText hover:bg-accent/25 transition"
          >
            Antwort prüfen
          </button>
        </div>
      </div>

      {/* Bottom Back Button */}
      <div className="flex justify-start pt-2">
        <Link
          to="/learning/funk-codes"
          className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition"
        >
          ← Zurück zu Funk Codes
        </Link>
      </div>
    </div>
  );
}
