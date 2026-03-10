import type { ReservationModel } from "../../domain/restaurantHome";
import { PrimaryButton } from "../atoms/PrimaryButton";

interface ReservationsSectionProps {
  reservations: ReservationModel;
}

export function ReservationsSection({
  reservations,
}: ReservationsSectionProps) {
  return (
    <section
      id="contact"
      className="bg-background-light py-24 px-6 dark:bg-background-dark lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl text-slate-900 dark:text-slate-100">
            {reservations.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 md:text-base">
            {reservations.description}
          </p>
        </div>

        <form className="grid grid-cols-1 gap-6 rounded-2xl border border-primary/10 bg-white p-8 shadow-sm dark:bg-background-dark/50 md:grid-cols-2 md:p-12">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Date
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Time
            </label>
            <select className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800/50">
              {reservations.timeSlots.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Special Requests
            </label>
            <textarea
              rows={4}
              placeholder="Any dietary requirements or special occasions..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800/50"
            />
          </div>
          <div className="md:col-span-2 mt-4">
            <PrimaryButton className="w-full py-4">
              Request Reservation
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
}

