import type { MapModel } from "../../domain/restaurantContact";

interface ContactMapSectionProps {
  map: MapModel;
}

export function ContactMapSection({ map }: ContactMapSectionProps) {
  return (
    <section className="relative h-[500px] w-full">
      <div className="absolute inset-0 grayscale contrast-125 opacity-80">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-200 dark:bg-slate-800">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #c2a05b 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="z-10 flex flex-col items-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/20 animate-pulse">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
              {map.label}
            </p>
          </div>
          <img
            src={map.backgroundImageUrl}
            alt="Top down architectural view of Paris streets"
            className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>
      </div>
    </section>
  );
}

