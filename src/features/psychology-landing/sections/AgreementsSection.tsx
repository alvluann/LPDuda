import { SectionHeader } from "../components/SectionHeader";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type AgreementsSectionProps = {
  content: PsychologyLandingContent["agreements"];
};

export function AgreementsSection({ content }: AgreementsSectionProps) {
  return (
    <section className="bg-[#e0d0ba] px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-9 sm:gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionHeader {...content} />
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {content.items.map((item) => (
            <article
              className="rounded-[1.2rem] border border-[#c3ad91] bg-[#fff7eb]/78 p-5 shadow-[0_14px_38px_rgba(45,41,36,0.08)] sm:rounded-[1.5rem]"
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
