import { SectionHeader } from "../components/SectionHeader";
import { SoftCard } from "../components/SoftCard";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type ServicesSectionProps = {
  content: PsychologyLandingContent["services"];
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="bg-[#d8c7b1]/76 px-4 py-14 sm:px-8 sm:py-20 lg:px-10" id="atendimentos">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-9 sm:gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader {...content} />

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {content.items.map((item, index) => (
              <SoftCard className={index === 0 ? "sm:col-span-2" : ""} key={item.title}>
                <p className="mb-4 text-sm font-semibold text-[#566b5a] sm:mb-5">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="heading-font text-[1.85rem] font-semibold leading-[1.04] text-[#2d2924] sm:text-3xl sm:leading-none">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6f665d]">{item.description}</p>
              </SoftCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
