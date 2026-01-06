import { DISCORD_INVITE_LINK } from "../consts";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-accentText">Home</h1>

      <a
        href={DISCORD_INVITE_LINK}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-2xl border border-accent bg-accent/15 px-5 py-3 font-semibold text-accentText hover:bg-accent/25 transition"
      >
        Discord beitreten
      </a>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-white/80">
          Scroll to see the navbar stay sticky at the top.
        </p>
        <div className="mt-4 h-[900px] rounded-xl border border-accent/40 bg-primary/40 p-4">
          <p className="text-white/70">Extra space for scrolling…</p>
        </div>
      </div>
    </div>
  );
}
