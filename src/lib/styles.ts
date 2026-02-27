export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export const buttonStyles = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md"
) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-semibold uppercase tracking-[0.12em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety";
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-safety text-white hover:bg-ember shadow-glow",
    secondary:
      "border-steel/20 text-steel hover:border-safety hover:text-safety",
    ghost: "border-transparent text-steel/70 hover:text-steel",
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-4 text-sm sm:text-base",
  };

  return `${base} ${variants[variant]} ${sizes[size]}`;
};

export const cardStyles =
  "rounded-2xl border border-steel/10 bg-white shadow-card";



