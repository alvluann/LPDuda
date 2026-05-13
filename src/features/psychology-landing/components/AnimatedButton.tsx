import type { LandingCta } from "../types/psychology-landing.types";

type AnimatedButtonProps = LandingCta & {
  variant?: "primary" | "secondary" | "light";
};

const variantClasses = {
  primary:
    "bg-[#566b5a] !text-[#fffaf2] shadow-[0_18px_45px_rgba(86,107,90,0.28)] hover:bg-[#455849]",
  secondary:
    "border border-[#cbbba7] bg-white/55 !text-[#2d2924] hover:border-[#a48f77] hover:bg-white",
  light:
    "bg-[#fffaf2] !text-[#405344] shadow-[0_18px_45px_rgba(45,41,36,0.14)] hover:bg-white"
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
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-[#566b5a] ${variantClasses[variant]}`}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {label}
    </a>
  );
}
