interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-transparent via-steel/20 to-transparent ${className ?? ""}`}
    />
  );
}



