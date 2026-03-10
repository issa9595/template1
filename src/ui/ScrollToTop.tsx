import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface ScrollToTopProps {
  children: ReactNode;
}

export function ScrollToTop({ children }: ScrollToTopProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return children;
}

