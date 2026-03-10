import type { MenuPageViewModel } from "../../domain/restaurantMenu";
import { MenuSectionHeading } from "../atoms/MenuSectionHeading";
import { MenuItemRow } from "../molecules/MenuItemRow";

interface MenuContentProps {
  viewModel: MenuPageViewModel;
}

export function MenuContent({ viewModel }: MenuContentProps) {
  const { sections, images } = viewModel;

  return (
    <div className="mx-auto max-w-5xl space-y-32 px-6 py-20">
      {/* Starters */}
      <section
        id={sections.starters.id}
        className="grid items-center gap-16 lg:grid-cols-2"
      >
        <div className="space-y-12">
          <MenuSectionHeading title={sections.starters.title} />
          <div className="space-y-10">
            {sections.starters.items.map((item) => (
              <MenuItemRow key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="relative aspect-4/5 overflow-hidden rounded-xl shadow-2xl">
          <img
            src={images.starters.url}
            alt={images.starters.alt}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Main courses */}
      <section
        id={sections.mains.id}
        className="grid items-center gap-16 lg:grid-cols-2"
      >
        <div className="order-2 relative aspect-4/5 overflow-hidden rounded-xl shadow-2xl lg:order-1">
          <img
            src={images.mains.url}
            alt={images.mains.alt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="order-1 space-y-12 lg:order-2">
          <MenuSectionHeading title={sections.mains.title} />
          <div className="space-y-10">
            {sections.mains.items.map((item) => (
              <MenuItemRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Sides & desserts */}
      <div className="grid gap-20 lg:grid-cols-2">
        <section id={sections.sides.id} className="space-y-12">
          <MenuSectionHeading title={sections.sides.title} />
          <div className="space-y-8">
            {sections.sides.items.map((item) => (
              <MenuItemRow key={item.id} item={item} compact />
            ))}
          </div>
        </section>
        <section id={sections.desserts.id} className="space-y-12">
          <MenuSectionHeading title={sections.desserts.title} />
          <div className="space-y-8">
            {sections.desserts.items.map((item) => (
              <MenuItemRow key={item.id} item={item} compact />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

