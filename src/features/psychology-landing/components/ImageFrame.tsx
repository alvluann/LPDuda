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
        className={`relative overflow-hidden rounded-[1.35rem] border border-[#bfa88d] bg-[#d8c7b1] shadow-[0_20px_58px_rgba(45,41,36,0.18)] sm:rounded-[2rem] sm:shadow-[0_26px_90px_rgba(45,41,36,0.18)] ${aspectClasses[aspect]}`}
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
            className="flex h-full flex-col justify-between bg-[linear-gradient(135deg,#f1e3cf_0%,#d5ddcf_48%,#c7d0d7_100%)] p-5 sm:p-7"
          >
            <div className="h-20 w-20 rounded-full border border-[#b8c4b5] bg-white/38" />
            <div className="space-y-4">
              <div className="h-px w-full bg-[#b8a891]" />
              <p className="heading-font max-w-xs text-2xl font-semibold leading-none text-[#405344] sm:text-3xl">
                Escuta, vínculo e presença.
              </p>
            </div>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 px-1 text-sm leading-6 text-[#4f473f] sm:mt-4 sm:px-0">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
