import type { SectionIntro } from "../types/psychology-landing.types";

type SectionHeaderProps = SectionIntro & {
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = ""
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#566b5a]">
        {eyebrow}
      </p>
      <h2 className="heading-font text-4xl font-semibold leading-[0.98] text-[#2d2924] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f665d] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
