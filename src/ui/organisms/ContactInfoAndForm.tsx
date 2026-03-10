import { Fragment } from "react";
import type {
  ContactInfoModel,
  OpeningHoursModel,
} from "../../domain/restaurantContact";

export function ContactInfoAndForm(props: {
  info: ContactInfoModel;
  openingHours: OpeningHoursModel;
}) {
  const { info, openingHours } = props;

  return (
    <section className="mx-auto grid max-w-7xl gap-20 px-6 py-24 lg:grid-cols-2 lg:px-12">
      <div className="space-y-16">
        <div>
          <h3 className="mb-8 font-display text-3xl">Get in Touch</h3>
          <p className="mb-10 max-w-md leading-relaxed text-slate-600 dark:text-slate-400">
            {info.intro}
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-slate-600 dark:text-slate-400">
                  {info.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">
                call
              </span>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-slate-600 dark:text-slate-400">
                  {info.phone}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-slate-600 dark:text-slate-400">
                  {info.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-display text-2xl">
            {openingHours.title}
          </h3>
          <div className="grid grid-cols-2 gap-y-4 border-t border-primary/10 pt-6">
            {openingHours.rows.map((row) => (
              <Fragment key={row.label}>
                <span className="text-xs uppercase tracking-widest text-slate-500">
                  {row.label}
                </span>
                <span
                  className={`text-right font-medium ${
                    row.highlight ? "text-primary" : ""
                  }`}
                >
                  {row.value}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-primary/10 bg-white p-8 shadow-sm dark:bg-background-dark/50 md:p-12">
        <form className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jean Dupont"
                className="w-full border-0 border-b border-primary/20 bg-transparent px-0 py-2 placeholder:text-slate-300 focus:border-primary focus:ring-0"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Email Address
              </label>
              <input
                type="email"
                placeholder="jean@example.com"
                className="w-full border-0 border-b border-primary/20 bg-transparent px-0 py-2 placeholder:text-slate-300 focus:border-primary focus:ring-0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Subject
            </label>
            <select className="w-full border-0 border-b border-primary/20 bg-transparent px-0 py-2 text-slate-400 focus:border-primary focus:ring-0">
              <option>General Inquiry</option>
              <option>Private Event</option>
              <option>Media &amp; Press</option>
              <option>Careers</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Your Message
            </label>
            <textarea
              rows={4}
              placeholder="How can we assist you?"
              className="w-full resize-none border-0 border-b border-primary/20 bg-transparent px-0 py-2 placeholder:text-slate-300 focus:border-primary focus:ring-0"
            />
          </div>

          <button className="mt-4 w-full rounded-sm bg-primary py-4 text-xs font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-primary/90">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

