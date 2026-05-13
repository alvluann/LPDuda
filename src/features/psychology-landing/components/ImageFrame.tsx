import Image from "next/image";
import type { LandingImageAsset } from "../types/psychology-landing.types";

type ImageFrameProps = {
  image?: LandingImageAsset;
  priority?: boolean;
  sizes: string;
  aspect?: "portrait" | "landscape" | "square";
  caption?: string;
  className?: string;
};

const aspectClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/11]",
  square: "aspect-square"
};

export function ImageFrame({
  image,
  priority = false,
  sizes,
  aspect = "portrait",
  caption,
  className = ""
}: ImageFrameProps) {
  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-[2rem] border border-[#decfbd] bg-[#efe5d7] shadow-[0_26px_90px_rgba(45,41,36,0.16)] ${aspectClasses[aspect]}`}
      >
        {image ? (
          <Image
            alt={image.alt}
            className="object-cover"
            fill
            priority={priority}
            sizes={sizes}
            src={image.src}
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full flex-col justify-between bg-[linear-gradient(135deg,#f6ecdf_0%,#dfe6dd_48%,#d5dde6_100%)] p-7"
          >
            <div className="h-20 w-20 rounded-full border border-[#b8c4b5] bg-white/38" />
            <div className="space-y-4">
              <div className="h-px w-full bg-[#b8a891]" />
              <p className="heading-font max-w-xs text-3xl font-semibold leading-none text-[#405344]">
                Escuta, vínculo e presença.
              </p>
            </div>
          </div>
        )}
      </div>
      {caption ? <figcaption className="mt-4 text-sm text-[#6f665d]">{caption}</figcaption> : null}
    </figure>
  );
}
