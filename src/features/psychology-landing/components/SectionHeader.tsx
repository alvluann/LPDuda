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
      <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#405344] sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
        {eyebrow}
      </p>
      <h2 className="heading-font text-[2.35rem] font-semibold leading-[1.02] text-[#2d2924] sm:text-5xl sm:leading-[0.98]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#5f574f] sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
