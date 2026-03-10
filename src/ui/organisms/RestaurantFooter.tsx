import type { RestaurantHomeViewModel } from "../../domain/restaurantHome";

interface RestaurantFooterProps {
  viewModel: RestaurantHomeViewModel;
}

export function RestaurantFooter({ viewModel }: RestaurantFooterProps) {
  const { brandName, footerSections, copyright } = viewModel;

  return (
    <footer
      className="py-16 px-6 text-white lg:px-20"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">
              restaurant
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">
              {brandName}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Defining the standard of fine dining through passion, tradition, and
            innovation.
          </p>
        </div>

        <div>
          <h4 className="font-display mb-6 text-lg text-primary">
            {footerSections.quickLinks.title}
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            {footerSections.quickLinks.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display mb-6 text-lg text-primary">Location</h4>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            {footerSections.location.addressLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p className="text-sm text-slate-400">
            <a
              href={footerSections.location.phoneHref}
              className="transition-colors hover:text-primary"
            >
              {footerSections.location.phoneLabel}
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-display mb-6 text-lg text-primary">Follow Us</h4>
          <div className="flex gap-4">
            {footerSections.social.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-primary hover:text-primary"
              >
                {social.icon === "instagram" && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2.5A4.505 4.505 0 0 0 7.5 11 4.505 4.505 0 0 0 12 15.5 4.505 4.505 0 0 0 16.5 11 4.505 4.505 0 0 0 12 6.5zm0 2A2.503 2.503 0 0 1 14.5 11 2.503 2.503 0 0 1 12 13.5 2.503 2.503 0 0 1 9.5 11 2.503 2.503 0 0 1 12 8.5zm4.25-3.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
                  </svg>
                )}
                {social.icon === "pinterest" && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M12.04 2C7.53 2 5 5.09 5 8.35c0 1.53.85 3.43 2.22 4.04.21.09.32.05.37-.15.03-.16.23-.95.32-1.32a.33.33 0 0 0-.08-.31c-.45-.55-.81-1.56-.81-2.5 0-2.42 1.83-4.77 4.95-4.77 2.7 0 4.59 1.83 4.59 4.45 0 2.84-1.44 4.8-3.3 4.8-.97 0-1.69-.8-1.46-1.78.28-1.19.83-2.47.83-3.33 0-.77-.41-1.42-1.26-1.42-1 0-1.8 1.03-1.8 2.41 0 .88.3 1.48.3 1.48s-1 4.08-1.18 4.8c-.35 1.44-.05 3.21-.03 3.39.02.07.1.09.14.03.07-.09 1.02-1.34 1.34-2.57.09-.33.52-2.03.52-2.03.26.5 1.03.93 1.85.93 2.43 0 4.08-2.1 4.08-5.08C18 5.3 15.56 2 12.04 2z" />
                  </svg>
                )}
                {social.icon === "x" && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M17.53 3H20l-4.35 4.97L20.5 21h-4.03l-2.86-7.17L9.9 21H7.44L12 14.52 7.5 3h4.03l2.57 6.63L17.53 3z" />
                  </svg>
                )}
                {social.icon === "facebook" && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M13 3h4a1 1 0 0 1 1 1v3h-3a1 1 0 0 0-1 1v3h4v4h-4v6h-4v-6H7v-4h3V8a5 5 0 0 1 5-5z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 md:flex-row">
        <div className="text-center md:text-left space-y-1">
          <div>{copyright}</div>
          <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-600">
            Created and sold by{" "}
            <a
              href="https://mada-dev.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              mada-dev.com
            </a>
          </div>
        </div>
        <div className="flex gap-6 uppercase tracking-[0.2em]">
          <a href="/privacy-policy" className="transition-colors hover:text-primary">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="transition-colors hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

