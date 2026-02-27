"use client";

import { useState } from "react";
import Image from "next/image";
import ConcreteTexture from "@/components/svg/ConcreteTexture";
import { withBasePath } from "@/lib/site";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12'%3E%3Crect width='16' height='12' fill='%23E5E7EB'/%3E%3C/svg%3E";

export default function HeroMedia() {
  const [primaryOk, setPrimaryOk] = useState(true);
  const [secondaryOk, setSecondaryOk] = useState(true);
  const primarySrc = withBasePath("/gallery/driveway-removal.jpg");
  const secondarySrc = withBasePath("/gallery/core-drilling.jpg");

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-steel/10 bg-concrete-gray shadow-card">
        <div className="absolute inset-0 bg-gradient-to-tr from-concrete-gray/60 via-transparent to-white/60" />
        {primaryOk && (
          <Image
            src={primarySrc}
            alt="Concrete cutting and driveway removal"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
            onError={() => setPrimaryOk(false)}
          />
        )}
        <div className="absolute inset-0 opacity-20 mix-blend-multiply">
          <ConcreteTexture className="h-full w-full text-steel" />
        </div>
        <div className="absolute -top-6 right-[-10%] h-[6px] w-[140%] rotate-[-4deg] bg-safety" />
      </div>
      <div className="absolute -bottom-8 -left-6 w-44 sm:w-52 md:w-60">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-steel/15 bg-white shadow-card">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/70" />
        {secondaryOk && (
          <Image
            src={secondarySrc}
            alt="Core drilling and utility access"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              onError={() => setSecondaryOk(false)}
            />
          )}
        </div>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-steel/60">
          Haul-off ready
        </p>
      </div>
    </div>
  );
}
