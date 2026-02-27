import type { ReactNode } from "react";
import { cardStyles } from "@/lib/styles";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <div className={`${cardStyles} ${className ?? ""}`}>{children}</div>;
}



