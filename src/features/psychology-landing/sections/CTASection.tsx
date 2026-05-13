import { AnimatedButton } from "../components/AnimatedButton";
import type { FinalCtaContent } from "../types/psychology-landing.types";

type CTASectionProps = {
  content: FinalCtaContent;
};

export function CTASection({ content }: CTASectionProps) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10" id="contato">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#2d2924] p-8 text-[#fffaf2] shadow-[0_30px_100px_rgba(45,41,36,0.24)] sm:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#cad7c7]">
              {content.eyebrow}
            </p>
            <h2 className="heading-font mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] sm:text-7xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#e2d7c8] sm:text-lg">
              {content.description}
            </p>
          </div>
          <div className="space-y-5">
            <AnimatedButton {...content.cta} variant="light" />
            <p className="max-w-xs text-sm leading-6 text-[#d8ccbd]">{content.supportingText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
