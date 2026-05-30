import type { ConfidentialityContent } from "../types/psychology-landing.types";

type ConfidentialitySectionProps = {
  content: ConfidentialityContent;
};

export function ConfidentialitySection({ content }: ConfidentialitySectionProps) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-[#b9c6b5]/70 bg-[#435646] p-5 text-[#fff7eb] shadow-[0_22px_76px_rgba(45,41,36,0.24)] sm:rounded-[2rem] sm:p-12 sm:shadow-[0_26px_90px_rgba(45,41,36,0.24)] lg:p-16">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#dfe8dc] sm:text-xs sm:tracking-[0.28em]">
          {content.eyebrow}
        </p>
        <div className="mt-5 grid gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h2 className="heading-font text-[2.45rem] font-semibold leading-[0.98] sm:text-6xl sm:leading-none">
              {content.title}
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#edf0e9] sm:mt-5 sm:text-base sm:leading-8">
              {content.description}
            </p>
          </div>
          <p className="rounded-[1.15rem] border border-white/20 bg-white/10 p-5 text-sm leading-7 text-[#fffaf2] sm:rounded-[1.5rem] sm:p-6">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
}
