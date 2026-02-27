import type { SVGProps } from "react";

export default function CheckBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" />
      <path
        d="M16 24.5l5.2 5.2L33 18"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



