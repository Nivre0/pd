import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const base =
  "px-4 py-2 rounded-xl font-medium transition border";
const inactive =
  "text-white/90 border-transparent hover:border-accent hover:bg-white/5";
const active =
  "text-accentText border-accent bg-white/5";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full ring-2 ring-accent"
          />
          <div className="leading-tight">
            <div className="text-sm text-accentText">PD</div>
            <div className="text-base font-semibold">pd-page</div>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/learning"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            Learning
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
