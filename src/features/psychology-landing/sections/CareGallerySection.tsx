import { ImageFrame } from "../components/ImageFrame";
import { SectionHeader } from "../components/SectionHeader";
import type { LandingImageAsset } from "../types/psychology-landing.types";

type CareGallerySectionProps = {
  images: LandingImageAsset[];
};

export function CareGallerySection({ images }: CareGallerySectionProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Imagens de apoio"
          title="Acolhimento também aparece nos detalhes."
          description="As imagens disponíveis são distribuídas como parte da composição editorial, sem competir com a mensagem principal."
          align="center"
        />
        <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {images.map((image, index) => (
            <ImageFrame
              aspect={index % 2 === 0 ? "landscape" : "portrait"}
              image={image}
              key={image.fileName}
              quality={85}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
