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
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeader {...content} />
          <ol className="mt-10 space-y-5">
            {content.steps.map((step, index) => (
              <li className="grid grid-cols-[3rem_1fr] gap-4" key={step.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cbbba7] bg-[#fffaf2] text-sm font-semibold text-[#566b5a]">
                  {index + 1}
                </span>
                <div className="border-b border-[#decfbd] pb-5">
                  <h3 className="heading-font text-2xl font-semibold text-[#2d2924]">
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
