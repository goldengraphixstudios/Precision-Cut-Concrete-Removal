import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import SawBladeMark from "@/components/svg/SawBladeMark";
import { business, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-steel/10 bg-asphalt">
      <Container className="space-y-10 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-asphalt/80 text-safety">
                <SawBladeMark className="h-8 w-8" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-concrete-white/70">
                  Precision Cut
                </p>
                <p className="text-lg font-semibold uppercase tracking-[0.2em] text-concrete-white">
                  Concrete Removal LLC
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-concrete-white/80">
              Local concrete cutting and removal team serving {business.area} and
              nearby cities. Fast, precise, and focused on clean jobsites.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-concrete-white/60">
              Services
            </p>
            <ul className="space-y-2 text-concrete-white/80">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-concrete-white/60">
              Contact
            </p>
            <div className="space-y-2 text-concrete-white/80">
              <p>{business.area}</p>
              <p>{business.phone}</p>
              <p className="break-all">{business.email}</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-concrete-white/50">
          <p>Free estimates. Ask about insurance coverage.</p>
          <p>Gallery images are stock examples for illustration.</p>
          <p>Precision Cut Concrete Removal LLC</p>
        </div>
      </Container>
    </footer>
  );
}



