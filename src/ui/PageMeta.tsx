import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    if (description) {
      const ensureMeta = (name: string) => {
        let tag = document.querySelector<HTMLMetaElement>(
          `meta[name="${name}"]`,
        );
        if (!tag) {
          tag = document.createElement("meta");
          tag.name = name;
          document.head.appendChild(tag);
        }
        return tag;
      };

      const descTag = ensureMeta("description");
      descTag.content = description;

      const ogTitle = ensureMeta("og:title");
      ogTitle.content = title;

      const ogDesc = ensureMeta("og:description");
      ogDesc.content = description;
    }
  }, [title, description]);

  return null;
}

