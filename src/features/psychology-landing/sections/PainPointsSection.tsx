import { SectionHeader } from "../components/SectionHeader";
import { SoftCard } from "../components/SoftCard";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type PainPointsSectionProps = {
  content: PsychologyLandingContent["painPoints"];
};

export function PainPointsSection({ content }: PainPointsSectionProps) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader {...content} align="center" />

        <div className="mt-9 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <SoftCard key={item.title}>
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#8fa08a] sm:mb-6 sm:h-2 sm:w-16" />
              <h3 className="heading-font text-[1.65rem] font-semibold leading-tight text-[#2d2924] sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#6f665d]">{item.description}</p>
            </SoftCard>
          ))}
        </div>
      </div>
    </section>
  );
}
