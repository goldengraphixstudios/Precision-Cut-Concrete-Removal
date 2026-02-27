import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-safety/40 bg-safety/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-safety ${className ?? ""}`}
    >
      {children}
    </span>
  );
}



