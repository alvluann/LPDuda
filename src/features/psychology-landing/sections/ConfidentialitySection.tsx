import type { ConfidentialityContent } from "../types/psychology-landing.types";

type ConfidentialitySectionProps = {
  content: ConfidentialityContent;
};

export function ConfidentialitySection({ content }: ConfidentialitySectionProps) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#cbbba7] bg-[#566b5a] p-8 text-[#fffaf2] shadow-[0_26px_90px_rgba(86,107,90,0.22)] sm:p-12 lg:p-16">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dfe8dc]">
          {content.eyebrow}
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h2 className="heading-font text-4xl font-semibold leading-none sm:text-6xl">
              {content.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#edf0e9]">
              {content.description}
            </p>
          </div>
          <p className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 text-sm leading-7 text-[#fffaf2]">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
}
