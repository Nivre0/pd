export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-accentText">Home</h1>

      <p className="text-white/90">
        This is sample text for the <span className="font-semibold">Home</span> tab.
      </p>

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
