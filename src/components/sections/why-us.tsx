const USP = [
  { v: "−30%", t: "시장가 대비 단가", d: "직접 합성으로 중간 유통 마진 제거" },
  { v: "95%+", t: "순도 일관성", d: "LPPS 공정 배치별 CoA 제공" },
  { v: "3~5일", t: "납기 단축", d: "수입 3~8주 → 국내 합성 3~5일" },
  { v: "50g~", t: "소량 공급", d: "개발 단계부터 상업화까지" },
];

export function WhyUs() {
  return (
    <section className="relative bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        <div className="label-mono mb-8">WHY WITHBIOCHEM</div>
        <h2 className="text-4xl md:text-6xl text-foreground max-w-3xl leading-tight">
          공급사를 바꾸지 않을<br /><span className="text-lime">이유가 없습니다.</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-20 bg-border">
          {USP.map((u, i) => (
            <div key={i} className="bg-surface p-8 md:p-10 hover:bg-background transition-colors">
              <div className="font-serif text-4xl md:text-5xl text-lime mb-6">{u.v}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-foreground mb-3">{u.t}</div>
              <div className="text-sm text-text-secondary leading-relaxed">{u.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-l-2 border-lime pl-8 md:pl-12 max-w-3xl">
          <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-4">FROM THE FOUNDERS</div>
          <blockquote className="font-korean text-3xl md:text-4xl text-foreground leading-snug">
            "원료만 파는 것이 아닙니다.<br />
            <span className="text-lime">합성한 사람이 직접</span> 처방을 도와드립니다."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
