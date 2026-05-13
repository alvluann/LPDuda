import { SectionHeader } from "../components/SectionHeader";
import type { FAQContent } from "../types/psychology-landing.types";

type FAQSectionProps = {
  content: FAQContent;
};

export function FAQSection({ content }: FAQSectionProps) {
  return (
    <section className="bg-[#efe5d7]/58 px-5 py-20 sm:px-8 lg:px-10" id="faq">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeader {...content} />
        <div className="space-y-3">
          {content.items.map((item) => (
            <details
              className="group rounded-[1.5rem] border border-[#d6c5b1] bg-[#fffaf2]/72 p-5"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#2d2924]">
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
