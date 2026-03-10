import { NavLink } from "react-router-dom";
import { PrimaryButton } from "../atoms/PrimaryButton";

export function WineNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background-light/90 px-6 py-4 backdrop-blur-md dark:bg-background-dark/90 md:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">
              wine_bar
            </span>
          </div>
          <NavLink
            to="/"
            className="font-display text-2xl font-bold tracking-tight uppercase text-slate-900 dark:text-slate-100"
          >
            L&apos;Essence
          </NavLink>
        </div>
        <nav className="hidden items-center gap-10 md:flex">
          <NavLink
            to="/menu"
            className="text-sm font-medium uppercase tracking-[0.2em] text-slate-900 transition-colors hover:text-primary dark:text-slate-100"
          >
            Menu
          </NavLink>
          <a
            href="#reservations"
            className="text-sm font-medium uppercase tracking-[0.2em] text-slate-900 transition-colors hover:text-primary dark:text-slate-100"
          >
            Reservations
          </a>
          <a
            href="#experience"
            className="text-sm font-medium uppercase tracking-[0.2em] text-slate-900 transition-colors hover:text-primary dark:text-slate-100"
          >
            Experience
          </a>
          <a
            href="#gallery"
            className="text-sm font-medium uppercase tracking-[0.2em] text-slate-900 transition-colors hover:text-primary dark:text-slate-100"
          >
            Gallery
          </a>
        </nav>
        <PrimaryButton className="hidden text-sm md:inline-flex">
          Book Now
        </PrimaryButton>
      </div>
    </header>
  );
}

