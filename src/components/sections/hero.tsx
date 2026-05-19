import { MoleculeMark } from "@/components/brand";
import { MolecularNetwork } from "@/components/molecular-network";

const TICKER = [
  "Palmitoyl Pentapeptide-4", "Palmitoyl Tripeptide-1", "Palmitoyl Tripeptide-5",
  "Kappa-Tripeptide-1 (GHK-Cu)", "LPPS Synthesis", "순도 95%+", "납기 3~5일", "시장가 -30%",
];

const STATS = [
  { v: "95%+", l: "순도 보장" },
  { v: "3~5일", l: "납기" },
  { v: "-30%", l: "시장가 대비" },
  { v: "4종", l: "팔미토일 펩타이드" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-24 pb-0 overflow-hidden bg-background">
      {/* Animated molecular network */}
      <div className="absolute inset-0">
        <MolecularNetwork />
      </div>
      {/* Subtle grid texture */}
      <div className="absolute inset-0 molecular-grid opacity-40 pointer-events-none" />
      {/* Gradient overlay: transparent top → #0e0f0d bottom 20% */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(14,15,13,0.8) 85%, #0e0f0d 100%)",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <MoleculeMark size={320} />
      </div>

      <div className="relative flex-1 flex items-center z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="label-mono mb-8 animate-fade-up">
            LPPS SYNTHESIS · PALMITOYL PEPTIDES · KOREA
          </div>
          <h1
            className="font-serif font-light leading-[1.05] tracking-tight text-foreground animate-fade-up"
            style={{ fontSize: "clamp(2.75rem, 7vw, 72px)" }}
          >
            <span className="font-korean">분자가 태어나는 순간,</span><br />
            <span className="font-korean text-glow-lime" style={{ color: "#6abf7b" }}>
              우리는 함께합니다.
            </span>
          </h1>
          <p className="mt-10 text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-up">
            고려대학교 화학과 박사가 직접 합성하는<br />팔미토일 펩타이드 4종
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <a href="#technology" className="px-8 py-3.5 border border-border text-foreground text-sm font-medium hover:border-lime hover:text-lime transition-all">
              기술 데이터 보기 →
            </a>
            <a href="#contact" className="px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-lime transition-colors">
              샘플 신청
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="group border-y border-border overflow-hidden bg-surface/60 backdrop-blur-sm">
          <div className="flex animate-marquee-medium whitespace-nowrap py-4 group-hover:[animation-play-state:paused]">
            {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="font-mono text-xs text-text-secondary mx-8 inline-flex items-center gap-8">
                {t}
                <span className="text-lime/40">◆</span>
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border border-t-2" style={{ borderTopColor: "#4a9e65" }}>
          {STATS.map((s, i) => (
            <div key={i} className={`px-6 py-7 bg-background/70 backdrop-blur-sm ${i < 3 ? 'md:border-r border-border' : ''} ${i < 2 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} ${i === 2 ? 'border-b md:border-b-0' : ''}`}>
              <div className="font-serif text-3xl md:text-4xl text-lime">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
