import { NavLink, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../atoms/PrimaryButton";

interface RestaurantNavbarProps {
  brandName: string;
}

const baseNavLinkClasses =
  "text-sm font-medium uppercase tracking-[0.2em] transition-colors";

export function RestaurantNavbar({ brandName }: RestaurantNavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary">
            restaurant
          </span>
          <NavLink
            to="/"
            className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
          >
            {brandName}
          </NavLink>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${baseNavLinkClasses} ${
                isActive
                  ? "text-primary"
                  : "text-slate-900 hover:text-primary dark:text-slate-100"
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `${baseNavLinkClasses} ${
                isActive
                  ? "text-primary"
                  : "text-slate-900 hover:text-primary dark:text-slate-100"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseNavLinkClasses} ${
                isActive
                  ? "text-primary"
                  : "text-slate-900 hover:text-primary dark:text-slate-100"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <PrimaryButton
          className="hidden sm:inline-flex"
          onClick={() => navigate("/reservations")}
        >
          Reserve
        </PrimaryButton>
      </div>
    </header>
  );
}
