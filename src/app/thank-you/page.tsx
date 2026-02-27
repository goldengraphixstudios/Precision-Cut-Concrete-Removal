import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import CheckBadge from "@/components/svg/CheckBadge";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your request for a concrete cutting estimate.",
};

export default function ThankYouPage() {
  return (
    <Section className="bg-concrete-gray/70">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-safety/40 bg-safety/10 text-safety">
          <CheckBadge className="h-10 w-10" />
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl">Request received.</h1>
        <p className="mt-4 max-w-xl text-base text-steel/70">
          We are reviewing your details and will contact you shortly. If the job
          is urgent, call or text us now.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <ButtonLink href={business.phoneHref} size="lg">
            Call/Text {business.phone}
          </ButtonLink>
          <ButtonLink href="/" variant="secondary" size="lg">
            Back to Home
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}



