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
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ImageFrame image={image} sizes="(min-width: 1024px) 36vw, 92vw" aspect="square" />

        <div>
          <SectionHeader {...content} />
          <div className="mt-8 space-y-5 text-base leading-8 text-[#5f574f] sm:text-lg">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {content.checklist.map((item) => (
              <li
                className="rounded-2xl border border-[#d9c9b6] bg-[#fffaf2]/70 px-4 py-4 text-sm font-semibold text-[#405344]"
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
