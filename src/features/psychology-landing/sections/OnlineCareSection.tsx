import { ImageFrame } from "../components/ImageFrame";
import { SectionHeader } from "../components/SectionHeader";
import type {
  LandingImageAsset,
  OnlineCareContent
} from "../types/psychology-landing.types";

type OnlineCareSectionProps = {
  content: OnlineCareContent;
  image?: LandingImageAsset;
};

export function OnlineCareSection({ content, image }: OnlineCareSectionProps) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ImageFrame image={image} sizes="(min-width: 1024px) 36vw, 92vw" aspect="square" />

        <div>
          <SectionHeader {...content} />
          <div className="mt-7 space-y-4 text-[0.98rem] leading-7 text-[#5f574f] sm:mt-8 sm:space-y-5 sm:text-lg sm:leading-8">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:mt-9 sm:grid-cols-2">
            {content.checklist.map((item) => (
              <li
                className="rounded-[1.1rem] border border-[#d9c9b6] bg-[#fffaf2]/70 px-4 py-4 text-sm font-semibold leading-6 text-[#405344] sm:rounded-2xl"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
