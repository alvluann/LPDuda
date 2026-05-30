import { AnimatedButton } from "../components/AnimatedButton";
import type { FinalCtaContent } from "../types/psychology-landing.types";

type CTASectionProps = {
  content: FinalCtaContent;
};

export function CTASection({ content }: CTASectionProps) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10" id="contato">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-[#241f1a] p-5 text-[#fff7eb] shadow-[0_24px_82px_rgba(45,41,36,0.28)] sm:rounded-[2.25rem] sm:p-12 sm:shadow-[0_30px_100px_rgba(45,41,36,0.24)] lg:p-16">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#cad7c7] sm:text-xs sm:tracking-[0.28em]">
              {content.eyebrow}
            </p>
            <h2 className="heading-font mt-4 max-w-3xl text-[2.65rem] font-semibold leading-[0.98] sm:mt-5 sm:text-7xl sm:leading-[0.95]">
              {content.title}
            </h2>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[#e2d7c8] sm:mt-6 sm:text-lg sm:leading-8">
              {content.description}
            </p>
          </div>
          <div className="space-y-4 sm:space-y-5">
            <AnimatedButton {...content.cta} variant="light" />
            <p className="max-w-xs text-sm leading-6 text-[#d8ccbd]">{content.supportingText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
