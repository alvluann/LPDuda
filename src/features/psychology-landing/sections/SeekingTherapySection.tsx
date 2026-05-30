import { SectionHeader } from "../components/SectionHeader";
import { SoftCard } from "../components/SoftCard";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type SeekingTherapySectionProps = {
  content: PsychologyLandingContent["seekingTherapy"];
};

export function SeekingTherapySection({ content }: SeekingTherapySectionProps) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader {...content} align="center" />
        <div className="mt-9 grid gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {content.items.map((item) => (
            <SoftCard key={item.title}>
              <h3 className="heading-font text-[1.85rem] font-semibold leading-[1.04] text-[#2d2924] sm:text-3xl sm:leading-none">
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
