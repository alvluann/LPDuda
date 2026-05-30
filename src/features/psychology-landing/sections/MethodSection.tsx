import { ImageFrame } from "../components/ImageFrame";
import { SectionHeader } from "../components/SectionHeader";
import type {
  LandingImageAsset,
  MethodContent
} from "../types/psychology-landing.types";

type MethodSectionProps = {
  content: MethodContent;
  image?: LandingImageAsset;
};

export function MethodSection({ content, image }: MethodSectionProps) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeader {...content} />
          <ol className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            {content.steps.map((step, index) => (
              <li className="grid grid-cols-[2.5rem_1fr] gap-3 sm:grid-cols-[3rem_1fr] sm:gap-4" key={step.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cbbba7] bg-[#fffaf2] text-sm font-semibold text-[#566b5a] sm:h-12 sm:w-12">
                  {index + 1}
                </span>
                <div className="border-b border-[#decfbd] pb-5">
                  <h3 className="heading-font text-[1.55rem] font-semibold leading-tight text-[#2d2924] sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#6f665d]">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ImageFrame image={image} sizes="(min-width: 1024px) 40vw, 92vw" aspect="landscape" />
      </div>
    </section>
  );
}
