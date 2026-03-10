export function MainHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-xs text-neutral-200">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-black">
            LP
          </span>
          <span className="font-medium">Landing Template</span>
        </div>
        <nav className="hidden gap-4 md:flex">
          <a href="#features" className="hover:text-white">
            Architecture
          </a>
          <a href="#testimonials" className="hover:text-white">
            Avis
          </a>
          <a href="#cta" className="hover:text-white">
            Commencer
          </a>
        </nav>
      </div>
    </header>
  );
}

