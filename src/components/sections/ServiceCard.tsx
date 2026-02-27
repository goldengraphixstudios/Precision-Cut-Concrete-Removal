"use client";

import { useState } from "react";
import CheckBadge from "@/components/svg/CheckBadge";

interface ServiceCardProps {
  title: string;
  summary: string;
  details: string;
}

export default function ServiceCard({
  title,
  summary,
  details,
}: ServiceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      className="group flex w-full flex-col gap-4 rounded-2xl border border-steel/10 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-safety/50 hover:shadow-glow"
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-[0.16em] text-steel">
            {title}
          </h3>
          <p className="text-sm text-steel/70">{summary}</p>
        </div>
        <CheckBadge
          className="h-10 w-10 text-safety"
          aria-hidden="true"
        />
      </div>
      <div
        className={`text-sm text-steel/70 transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {details}
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-safety">
        {open ? "Close" : "Expand"}
      </span>
    </button>
  );
}



