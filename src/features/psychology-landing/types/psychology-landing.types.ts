export type LandingCta = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type LandingImageAsset = {
  src: string;
  alt: string;
  fileName: string;
};

export type LandingImagePlacement = {
  hero?: LandingImageAsset;
  about?: LandingImageAsset;
  method?: LandingImageAsset;
  onlineCare?: LandingImageAsset;
  gallery: LandingImageAsset[];
};

export type TextBlock = {
  title: string;
  description: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type HeroContent = SectionIntro & {
  primaryCta: LandingCta;
  secondaryCta: LandingCta;
  credentials: string[];
};

export type AboutContent = SectionIntro & {
  name: string;
  role: string;
  crp: string;
  paragraphs: string[];
  highlights: TextBlock[];
};

export type MethodContent = SectionIntro & {
  steps: TextBlock[];
};

export type OnlineCareContent = SectionIntro & {
  paragraphs: string[];
  checklist: string[];
};

export type ConfidentialityContent = SectionIntro & {
  note: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQContent = SectionIntro & {
  items: FAQItem[];
};

export type FinalCtaContent = SectionIntro & {
  cta: LandingCta;
  supportingText: string;
};

export type PsychologyLandingContent = {
  hero: HeroContent;
  about: AboutContent;
  painPoints: SectionIntro & {
    items: TextBlock[];
  };
  services: SectionIntro & {
    items: TextBlock[];
  };
  method: MethodContent;
  onlineCare: OnlineCareContent;
  benefits: SectionIntro & {
    items: TextBlock[];
  };
  seekingTherapy: SectionIntro & {
    items: TextBlock[];
  };
  agreements: SectionIntro & {
    items: TextBlock[];
  };
  confidentiality: ConfidentialityContent;
  faq: FAQContent;
  finalCta: FinalCtaContent;
};
