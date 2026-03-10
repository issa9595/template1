import type { ReservationsFormModel } from "../../domain/restaurantReservations";

interface ReservationsFormSectionProps {
  form: ReservationsFormModel;
  variant?: "overlap" | "standalone";
}

export function ReservationsFormSection({
  form,
  variant = "overlap",
}: ReservationsFormSectionProps) {
  const sectionClasses =
    variant === "overlap"
      ? "relative z-30 -mt-10 pb-24 px-6 max-w-4xl mx-auto"
      : "relative z-10 py-24 px-6 max-w-4xl mx-auto";

  return (
    <section className={sectionClasses}>
      <div className="rounded-xl border border-primary/10 bg-white p-8 shadow-2xl dark:bg-zinc-900 md:p-12">
        <div className="mb-10 text-center">
          <h3 className="mb-2 font-display text-3xl">Secure Your Table</h3>
          <p className="text-slate-500 dark:text-slate-400">
            Please provide your details below to confirm your visit.
          </p>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-primary">
                First Name
              </label>
              <input
                type="text"
                placeholder="e.g. Julian"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 focus:border-primary focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-primary">
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g. Montgomery"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 focus:border-primary focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-primary">
              Email Address
            </label>
            <input
              type="email"
              placeholder="julian@example.com"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 focus:border-primary focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-primary">
                Date
              </label>
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  calendar_today
                </span>
                <input
                  type="date"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 pl-12 focus:border-primary focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-primary">
                Time
              </label>
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  schedule
                </span>
                <select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 p-4 pl-12 focus:border-primary focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800">
                  {form.timeOptions.map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-primary">
                Guests
              </label>
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  group
                </span>
                <select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 p-4 pl-12 focus:border-primary focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800">
                  {form.guestOptions.map((label) => (
                    <option key={label}>{label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-primary">
              Dietary Requirements &amp; Special Requests
            </label>
            <textarea
              rows={4}
              placeholder="Allergies, birthday celebrations, preferred seating..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 focus:border-primary focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-5 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
}

