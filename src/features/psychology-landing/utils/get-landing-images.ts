import type { LandingImageAsset } from "../types/psychology-landing.types";

const LANDING_IMAGES: LandingImageAsset[] = [
  {
    src: "/images/image1.jpeg",
    alt: "Maria Eduarda Vieira em ambiente acolhedor de atendimento, com plantas, livros e uma xicara sobre a mesa",
    fileName: "image1.jpeg"
  },
  {
    src: "/images/image2.jpeg",
    alt: "Maria Eduarda Vieira sentada em uma poltrona com tablet, em um ambiente tranquilo de atendimento online",
    fileName: "image2.jpeg"
  },
  {
    src: "/images/image3.jpeg",
    alt: "Retrato de Maria Eduarda Vieira, psicologa, em um ambiente acolhedor",
    fileName: "image3.jpeg"
  },
  {
    src: "/images/image4.jpeg",
    alt: "Maria Eduarda Vieira segurando uma xicara ao lado de um tablet, em um espaco preparado para atendimento online",
    fileName: "image4.jpeg"
  },
  {
    src: "/images/image5.jpeg",
    alt: "Maria Eduarda Vieira em uma poltrona com tablet, iluminada por luz natural em um ambiente calmo",
    fileName: "image5.jpeg"
  }
];

export async function getLandingImages() {
  return LANDING_IMAGES;
}
