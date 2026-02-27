import type { SVGProps } from "react";

export default function PhoneWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M18 8h12a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M20 14h8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M14 20c-2 2-2 6 0 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M34 20c2 2 2 6 0 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}



