import type { SVGProps } from "react";

export default function MapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M24 44s14-12 14-24a14 14 0 0 0-28 0c0 12 14 24 14 24z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}



