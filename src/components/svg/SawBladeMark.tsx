import type { SVGProps } from "react";

export default function SawBladeMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" {...props}>
      <circle
        cx="60"
        cy="60"
        r="42"
        stroke="currentColor"
        strokeWidth="8"
        opacity="0.9"
      />
      <g fill="currentColor">
        <rect x="56" y="6" width="8" height="18" rx="2" />
        <rect
          x="56"
          y="96"
          width="8"
          height="18"
          rx="2"
          transform="rotate(180 60 105)"
        />
        <rect
          x="6"
          y="56"
          width="18"
          height="8"
          rx="2"
        />
        <rect
          x="96"
          y="56"
          width="18"
          height="8"
          rx="2"
          transform="rotate(180 105 60)"
        />
        <rect
          x="19"
          y="19"
          width="12"
          height="8"
          rx="2"
          transform="rotate(-45 25 23)"
        />
        <rect
          x="89"
          y="19"
          width="12"
          height="8"
          rx="2"
          transform="rotate(45 95 23)"
        />
        <rect
          x="19"
          y="89"
          width="12"
          height="8"
          rx="2"
          transform="rotate(45 25 93)"
        />
        <rect
          x="89"
          y="89"
          width="12"
          height="8"
          rx="2"
          transform="rotate(-45 95 93)"
        />
      </g>
      <path
        d="M42 86V34h26c11 0 20 9 20 20 0 12-9 21-20 21H54v11H42zm12-39h12c5 0 9-4 9-9 0-5-4-8-9-8H54v17z"
        fill="currentColor"
      />
    </svg>
  );
}



