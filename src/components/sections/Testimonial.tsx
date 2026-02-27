interface TestimonialProps {
  quote: string;
  label: string;
}

export default function Testimonial({ quote, label }: TestimonialProps) {
  return (
    <div className="rounded-2xl border border-steel/10 bg-white p-6 text-sm text-steel/70 shadow-card">
      <p className="text-base text-steel">
        &quot;{quote}&quot;
      </p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-steel/50">
        {label}
      </p>
    </div>
  );
}



