import { useLocation, Link } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 py-20">
      <h1 className="text-6xl font-bold text-accentText">404</h1>

      <p className="text-xl text-white/90">
        Die URL{" "}
        <span className="font-mono text-accentText">
          {location.pathname}
        </span>{" "}
        wurde nicht gefunden.
      </p>

      <p className="text-white/70 max-w-md">
        Die Seite existiert nicht oder wurde verschoben.
      </p>

      <Link
        to="/"
        className="mt-4 inline-flex items-center rounded-2xl border border-accent bg-accent/15 px-6 py-3 font-semibold text-accentText hover:bg-accent/25 transition"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
