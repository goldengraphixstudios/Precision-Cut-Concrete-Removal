import type { SVGProps } from "react";

export default function ShieldBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M24 6l14 6v12c0 10-6.5 16.8-14 18-7.5-1.2-14-8-14-18V12l14-6z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M16 25l5 5 11-12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



