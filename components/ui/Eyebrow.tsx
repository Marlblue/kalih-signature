type EyebrowProps = {
  children: React.ReactNode;
  tone?: "primary" | "secondary";
  className?: string;
};

export default function Eyebrow({ children, tone = "primary", className = "mb-4" }: EyebrowProps) {
  return (
    <span
      className={`text-xs font-bold uppercase tracking-widest block ${
        tone === "primary" ? "text-primary" : "text-secondary"
      } ${className}`}
    >
      {children}
    </span>
  );
}
