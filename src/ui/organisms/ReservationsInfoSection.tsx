import type { ReservationsInfoModel } from "../../domain/restaurantReservations";

interface ReservationsInfoSectionProps {
  info: ReservationsInfoModel;
}

export function ReservationsInfoSection({ info }: ReservationsInfoSectionProps) {
  return (
    <section className="bg-primary/5 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <h4 className="mb-6 border-b border-primary/20 pb-4 font-display text-2xl">
            Dining Hours
          </h4>
          <ul className="space-y-4">
            {info.diningHours.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between"
              >
                <span className="font-medium">{row.label}</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-6 border-b border-primary/20 pb-4 font-display text-2xl">
            Booking Policy
          </h4>
          <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
            {info.bookingPolicy.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

