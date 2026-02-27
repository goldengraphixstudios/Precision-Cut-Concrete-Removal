import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Divider from "@/components/ui/Divider";
import ButtonLink from "@/components/ui/ButtonLink";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Local concrete cutting and removal crew serving St. Augustine Beach, FL with fast, clean jobsite work.",
};

const values = [
  {
    title: "Precision first",
    description:
      "We lay out cut lines carefully so removal is controlled and efficient.",
  },
  {
    title: "Safety & respect",
    description:
      "We keep the work zone tidy, protect adjacent surfaces, and communicate clearly.",
  },
  {
    title: "Cleanup built-in",
    description:
      "Haul-off and cleanup are part of the plan, not an afterthought.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="bg-concrete-gray/70">
        <Container className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
            About Precision Cut
          </p>
          <h1 className="text-4xl sm:text-5xl">
            Local crew. Straightforward service.
          </h1>
          <p className="max-w-2xl text-base text-steel/70">
            Precision Cut Concrete Removal LLC serves St. Augustine Beach and
            nearby cities with fast concrete cutting, slab and wall removal, core
            drilling, and debris hauling. We focus on clean cuts, reliable
            scheduling, and a jobsite you can trust.
          </p>
          <ButtonLink href={business.phoneHref} size="lg">
            Call/Text {business.phone}
          </ButtonLink>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Built on precision, speed, and respect for the jobsite.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 text-sm text-steel/70">
              <p>
                We handle concrete cutting and removal for homeowners, builders,
                and property managers who need fast turnaround without the mess.
                From driveway panels to interior slab openings, our crew keeps
                the site safe, communicates clearly, and finishes with a clean
                haul-off.
              </p>
              <p>
                Our process is simple: confirm scope, set clean cut lines, and
                remove concrete efficiently. If you need guidance on permits or
                access, we will walk you through it.
              </p>
            </div>
            <div className="rounded-2xl border border-steel/10 bg-white p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                Service Area
              </p>
              <p className="mt-3 text-lg text-steel">
                {business.area} and nearby cities.
              </p>
              <Divider className="my-4" />
              <p className="text-sm text-steel/70">
                Call or text for availability outside the immediate area.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-concrete-gray/70">
        <Container className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-steel/10 bg-white p-6 shadow-card"
            >
              <h3 className="text-lg text-steel">{value.title}</h3>
              <p className="mt-3 text-sm text-steel/70">
                {value.description}
              </p>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}



