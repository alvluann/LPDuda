import type { LandingCta } from "../types/psychology-landing.types";

type AnimatedButtonProps = LandingCta & {
  variant?: "primary" | "secondary" | "light";
};

const variantClasses = {
  primary:
    "bg-[#3f5243] !text-[#fff7eb] shadow-[0_18px_45px_rgba(63,82,67,0.32)] hover:bg-[#344639]",
  secondary:
    "border border-[#b79f85] bg-[#fff7eb]/82 !text-[#2d2924] shadow-[0_12px_30px_rgba(45,41,36,0.08)] hover:border-[#947d65] hover:bg-[#fffaf2]",
  light:
    "bg-[#fff7eb] !text-[#344639] shadow-[0_18px_45px_rgba(45,41,36,0.16)] hover:bg-white"
};

export function AnimatedButton({
  label,
  href,
  ariaLabel,
  variant = "primary"
}: AnimatedButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      aria-label={ariaLabel}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold leading-none tracking-[0.02em] transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-px focus-visible:outline-[#566b5a] sm:w-auto sm:px-6 ${variantClasses[variant]}`}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {label}
    </a>
  );
}
