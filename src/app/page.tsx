import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import Testimonial from "@/components/sections/Testimonial";
import LeadForm from "@/components/sections/LeadForm";
import GalleryCard from "@/components/sections/GalleryCard";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Divider from "@/components/ui/Divider";
import ButtonLink from "@/components/ui/ButtonLink";
import ShieldBadge from "@/components/svg/ShieldBadge";
import MapPin from "@/components/svg/MapPin";
import {
  business,
  credibility,
  faqItems,
  serviceSteps,
  services,
  testimonials,
  trustPoints,
} from "@/lib/data";
import { getGalleryAvailability } from "@/lib/gallery";

export default function HomePage() {
  const gallery = getGalleryAvailability();

  return (
    <>
      <Hero />

      <Section id="services" className="bg-concrete-gray/70">
        <Container className="space-y-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                  Services Offered
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl">
                  Clean cuts. Fast removal. Total haul-off.
                </h2>
              </div>
              <ButtonLink href="/services" variant="secondary" size="sm">
                View all services
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                  How It Works
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl">
                  Three steps to a clean cut.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-steel/60">
                {trustPoints.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-steel/10 bg-white p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safety">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl text-steel">{step.title}</h3>
                  <p className="mt-3 text-sm text-steel/70">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-concrete-gray/70">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                  Service Area
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl">
                  St. Augustine Beach and nearby cities.
                </h2>
              </div>
              <div className="grid gap-3 text-sm text-steel/70 sm:grid-cols-2">
                {business.serviceAreas.map((city) => (
                  <span key={city} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-safety" />
                    {city}
                  </span>
                ))}
              </div>
              <Divider />
              <p className="text-sm text-steel/70">
                Need cutting or removal outside this list? Call or text and we
                will confirm availability.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-steel/10 bg-white">
              <iframe
                title="St. Augustine Beach service area map"
                className="h-[320px] w-full grayscale"
                loading="lazy"
                src="https://maps.google.com/maps?q=St.%20Augustine%20Beach%2C%20FL&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                Why Precision Cut
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Focused on clean jobsites and clear communication.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {credibility.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="flex gap-4 rounded-2xl border border-steel/10 bg-white p-6 shadow-card">
                  <ShieldBadge className="h-12 w-12 text-safety" />
                  <div>
                    <h3 className="text-lg text-steel">{item.title}</h3>
                    <p className="mt-2 text-sm text-steel/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-concrete-gray/70">
        <Container className="space-y-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                  Recent Work
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl">
                  Gallery of clean removals.
                </h2>
              </div>
              <ButtonLink href="/projects" variant="secondary" size="sm">
                View full gallery
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <Reveal key={item.title}>
                <GalleryCard {...item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                Customer Feedback
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Trusted for precision and cleanup.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Reveal key={item.quote}>
                <Testimonial {...item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-concrete-gray/70">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                  FAQ
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl">
                  Know before we cut.
                </h2>
              </div>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-steel/10 bg-white p-5"
                  >
                    <h3 className="text-base text-steel">{item.question}</h3>
                    <p className="mt-2 text-sm text-steel/70">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div id="estimate" className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel/60">
                  Get a Free Estimate
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl">
                  Send the details. We will confirm scope fast.
                </h2>
              </div>
              <LeadForm />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
