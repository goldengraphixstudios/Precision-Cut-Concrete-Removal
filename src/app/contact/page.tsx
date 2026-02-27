import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import LeadForm from "@/components/sections/LeadForm";
import ButtonLink from "@/components/ui/ButtonLink";
import MapPin from "@/components/svg/MapPin";
import PhoneWave from "@/components/svg/PhoneWave";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Precision Cut Concrete Removal for fast concrete cutting and removal quotes in St. Augustine Beach, FL.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-concrete-gray/70">
        <Container className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl">Get a fast, clean estimate.</h1>
          <p className="max-w-2xl text-base text-steel/70">
            Call or text for immediate response, or send the details below and we
            will confirm scope quickly.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href={business.phoneHref} size="lg">
              <PhoneWave className="h-5 w-5" aria-hidden="true" />
              Call/Text {business.phone}
            </ButtonLink>
            <ButtonLink
              href={`mailto:${business.email}`}
              variant="secondary"
              size="lg"
            >
              Email Us
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-steel/10 bg-white p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                Service Area
              </p>
              <div className="mt-3 space-y-2 text-sm text-steel/70">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-safety" />
                  {business.area}
                </span>
                <span>{business.phone}</span>
                <span className="break-all">{business.email}</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-steel/10 bg-white">
              <iframe
                title="Precision Cut Concrete Removal service map"
                className="h-[320px] w-full grayscale"
                loading="lazy"
                src="https://maps.google.com/maps?q=St.%20Augustine%20Beach%2C%20FL&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
          <div id="estimate" className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
              Request Estimate
            </p>
            <h2 className="text-3xl sm:text-4xl">
              Tell us about the job.
            </h2>
            <LeadForm />
          </div>
        </Container>
      </Section>
    </>
  );
}



