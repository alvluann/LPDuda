import type {
  LandingImageAsset,
  LandingImagePlacement
} from "../types/psychology-landing.types";

export function assignLandingImages(images: LandingImageAsset[]): LandingImagePlacement {
  const imageByName = new Map(images.map((image) => [image.fileName.replaceAll("\\", "/"), image]));

  const hero = imageByName.get("image5.jpeg") ?? images[0];
  const about = imageByName.get("image3.jpeg") ?? images.find((image) => image !== hero);
  const method =
    imageByName.get("image2.jpeg") ?? images.find((image) => ![hero, about].includes(image));
  const onlineCare =
    imageByName.get("image4.jpeg") ??
    images.find((image) => ![hero, about, method].includes(image));
  const galleryPreferred = imageByName.get("image1.jpeg");
  const assignedImages = new Set([hero, about, method, onlineCare].filter(Boolean));
  const gallery = [
    ...(galleryPreferred && !assignedImages.has(galleryPreferred) ? [galleryPreferred] : []),
    ...images.filter((image) => !assignedImages.has(image) && image !== galleryPreferred)
  ];

  return {
    hero,
    about,
    method,
    onlineCare,
    gallery
  };
}
