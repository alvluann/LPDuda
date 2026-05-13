import { SectionHeader } from "../components/SectionHeader";
import { SoftCard } from "../components/SoftCard";
import type { PsychologyLandingContent } from "../types/psychology-landing.types";

type ServicesSectionProps = {
  content: PsychologyLandingContent["services"];
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="bg-[#efe5d7]/58 px-5 py-20 sm:px-8 lg:px-10" id="atendimentos">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader {...content} />

          <div className="grid gap-4 sm:grid-cols-2">
            {content.items.map((item, index) => (
              <SoftCard className={index === 0 ? "sm:col-span-2" : ""} key={item.title}>
                <p className="mb-5 text-sm font-semibold text-[#566b5a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="heading-font text-3xl font-semibold leading-none text-[#2d2924]">
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
