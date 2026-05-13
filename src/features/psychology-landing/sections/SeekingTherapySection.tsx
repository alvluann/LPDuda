import { SectionHeader } from "../components/SectionHeader";
import { SoftCard } from "../components/SoftCard";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type SeekingTherapySectionProps = {
  content: PsychologyLandingContent["seekingTherapy"];
};

export function SeekingTherapySection({ content }: SeekingTherapySectionProps) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader {...content} align="center" />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {content.items.map((item) => (
            <SoftCard key={item.title}>
              <h3 className="heading-font text-3xl font-semibold leading-none text-[#2d2924]">
                {item.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[#6f665d]">{item.description}</p>
            </SoftCard>
          ))}
        </div>
      </div>
    </section>
  );
}
