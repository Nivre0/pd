import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const linkBase =
  "px-4 py-2 rounded-xl font-medium transition border";
const inactive =
  "text-white/90 border-transparent hover:border-accent hover:bg-white/5";
const active =
  "text-accentText border-accent bg-white/5";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Logo links → Home */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="hidden sm:block font-bold text-accentText text-lg">
            PD Page
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Home
          </NavLink>

          {/* Leitfaden Dropdown */}
          <div className="relative group">
            <NavLink
              to="/learning"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Leitfaden
            </NavLink>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 hidden min-w-[180px] rounded-2xl border border-white/10 bg-primary shadow-lg group-hover:block">
              <div className="p-2">
                <Link
                  to="/learning/funk-codes"
                  className="block rounded-xl px-3 py-2 text-white/90 hover:bg-white/5 hover:text-white transition"
                >
                  Funk Codes
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
