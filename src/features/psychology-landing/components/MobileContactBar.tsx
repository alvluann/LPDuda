"use client";

import { useEffect, useState } from "react";
import type { LandingCta } from "../types/psychology-landing.types";

type MobileContactBarProps = {
  cta: LandingCta;
};

export function MobileContactBar({ cta }: MobileContactBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isExternal = cta.href.startsWith("http");

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.72);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <aside
      className={`fixed inset-x-4 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 rounded-[1.35rem] border border-[#4f473f]/70 bg-[#241f1a]/88 p-2 shadow-[0_18px_54px_rgba(45,41,36,0.28)] backdrop-blur-xl transition duration-300 sm:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <a
        aria-label={cta.ariaLabel}
        className="flex min-h-12 w-full items-center justify-center rounded-full bg-[#fff7eb] px-5 py-3 text-center text-sm font-semibold leading-none text-[#344639] shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition active:translate-y-px"
        href={cta.href}
        rel={isExternal ? "noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        {cta.label}
      </a>
    </aside>
  );
}
