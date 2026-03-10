import type { MenuItemModel } from "../../domain/restaurantMenu";

interface MenuItemRowProps {
  item: MenuItemModel;
  compact?: boolean;
}

export function MenuItemRow({ item, compact = false }: MenuItemRowProps) {
  if (compact) {
    return (
      <div className="group flex cursor-default items-center justify-between">
        <div>
          <h4 className="font-display text-lg transition-colors group-hover:text-primary">
            {item.name}
          </h4>
          <p className="text-xs italic text-slate-500">{item.description}</p>
        </div>
        <span className="font-medium text-primary">{item.price}</span>
      </div>
    );
  }

  return (
    <div className="group cursor-default">
      <div className="mb-2 flex items-baseline justify-between">
        <h4 className="font-display text-xl transition-colors group-hover:text-primary">
          {item.name}
        </h4>
        <span className="font-medium text-primary">{item.price}</span>
      </div>
      <p className="text-sm leading-relaxed italic text-slate-500 dark:text-slate-400">
        {item.description}
      </p>
    </div>
  );
}

