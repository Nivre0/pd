function Home() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Home</h1>
      <p className="text-lg">
        This is sample text for the <span className="font-semibold">Home</span>{" "}
        tab.
      </p>
      <p className="text-slate-700">
        Scroll to see the navbar stay sticky at the top.
      </p>

      {/* just to make scrolling obvious */}
      <div className="h-[900px] rounded-xl bg-white/40 p-4">
        <p className="text-slate-700">Extra space for scrolling…</p>
      </div>
    </div>
  );
}

export default Home;
