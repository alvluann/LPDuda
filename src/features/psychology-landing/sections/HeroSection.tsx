import Image from "next/image";
import { AnimatedButton } from "../components/AnimatedButton";
import type { HeroContent, LandingImageAsset } from "../types/psychology-landing.types";

type HeroSectionProps = {
  content: HeroContent;
  image?: LandingImageAsset;
};

export function HeroSection({ content, image }: HeroSectionProps) {
  return (
    <section className="relative min-h-[86svh] overflow-hidden px-5 py-5 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8f3ea_0%,#dfe8df_46%,#d8e0e7_100%)]">
        {image ? (
          <div className="absolute inset-0 opacity-20 sm:opacity-100 lg:left-[42%]">
            <Image
              alt={image.alt}
              className="object-cover object-center lg:[mask-image:linear-gradient(90deg,transparent_0%,black_24%,black_100%)]"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              src={image.src}
            />
          </div>
        ) : (
          <div className="h-full" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,243,234,0.98)_0%,rgba(248,243,234,0.9)_44%,rgba(248,243,234,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8f3ea] to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(86svh-2.5rem)] max-w-7xl flex-col">
        <header className="flex items-center justify-between gap-4 rounded-full border border-[#d9c9b6]/70 bg-[#fffaf2]/74 px-4 py-3 shadow-[0_14px_40px_rgba(45,41,36,0.08)] backdrop-blur-md">
          <a className="leading-tight" href="#top" aria-label="Voltar para o início">
            <span className="block text-sm font-semibold text-[#2d2924]">Maria Eduarda Vieira</span>
            <span className="block text-xs text-[#6f665d]">Psicóloga CRP 06/217178</span>
          </a>
          <a
            className="hidden rounded-full border border-[#cbbba7] px-4 py-2 text-sm font-semibold text-[#405344] transition hover:bg-white sm:inline-flex"
            href="#faq"
          >
            Dúvidas frequentes
          </a>
        </header>

        <div className="flex flex-1 items-center py-16 sm:py-20 lg:py-24">
          <div className="w-full max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-[#cbbba7] bg-[#fffaf2]/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#566b5a]">
              {content.eyebrow}
            </p>
            <h1 className="heading-font max-w-[11ch] text-[3.15rem] font-semibold leading-[0.94] text-[#2d2924] sm:max-w-3xl sm:text-7xl lg:text-8xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f574f] sm:text-xl sm:leading-9">
              {content.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton {...content.primaryCta} />
              <AnimatedButton {...content.secondaryCta} variant="secondary" />
            </div>

            <dl className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3">
              {content.credentials.map((credential) => (
                <div
                  className="rounded-2xl border border-[#d9c9b6]/75 bg-[#fffaf2]/68 px-4 py-3 backdrop-blur-sm"
                  key={credential}
                >
                  <dt className="sr-only">Credencial</dt>
                  <dd className="text-sm font-semibold text-[#405344]">{credential}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
