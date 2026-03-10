import type { PrivateTastingBookingModel } from "../../domain/restaurantPrivateTasting";

interface PrivateTastingBookingSectionProps {
  booking: PrivateTastingBookingModel;
}

export function PrivateTastingBookingSection({
  booking,
}: PrivateTastingBookingSectionProps) {
  return (
    <section
      id="booking-form"
      className="bg-primary/5 py-20 px-6 md:px-20 lg:px-40"
    >
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-primary/20 bg-white shadow-xl dark:bg-background-dark">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <aside className="flex flex-col justify-between bg-primary p-10 text-background-dark md:col-span-2">
            <div>
              <h3 className="mb-6 font-display text-3xl font-bold leading-tight">
                {booking.sidebarTitle}
              </h3>
              <p className="mb-8 leading-relaxed opacity-80">
                {booking.sidebarBody}
              </p>
            </div>
            <div className="space-y-4">
              {booking.badges.map((badge) => (
                <div key={badge.id} className="flex items-center gap-3">
                  <span className="material-symbols-outlined">
                    {badge.icon}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          <div className="md:col-span-3 p-10">
            <form className="space-y-6">
              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">
                  Select Experience
                </label>
                <select className="w-full rounded-lg border border-primary/20 bg-background-light p-3 focus:border-primary focus:ring-primary dark:bg-white/5">
                  {booking.experiences.map((exp) => (
                    <option key={exp}>{exp}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">
                    Guests (2-8)
                  </label>
                  <input
                    type="number"
                    min={2}
                    max={8}
                    defaultValue={2}
                    className="w-full rounded-lg border border-primary/20 bg-background-light p-3 focus:border-primary focus:ring-primary dark:bg-white/5"
                  />
                </div>
                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-primary/20 bg-background-light p-3 focus:border-primary focus:ring-primary dark:bg-white/5"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">
                  Preferred Time
                </label>
                <div className="flex gap-3">
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="time"
                      className="peer hidden"
                      defaultChecked
                    />
                    <div className="cursor-pointer rounded-lg border border-primary/20 p-2 text-center text-sm transition-all peer-checked:bg-primary peer-checked:text-background-dark">
                      Afternoon (15:00)
                    </div>
                  </label>
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="time"
                      className="peer hidden"
                    />
                    <div className="cursor-pointer rounded-lg border border-primary/20 p-2 text-center text-sm transition-all peer-checked:bg-primary peer-checked:text-background-dark">
                      Evening (19:00)
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">
                  Wine Preferences or Occasion
                </label>
                <textarea
                  rows={4}
                  placeholder="Mention preferred regions, dietary requirements, or if this is for a special celebration..."
                  className="w-full rounded-lg border border-primary/20 bg-background-light p-3 focus:border-primary focus:ring-primary dark:bg-white/5"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-xs font-bold uppercase tracking-[0.2em] text-background-dark transition-all hover:bg-primary/90"
              >
                Request Private Tasting
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

