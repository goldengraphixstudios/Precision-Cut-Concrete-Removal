import Link from "next/link";
import { buttonStyles, type ButtonSize, type ButtonVariant } from "@/lib/styles";

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

export default function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${buttonStyles(variant, size)} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}



