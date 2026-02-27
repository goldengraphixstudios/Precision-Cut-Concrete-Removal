import type { ButtonHTMLAttributes } from "react";
import { buttonStyles, type ButtonSize, type ButtonVariant } from "@/lib/styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyles(variant, size)} ${className ?? ""}`}
      {...props}
    />
  );
}



