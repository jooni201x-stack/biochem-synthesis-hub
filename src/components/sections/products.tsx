import { Download, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const PRODUCTS = [
  {
    code: "PP-4", tag: "ANTI-AGING CORE", accent: "#4a9e65",
    name: "팔미토일펜타펩타이드-4",
    en: "Palmitoyl Pentapeptide-4",
    inci: "PALMITOYL PENTAPEPTIDE-4",
    alias: "Matrixyl® · Pal-KTTKS",
    func: "콜라겐 I·III·IV 합성 촉진 / 피부 ECM 재생",
    use: "안티에이징 세럼·크림·앰플",
    purity: "95%+", gold: false,
  },
  {
    code: "PT-1", tag: "COLLAGEN + ELASTIN", accent: "#3a7abf",
    name: "팔미토일트리펩타이드-1",
    en: "Palmitoyl Tripeptide-1",
    inci: "PALMITOYL TRIPEPTIDE-1",
    alias: "Pal-GHK · Biopeptide EL™",
    func: "콜라겐·엘라스틴 이중 자극 / 진피층 리모델링",
    use: "리프팅·탄력 케어 제품",
    purity: "95%+", gold: false,
  },
  {
    code: "PT-5", tag: "TGF-β MIMIC", accent: "#9a7d3a",
    name: "팔미토일트리펩타이드-5",
    en: "Palmitoyl Tripeptide-5",
    inci: "PALMITOYL TRIPEPTIDE-5",
    alias: "SYN-COLL™ · Pal-KVK",
    func: "TGF-β 모방·MMP 억제 / 콜라겐 합성 강화",
    use: "고기능성 더마 코스메틱",
    purity: "95%+", gold: false,
  },
  {
    code: "GHK-Cu", tag: "COPPER PEPTIDE", accent: "#b87333",
    name: "카파트리펩타이드-1",
    en: "Kappa-Tripeptide-1 (GHK-Cu)",
    inci: "COPPER TRIPEPTIDE-1",
    alias: "구리 펩타이드 · GHK-Cu",
    func: "모발 성장·재생·항산화·항염 / 탈모케어 특화",
    use: "탈모케어·메디컬 에스테틱",
    purity: "95%+", gold: true, note: "구리 결합 검증 데이터 제공",
  },
];

function MoleculeArt({ color, seed }: { color: string; seed: number }) {
  // Deterministic pseudo-random nodes per card
  const rnd = (i: number) => {
    const x = Math.sin(seed * 9.7 + i * 2.3) * 10000;
    return x - Math.floor(x);
  };
  const nodes = Array.from({ length: 7 }, (_, i) => ({
    x: 10 + rnd(i) * 100,
    y: 10 + rnd(i + 30) * 80,
    r: 2 + rnd(i + 60) * 2.5,
  }));
  const lines: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [1, 4], [4, 5], [5, 6], [2, 6], [0, 3],
  ];
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" className="opacity-70">
      {lines.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke={color} strokeWidth="0.6" opacity="0.5"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={color} opacity={0.4 + (i % 3) * 0.2} />
      ))}
    </svg>
  );
}

export function Products() {
  return (
    <section id="products" className="relative bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        <div className="label-mono mb-8">OUR INGREDIENTS · 원료 라인업</div>
        <h2 className="text-4xl md:text-6xl text-foreground max-w-3xl leading-tight">
          4가지 펩타이드,<br /><span className="text-lime">하나의 공급사.</span>
        </h2>
        <p className="mt-6 text-text-secondary max-w-2xl leading-relaxed">
          안티에이징부터 탈모케어까지 필요한 팔미토일 펩타이드를 한 곳에서 조달합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-20">
          {PRODUCTS.map((p, idx) => (
            <article
              key={p.code}
              className="group relative bg-surface border border-border transition-all duration-300 hover:-translate-y-1 hover:border-transparent overflow-hidden"
              style={{
                ["--accent" as string]: p.accent,
              }}
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-full" style={{ backgroundColor: p.accent }} />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: `0 18px 48px -12px ${p.accent}55, 0 0 0 1px ${p.accent}40 inset` }}
              />

              <div className="relative p-10 md:p-12">
                {/* Molecule art top-right */}
                <div className="absolute top-6 right-6 pointer-events-none">
                  <MoleculeArt color={p.accent} seed={idx + 1} />
                </div>

                <div className="flex items-start justify-between mb-8 pr-32">
                  <div>
                    <div
                      className="font-mono text-[10px] uppercase tracking-widest mb-3"
                      style={{ color: p.accent }}
                    >
                      {p.tag}
                    </div>
                    <div className="font-mono text-xs text-text-secondary">{p.code}</div>
                  </div>
                </div>

                {/* INCI mono */}
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-2">
                  INCI · {p.inci}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">{p.name}</h3>
                <div className="text-sm text-text-secondary italic mb-1">{p.en}</div>
                <div className="font-mono text-xs text-text-secondary/70 mb-8">{p.alias}</div>

                {/* Purity badge */}
                <div className="mb-8">
                  <span
                    className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 border group-hover:animate-pulse-badge"
                    style={{
                      borderColor: p.accent,
                      color: p.accent,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.accent }} />
                    PURITY {p.purity} · 순도
                  </span>
                </div>

                <dl className="space-y-5 border-t border-border pt-6">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-2">FUNCTION</dt>
                    <dd className="text-sm text-foreground leading-relaxed">{p.func}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-2">USE CASE</dt>
                    <dd className="text-sm text-foreground leading-relaxed">{p.use}</dd>
                  </div>
                  {p.note && (
                    <div
                      className="border p-3 text-xs font-mono"
                      style={{ backgroundColor: `${p.accent}15`, borderColor: `${p.accent}55`, color: p.accent }}
                    >
                      ◆ {p.note}
                    </div>
                  )}
                </dl>

                <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                  <button
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b pb-1 transition-colors"
                    style={{ color: p.accent, borderColor: `${p.accent}55` }}
                  >
                    <Download size={13} strokeWidth={1.8} />
                    데이터시트
                  </button>
                  {p.code === "PP-4" && (
                    <Link
                      to="/ingredients/pp4"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground hover-lime"
                    >
                      자세히 보기 <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
