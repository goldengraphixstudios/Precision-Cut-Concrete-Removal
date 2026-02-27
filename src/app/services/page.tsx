import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import ServiceCard from "@/components/sections/ServiceCard";
import LeadForm from "@/components/sections/LeadForm";
import { business, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Concrete cutting, slab and wall cutting, core drilling, trenching, and debris hauling in St. Augustine Beach, FL.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-concrete-gray/70">
        <Container className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl">Cut clean. Remove fast.</h1>
          <p className="max-w-2xl text-base text-steel/70">
            Full-service concrete cutting and removal for residential and light
            commercial projects. We focus on precise cut lines, safe work zones,
            and quick haul-off.
          </p>
          <ButtonLink href={business.phoneHref} size="lg">
            Call/Text {business.phone}
          </ButtonLink>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </Container>
      </Section>

      <Section className="bg-concrete-gray/70">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
              Quick Estimate
            </p>
            <h2 className="text-3xl sm:text-4xl">
              Tell us the scope. We will confirm fast.
            </h2>
            <p className="text-sm text-steel/70">
              Provide a rough address, slab thickness if known, and any access
              notes. Photos help for accurate quotes.
            </p>
          </div>
          <LeadForm />
        </Container>
      </Section>
    </>
  );
}



