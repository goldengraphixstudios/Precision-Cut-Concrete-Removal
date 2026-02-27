import Image from "next/image";
import { galleryBlurDataUrl } from "@/lib/gallery";

interface GalleryCardProps {
  title: string;
  image: string;
  available: boolean;
}

export default function GalleryCard({ title, image, available }: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-steel/10 bg-white shadow-card transition duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        {available ? (
          <>
            <div className="absolute inset-0 animate-pulse bg-concrete-gray" />
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              placeholder="blur"
              blurDataURL={galleryBlurDataUrl}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-concrete-gray to-concrete-white" />
        )}
      </div>
      <div className="border-t border-safety/40 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
            {title}
          </p>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-safety">
            View
          </span>
        </div>
      </div>
    </div>
  );
}
