const PRODUCTS = [
  {
    code: "PP-4", tag: "ANTI-AGING CORE", name: "팔미토일펜타펩타이드-4",
    en: "Palmitoyl Pentapeptide-4", alias: "Matrixyl® · Pal-KTTKS",
    func: "콜라겐 I·III·IV 합성 촉진 / 피부 ECM 재생", use: "안티에이징 세럼·크림·앰플",
    purity: "95%+", gold: false,
  },
  {
    code: "PT-1", tag: "COLLAGEN + ELASTIN", name: "팔미토일트리펩타이드-1",
    en: "Palmitoyl Tripeptide-1", alias: "Pal-GHK · Biopeptide EL™",
    func: "콜라겐·엘라스틴 이중 자극 / 진피층 리모델링", use: "리프팅·탄력 케어 제품",
    purity: "95%+", gold: false,
  },
  {
    code: "PT-5", tag: "TGF-β MIMIC", name: "팔미토일트리펩타이드-5",
    en: "Palmitoyl Tripeptide-5", alias: "SYN-COLL™ · Pal-KVK",
    func: "TGF-β 모방·MMP 억제 / 콜라겐 합성 강화", use: "고기능성 더마 코스메틱",
    purity: "95%+", gold: false,
  },
  {
    code: "GHK-Cu", tag: "COPPER PEPTIDE", name: "카파트리펩타이드-1",
    en: "Kappa-Tripeptide-1 (GHK-Cu)", alias: "구리 펩타이드 · GHK-Cu",
    func: "모발 성장·재생·항산화·항염 / 탈모케어 특화", use: "탈모케어·메디컬 에스테틱",
    purity: "95%+", gold: true, note: "구리 결합 검증 데이터 제공",
  },
];

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

        <div className="grid md:grid-cols-2 gap-px mt-20 bg-border">
          {PRODUCTS.map((p) => (
            <div key={p.code} className={`bg-surface p-10 md:p-12 group hover:bg-background transition-colors relative ${p.gold ? 'border-l-2 border-l-gold' : ''}`}>
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className={`font-mono text-[10px] uppercase tracking-widest mb-3 ${p.gold ? 'text-gold' : 'text-lime'}`}>
                    {p.tag}
                  </div>
                  <div className="font-mono text-xs text-text-secondary">{p.code}</div>
                </div>
                <div className={`font-mono text-xs px-3 py-1.5 border ${p.gold ? 'border-gold text-gold' : 'border-lime text-lime'}`}>
                  PURITY {p.purity}
                </div>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">{p.name}</h3>
              <div className="text-sm text-text-secondary italic mb-1">{p.en}</div>
              <div className="font-mono text-xs text-text-secondary/70 mb-8">{p.alias}</div>

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
                  <div className="bg-gold/10 border border-gold/30 p-3 text-xs text-gold font-mono">
                    ◆ {p.note}
                  </div>
                )}
              </dl>

              <button className={`mt-8 font-mono text-xs uppercase tracking-widest border-b pb-1 transition-colors ${p.gold ? 'text-gold border-gold/40 hover:border-gold' : 'text-lime border-lime/40 hover:border-lime'}`}>
                데이터시트 다운로드 →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
