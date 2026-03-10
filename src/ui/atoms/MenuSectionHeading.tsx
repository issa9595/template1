interface MenuSectionHeadingProps {
  title: string;
}

export function MenuSectionHeading({ title }: MenuSectionHeadingProps) {
  return (
    <h3 className="font-display text-3xl font-medium border-b border-primary/20 pb-4">
      {title}
    </h3>
  );
}

