import { LaptopMinimal, TrendingUp } from "lucide-react";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-mark ${compact ? "brand-mark-compact" : ""}`} aria-label="Carreira Profissional Prime">
      <span className="brand-emblem" aria-hidden="true">
        <LaptopMinimal className="brand-laptop" />
        <TrendingUp className="brand-growth" />
      </span>
      {!compact && (
        <span className="brand-type">
          <strong>Prime</strong>
          <small>Carreira Profissional</small>
        </span>
      )}
    </div>
  );
}
