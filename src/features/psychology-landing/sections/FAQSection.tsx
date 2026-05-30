import { SectionHeader } from "../components/SectionHeader";
import type { FAQContent } from "../types/psychology-landing.types";

type FAQSectionProps = {
  content: FAQContent;
};

export function FAQSection({ content }: FAQSectionProps) {
  return (
    <section className="bg-[#d8c7b1]/76 px-4 py-14 sm:px-8 sm:py-20 lg:px-10" id="faq">
      <div className="mx-auto grid max-w-7xl gap-9 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeader {...content} />
        <div className="space-y-3">
          {content.items.map((item) => (
            <details
              className="group rounded-[1.15rem] border border-[#c3ad91] bg-[#fff7eb]/82 p-4 shadow-[0_14px_38px_rgba(45,41,36,0.08)] sm:rounded-[1.5rem] sm:p-5"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[0.98rem] font-semibold leading-6 text-[#2d2924] sm:gap-4 sm:text-base">
                {item.question}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#cbbba7] text-[#566b5a] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#6f665d]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
