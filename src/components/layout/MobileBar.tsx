import ButtonLink from "@/components/ui/ButtonLink";
import { business } from "@/lib/data";
import PhoneWave from "@/components/svg/PhoneWave";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-steel/10 bg-concrete-white/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <ButtonLink href={business.phoneHref} size="md" className="flex-1">
          <PhoneWave className="h-4 w-4" aria-hidden="true" />
          Call/Text
        </ButtonLink>
        <ButtonLink href="/contact#estimate" variant="secondary" size="md">
          Get Quote
        </ButtonLink>
      </div>
    </div>
  );
}



