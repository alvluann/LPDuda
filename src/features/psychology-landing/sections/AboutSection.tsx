import { ImageFrame } from "../components/ImageFrame";
import { SectionHeader } from "../components/SectionHeader";
import { SoftCard } from "../components/SoftCard";
import type { AboutContent, LandingImageAsset } from "../types/psychology-landing.types";

type AboutSectionProps = {
  content: AboutContent;
  image?: LandingImageAsset;
};

export function AboutSection({ content, image }: AboutSectionProps) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10" id="sobre">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ImageFrame
          aspect="portrait"
          caption={`${content.name}, ${content.role} ${content.crp}`}
          image={image}
          priority
          quality={92}
          sizes="(min-width: 1024px) 38vw, 92vw"
        />

        <div>
          <SectionHeader {...content} />
          <div className="mt-7 space-y-4 text-[0.98rem] leading-7 text-[#5f574f] sm:mt-8 sm:space-y-5 sm:text-lg sm:leading-8">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {content.highlights.map((highlight) => (
              <SoftCard className="p-5" key={highlight.title}>
                <h3 className="heading-font text-[1.65rem] font-semibold leading-tight text-[#2d2924] sm:text-2xl">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6f665d]">{highlight.description}</p>
              </SoftCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
