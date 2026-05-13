import { readdir } from "node:fs/promises";
import path from "node:path";
import type { LandingImageAsset } from "../types/psychology-landing.types";

const IMAGE_ROOT = path.resolve(process.cwd(), "image");
const SUPPORTED_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const CURATED_ALT_TEXT: Record<string, string> = {
  "image1.jpeg":
    "Maria Eduarda Vieira em ambiente acolhedor de atendimento, com plantas, livros e uma xicara sobre a mesa",
  "image2.jpeg":
    "Maria Eduarda Vieira sentada em uma poltrona com tablet, em um ambiente tranquilo de atendimento online",
  "image3.jpeg":
    "Retrato de Maria Eduarda Vieira, psicologa, em um ambiente acolhedor",
  "image4.jpeg":
    "Maria Eduarda Vieira segurando uma xicara ao lado de um tablet, em um espaco preparado para atendimento online",
  "image5.jpeg":
    "Maria Eduarda Vieira em uma poltrona com tablet, iluminada por luz natural em um ambiente calmo"
};

function normalizeAltText(fileName: string) {
  const curatedAltText = CURATED_ALT_TEXT[fileName];

  if (curatedAltText) {
    return curatedAltText;
  }

  const nameWithoutExtension = fileName.replace(/\.[^.]+$/, "");
  const readableName = nameWithoutExtension
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!readableName) {
    return "Imagem relacionada ao atendimento psicológico";
  }

  return `Imagem de apoio da landing: ${readableName}`;
}

function toAssetUrl(relativePath: string) {
  return `/image-assets/${relativePath
    .split(path.sep)
    .map((part) => encodeURIComponent(part))
    .join("/")}`;
}

async function collectImages(directory: string, basePath = ""): Promise<LandingImageAsset[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedAssets = await Promise.all(
    entries.map(async (entry) => {
      const relativePath = path.join(basePath, entry.name);
      const absolutePath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return collectImages(absolutePath, relativePath);
      }

      const extension = path.extname(entry.name).toLowerCase();

      if (!entry.isFile() || !SUPPORTED_EXTENSIONS.has(extension)) {
        return [];
      }

      return [
        {
          src: toAssetUrl(relativePath),
          alt: normalizeAltText(entry.name),
          fileName: relativePath
        }
      ];
    })
  );

  return nestedAssets.flat().sort((first, second) => first.fileName.localeCompare(second.fileName));
}

export async function getLandingImages() {
  try {
    return collectImages(IMAGE_ROOT);
  } catch {
    return [];
  }
}
