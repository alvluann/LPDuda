import { SectionHeader } from "../components/SectionHeader";
import { SoftCard } from "../components/SoftCard";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type PainPointsSectionProps = {
  content: PsychologyLandingContent["painPoints"];
};

export function PainPointsSection({ content }: PainPointsSectionProps) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader {...content} align="center" />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <SoftCard key={item.title}>
              <div className="mb-6 h-2 w-16 rounded-full bg-[#8fa08a]" />
              <h3 className="heading-font text-2xl font-semibold leading-tight text-[#2d2924]">
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
