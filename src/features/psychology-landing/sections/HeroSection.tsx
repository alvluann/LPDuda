import Image from "next/image";
import { AnimatedButton } from "../components/AnimatedButton";
import type { HeroContent, LandingImageAsset } from "../types/psychology-landing.types";

type HeroSectionProps = {
  content: HeroContent;
  image?: LandingImageAsset;
};

export function HeroSection({ content, image }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-4 sm:min-h-[86svh] sm:px-8 sm:py-5 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#d9c6aa_0%,#b9ad93_46%,#87967f_100%)]">
        {image ? (
          <div className="absolute inset-x-0 bottom-0 top-[38%] opacity-[0.28] sm:inset-0 sm:opacity-100 lg:left-[42%]">
            <Image
              alt={image.alt}
              className="object-cover object-[center_bottom] [mask-image:linear-gradient(180deg,transparent_0%,black_28%,black_100%)] sm:object-center sm:[mask-image:none] lg:[mask-image:linear-gradient(90deg,transparent_0%,black_24%,black_100%)]"
              fill
              priority
              quality={92}
              sizes="(min-width: 1024px) 62vw, 100vw"
              src={image.src}
            />
          </div>
        ) : (
          <div className="h-full" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(229,214,194,0.98)_0%,rgba(221,203,178,0.91)_50%,rgba(198,178,150,0.82)_100%)] sm:bg-[linear-gradient(90deg,rgba(229,214,194,0.97)_0%,rgba(229,214,194,0.86)_44%,rgba(229,214,194,0.24)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#e4d5c0] to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col sm:min-h-[calc(86svh-2.5rem)]">
        <header className="flex items-center justify-between gap-4 rounded-[1.35rem] border border-[#c2ab8f]/80 bg-[#fff7eb]/88 px-4 py-3 shadow-[0_16px_42px_rgba(45,41,36,0.12)] backdrop-blur-md sm:rounded-full">
          <a className="leading-tight" href="#top" aria-label="Voltar para o início">
            <span className="block text-sm font-semibold text-[#2d2924]">Maria Eduarda Vieira</span>
            <span className="block text-xs text-[#6f665d]">Psicóloga CRP 06/217178</span>
          </a>
          <a
            className="hidden rounded-full border border-[#b79f85] bg-[#fff7eb]/60 px-4 py-2 text-sm font-semibold text-[#405344] transition hover:bg-white sm:inline-flex"
            href="#faq"
          >
            Dúvidas frequentes
          </a>
        </header>

        <div className="flex flex-1 items-start py-10 pt-12 sm:items-center sm:py-20 lg:py-24">
          <div className="w-full max-w-3xl">
            <p className="mb-4 inline-flex max-w-full rounded-full border border-[#b79f85] bg-[#fff7eb]/86 px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#405344] shadow-[0_10px_24px_rgba(45,41,36,0.08)] sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
              {content.eyebrow}
            </p>
            <h1 className="heading-font max-w-[10.8ch] text-[3rem] font-semibold leading-[0.96] text-[#2d2924] sm:max-w-3xl sm:text-7xl sm:leading-[0.94] lg:text-8xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f574f] sm:mt-6 sm:text-xl sm:leading-9">
              {content.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <AnimatedButton {...content.primaryCta} />
              <AnimatedButton {...content.secondaryCta} variant="secondary" />
            </div>

            <dl className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-3">
              {content.credentials.map((credential) => (
                <div
                  className="rounded-[1.1rem] border border-[#c2ab8f]/85 bg-[#fff7eb]/84 px-4 py-3 shadow-[0_10px_26px_rgba(45,41,36,0.08)] backdrop-blur-sm sm:rounded-2xl"
                  key={credential}
                >
                  <dt className="sr-only">Credencial</dt>
                  <dd className="text-sm font-semibold leading-6 text-[#405344]">{credential}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
