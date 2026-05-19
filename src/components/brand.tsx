export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif text-2xl tracking-tight ${className}`}>
      <span style={{ color: "#6abf7b" }}>with</span>
      <span className="text-foreground">biochem</span>
    </span>
  );
}

export function MoleculeMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className="animate-molecule">
      <line x1="12" y1="20" x2="24" y2="40" stroke="#6abf7b" strokeWidth="1.2" />
      <line x1="24" y1="40" x2="32" y2="20" stroke="#6abf7b" strokeWidth="1.2" />
      <line x1="32" y1="20" x2="40" y2="40" stroke="#6abf7b" strokeWidth="1.2" />
      <line x1="40" y1="40" x2="52" y2="20" stroke="#6abf7b" strokeWidth="1.2" />
      <circle cx="12" cy="20" r="3" fill="#6abf7b" />
      <circle cx="24" cy="40" r="3" fill="#4a9e65" />
      <circle cx="32" cy="20" r="3.5" fill="#6abf7b" />
      <circle cx="40" cy="40" r="3" fill="#4a9e65" />
      <circle cx="52" cy="20" r="3" fill="#6abf7b" />
    </svg>
  );
}
