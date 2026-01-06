import { DISCORD_INVITE_LINK } from "../consts";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-accentText">Home</h1>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-white/80">Wilkommen geschätzte Polizisten,</p>
        <p className="text-white/80">
          diese Website sollte dazu dienen Informationen besser zu veranschaulichen und alles einfacher zu finden machen. Falls ihr irgendwelche Bugs oder dergleichen findet, meldet diese bitte an Herr Steve Black. Wir sind natürlich auch über Feedback glücklich!
        </p>
        <p className="text-white/80">MFG Eure Leitung</p>
      </div>

      <a
        href={DISCORD_INVITE_LINK}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-2xl border border-accent bg-accent/15 px-5 py-3 font-semibold text-accentText hover:bg-accent/25 transition"
      >
        Discord beitreten
      </a>

    </div>
  );
}
