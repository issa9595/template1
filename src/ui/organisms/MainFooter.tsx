export function MainFooter() {
  return (
    <footer className="border-t border-white/5 bg-black py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-xs text-neutral-500 md:flex-row">
        <span>© {new Date().getFullYear()} Landing Template. Tous droits réservés.</span>
        <div className="flex gap-4">
          <a href="#features" className="hover:text-neutral-300">
            Architecture
          </a>
          <a href="#testimonials" className="hover:text-neutral-300">
            Avis
          </a>
          <a href="#cta" className="hover:text-neutral-300">
            Commencer
          </a>
        </div>
      </div>
    </footer>
  );
}

