import { SectionHeader } from "../components/SectionHeader";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type BenefitsSectionProps = {
  content: PsychologyLandingContent["benefits"];
};

export function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <section className="bg-[#2d2924] px-5 py-20 text-[#fffaf2] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          {...content}
          className="[&>h2]:text-[#fffaf2] [&>p]:text-[#e2d7c8] [&>p:first-child]:text-[#cad7c7]"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <article className="bg-[#2d2924] p-7" key={item.title}>
              <h3 className="heading-font text-3xl font-semibold leading-none">
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
