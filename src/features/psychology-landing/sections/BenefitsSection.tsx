import { SectionHeader } from "../components/SectionHeader";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type BenefitsSectionProps = {
  content: PsychologyLandingContent["benefits"];
};

export function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <section className="bg-[#241f1a] px-4 py-16 text-[#fff7eb] sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          {...content}
          className="[&>h2]:text-[#fff7eb] [&>p]:text-[#e2d7c8] [&>p:first-child]:text-[#cad7c7]"
        />
        <div className="mt-9 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/12 sm:mt-12 sm:grid-cols-2 sm:rounded-[2rem] lg:grid-cols-4">
          {content.items.map((item) => (
            <article className="bg-[#241f1a] p-5 sm:p-7" key={item.title}>
              <h3 className="heading-font text-[1.85rem] font-semibold leading-[1.04] sm:text-3xl sm:leading-none">
                {item.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[#d8ccbd]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
