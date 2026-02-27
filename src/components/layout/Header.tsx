import Link from "next/link";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import SawBladeMark from "@/components/svg/SawBladeMark";
import PhoneWave from "@/components/svg/PhoneWave";
import { business } from "@/lib/data";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-steel/10 bg-concrete-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-steel/10 bg-concrete-gray text-safety">
            <SawBladeMark className="h-8 w-8" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-steel/60">
              Precision Cut
            </span>
            <span className="block text-base font-semibold uppercase tracking-[0.2em] text-steel">
              Concrete Removal
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-steel/70 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-steel">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={business.phoneHref} variant="secondary" size="sm">
            <PhoneWave className="h-4 w-4" aria-hidden="true" />
            Call/Text
          </ButtonLink>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steel/60">
            {business.phone}
          </span>
        </div>
      </Container>
    </header>
  );
}



