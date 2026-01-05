export default function Learning() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-accentText">Learning</h1>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-white/90">
          This is sample text for the <span className="font-semibold">Learning</span> tab.
        </p>
        <p className="mt-2 text-white/75">
          Add your learning notes, resources, or progress here.
        </p>

        <div className="mt-5 rounded-xl border border-accent/40 bg-primary/40 p-4">
          <p className="text-accentText">
            Highlight box using your accent/text color.
          </p>
        </div>
      </div>
    </div>
  );
}
