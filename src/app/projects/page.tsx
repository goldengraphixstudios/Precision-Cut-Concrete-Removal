import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import GalleryCard from "@/components/sections/GalleryCard";
import { business } from "@/lib/data";
import { galleryBlurDataUrl, getGalleryAvailability } from "@/lib/gallery";
import { withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Concrete cutting and removal project gallery for St. Augustine Beach, FL.",
};

export default function ProjectsPage() {
  const gallery = getGalleryAvailability();
  const availability = new Map(gallery.map((item) => [item.file, item.available]));

  const beforeAfter = [
    {
      title: "Driveway panel replacement",
      before: "driveway-removal.jpg",
      after: "pool-deck.jpg",
    },
    {
      title: "Interior slab opening",
      before: "slab-cutting.jpg",
      after: "interior-saw.jpg",
    },
  ];

  const toSrc = (file: string) => withBasePath(`/gallery/${file}`);

  return (
    <>
      <Section className="bg-concrete-gray/70">
        <Container className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
            Projects
          </p>
          <h1 className="text-4xl sm:text-5xl">Precision cuts. Clean haul-off.</h1>
          <p className="max-w-2xl text-base text-steel/70">
            A snapshot of recent concrete cutting, removal, and drilling work
            across St. Augustine Beach and nearby cities.
          </p>
          <ButtonLink href={business.phoneHref} size="lg">
            Call/Text {business.phone}
          </ButtonLink>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <GalleryCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-concrete-gray/70">
        <Container className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
              Before & After
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Clean lines with minimal disruption.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {beforeAfter.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-steel/10 bg-white shadow-card"
              >
                <div className="grid grid-cols-2">
                  {([item.before, item.after] as const).map((file, index) =>
                    availability.get(file) ? (
                      <div key={file} className="relative h-48">
                        <div className="absolute inset-0 animate-pulse bg-concrete-gray" />
                        <Image
                          src={toSrc(file)}
                          alt={`${item.title} ${index === 0 ? "before" : "after"}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          placeholder="blur"
                          blurDataURL={galleryBlurDataUrl}
                        />
                      </div>
                    ) : (
                      <div
                        key={file}
                        className="h-48 bg-gradient-to-br from-concrete-gray to-concrete-white"
                      />
                    )
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-steel">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
