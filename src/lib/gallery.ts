import path from "path";
import fs from "fs";
import { galleryItems } from "@/lib/data";
import { withBasePath } from "@/lib/site";

export const galleryBlurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12'%3E%3Crect width='16' height='12' fill='%23E5E7EB'/%3E%3C/svg%3E";

export function getGalleryAvailability() {
  return galleryItems.map((item) => {
    const filePath = path.join(
      process.cwd(),
      "public",
      "gallery",
      item.file
    );
    return {
      ...item,
      image: withBasePath(`/gallery/${item.file}`),
      available: fs.existsSync(filePath),
    };
  });
}
