import { SectionHeader } from "../components/SectionHeader";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type AgreementsSectionProps = {
  content: PsychologyLandingContent["agreements"];
};

export function AgreementsSection({ content }: AgreementsSectionProps) {
  return (
    <section className="bg-[#f3ebdf] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionHeader {...content} />
        <div className="grid gap-4 sm:grid-cols-2">
          {content.items.map((item) => (
            <article
              className="rounded-[1.5rem] border border-[#d6c5b1] bg-[#fffaf2]/62 p-5"
              key={item.title}
            >
              <h3 className="text-lg font-semibold text-[#2d2924]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6f665d]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
