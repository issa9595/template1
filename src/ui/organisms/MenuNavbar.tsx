import { NavLink } from "react-router-dom";

export function MenuNavbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/10 bg-background-light/80 px-6 py-6 backdrop-blur-md dark:bg-background-dark/80 lg:px-20">
      <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
        <div className="text-primary">
          <span className="material-symbols-outlined text-3xl">
            restaurant
          </span>
        </div>
        <NavLink
          to="/"
          className="font-display text-2xl font-bold tracking-tight"
        >
          L&apos;Essence
        </NavLink>
      </div>
      <nav className="hidden items-center gap-10 md:flex">
        <NavLink
          to="/menu"
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
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
          className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-slate-600"
        >
          Experience
        </a>
        <a
          href="#gallery"
          className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-slate-600"
        >
          Gallery
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white">
          <span className="material-symbols-outlined text-xl">
            shopping_bag
          </span>
        </button>
        <button className="flex items-center md:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

