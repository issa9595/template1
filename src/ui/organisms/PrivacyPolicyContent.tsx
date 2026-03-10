import type { PrivacyViewModel } from "../../domain/restaurantPrivacy";

interface PrivacyPolicyContentProps {
  viewModel: PrivacyViewModel;
}

export function PrivacyPolicyContent({ viewModel }: PrivacyPolicyContentProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 md:px-10">
      <div className="space-y-12">
        {viewModel.sections.map((section) => {
          const baseHeading =
            "font-display text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4";
          const baseBody =
            "text-lg leading-relaxed text-slate-600 dark:text-slate-400";

          if (section.highlight) {
            return (
              <section
                key={section.id}
                className="rounded-xl border border-primary/10 bg-primary/5 p-8"
              >
                <h3 className={baseHeading}>{section.title}</h3>
                <p className={baseBody}>{section.body}</p>
              </section>
            );
          }

          return (
            <section key={section.id}>
              <h3 className={baseHeading}>{section.title}</h3>
              <p className={`${baseBody} ${section.listItems ? "mb-6" : ""}`}>
                {section.body}
              </p>
              {section.listItems && (
                <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                  {section.listItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-1 text-primary">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}

