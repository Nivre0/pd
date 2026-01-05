import { NavLink } from "react-router-dom";

const linkClass =
  "px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition";

const activeClass = "bg-white/20 text-white";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-700 shadow">
      <nav className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/learning"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Learning
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
