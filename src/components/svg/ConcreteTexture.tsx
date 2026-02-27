import type { SVGProps } from "react";

export default function ConcreteTexture(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 400" fill="none" {...props}>
      <defs>
        <pattern
          id="concreteGrain"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="6" cy="8" r="2" fill="currentColor" opacity="0.12" />
          <circle cx="24" cy="18" r="1.5" fill="currentColor" opacity="0.1" />
          <circle cx="48" cy="12" r="1.2" fill="currentColor" opacity="0.08" />
          <circle cx="12" cy="40" r="1.6" fill="currentColor" opacity="0.1" />
          <circle cx="36" cy="32" r="1.4" fill="currentColor" opacity="0.1" />
          <circle cx="52" cy="46" r="2" fill="currentColor" opacity="0.12" />
          <circle cx="18" cy="54" r="1.2" fill="currentColor" opacity="0.08" />
          <circle cx="44" cy="54" r="1.8" fill="currentColor" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#concreteGrain)" />
    </svg>
  );
}



