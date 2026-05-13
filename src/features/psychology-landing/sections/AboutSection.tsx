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
    <section className="px-5 py-20 sm:px-8 lg:px-10" id="sobre">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ImageFrame
          aspect="portrait"
          caption={`${content.name}, ${content.role} ${content.crp}`}
          image={image}
          sizes="(min-width: 1024px) 38vw, 92vw"
        />

        <div>
          <SectionHeader {...content} />
          <div className="mt-8 space-y-5 text-base leading-8 text-[#5f574f] sm:text-lg">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {content.highlights.map((highlight) => (
              <SoftCard className="p-5" key={highlight.title}>
                <h3 className="heading-font text-2xl font-semibold text-[#2d2924]">
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
