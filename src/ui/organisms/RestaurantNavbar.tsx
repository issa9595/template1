import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";

interface RestaurantNavbarProps {
  brandName: string;
}

const baseNavLinkClasses =
  "text-sm font-medium uppercase tracking-[0.2em] transition-colors";

export function RestaurantNavbar({ brandName }: RestaurantNavbarProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
            to="/"
            className={({ isActive }) =>
              `${baseNavLinkClasses} ${
                isActive
                  ? "text-primary"
                  : "text-slate-900 hover:text-primary dark:text-slate-100"
              }`
            }
          >
            Accueil
          </NavLink>
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
            to="/story"
            className={({ isActive }) =>
              `${baseNavLinkClasses} ${
                isActive
                  ? "text-primary"
                  : "text-slate-900 hover:text-primary dark:text-slate-100"
              }`
            }
          >
            Story
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

        <div className="flex items-center gap-4">
          <PrimaryButton
            className="hidden md:inline-flex"
            onClick={() => navigate("/reservations")}
          >
            Reserve
          </PrimaryButton>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden"
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-primary/10 bg-background-light/95 backdrop-blur-md dark:bg-background-dark/95 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseNavLinkClasses} ${
                  isActive
                    ? "text-primary"
                    : "text-slate-900 hover:text-primary dark:text-slate-100"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `${baseNavLinkClasses} ${
                  isActive
                    ? "text-primary"
                    : "text-slate-900 hover:text-primary dark:text-slate-100"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Menu
            </NavLink>
            <NavLink
              to="/story"
              className={({ isActive }) =>
                `${baseNavLinkClasses} ${
                  isActive
                    ? "text-primary"
                    : "text-slate-900 hover:text-primary dark:text-slate-100"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Story
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
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
