import { MoleculeMark } from "@/components/brand";

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
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-24 pb-0 overflow-hidden molecular-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 opacity-30">
        <MoleculeMark size={280} />
      </div>

      <div className="relative flex-1 flex items-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="label-mono mb-8 animate-fade-up">
            LPPS SYNTHESIS · PALMITOYL PEPTIDES · KOREA
          </div>
          <h1 className="font-korean text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-foreground animate-fade-up">
            분자가 태어나는 순간,<br />
            <span className="text-lime text-glow-lime">우리는 함께합니다.</span>
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

      <div className="relative">
        <div className="border-y border-border overflow-hidden bg-surface/40 backdrop-blur-sm">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="font-mono text-xs text-text-secondary mx-8 inline-flex items-center gap-8">
                {t}
                <span className="text-lime/40">◆</span>
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
          {STATS.map((s, i) => (
            <div key={i} className={`px-6 py-7 ${i < 3 ? 'md:border-r border-border' : ''} ${i < 2 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} ${i === 2 ? 'border-b md:border-b-0' : ''}`}>
              <div className="font-serif text-3xl md:text-4xl text-lime">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
