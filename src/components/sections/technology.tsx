const FEATURES = [
  { tag: "SYNTHESIS", title: "팔미토일 계열 최적화 공정", body: "지용성 팔미토일 시퀀스에서 수율이 높고 배치 일관성이 우수합니다." },
  { tag: "QUALITY", title: "순도 95% 이상, 배치마다 검증", body: "외부 공인기관 성적서. CoA·SDS·중금속 시험 전 문서 즉시 제공." },
  { tag: "SUPPLY", title: "발주 후 3~5일 납기", body: "해외 수입 3~8주 대비 국내 직접 합성으로 즉시 공급." },
];

const TABLE = {
  cols: ["항목", "중국산", "미국·스페인산", "withbiochem"],
  rows: [
    ["순도", "변동 큼", "95%+", "95%+ 보장"],
    ["납기", "4~6주", "6~8주", "3~5일"],
    ["MOQ", "1kg+", "500g+", "50g~"],
    ["단가", "낮음", "매우 높음", "시장가 -30%"],
    ["기술지원", "제한적", "한국어 X", "박사 직접 지원"],
    ["소통", "느림", "영어/시차", "실시간 한국어"],
  ],
};

export function Technology() {
  return (
    <section id="technology" className="relative bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        <div className="label-mono mb-8">OUR TECHNOLOGY · LPPS 합성 기술</div>
        <h2 className="text-4xl md:text-6xl text-foreground max-w-3xl leading-tight">
          LPPS. <span className="text-lime">우리가 선택한 방법</span>입니다.
        </h2>
        <p className="mt-6 text-text-secondary max-w-2xl leading-relaxed">
          대부분의 합성사가 쓰는 SPPS가 아닌 액상 합성(LPPS)으로 팔미토일 펩타이드를 만듭니다.
        </p>

        <div className="grid md:grid-cols-3 gap-px mt-20 bg-border">
          {FEATURES.map((f, i) => (
            <div key={i} className="bg-surface p-10 hover:bg-background transition-colors group">
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-6">
                0{i + 1} / {f.tag}
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-lime transition-colors">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="label-mono mb-6">COMPARISON · 공급사 비교</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {TABLE.cols.map((c, i) => (
                    <th key={i} className={`text-left py-5 px-4 font-mono text-xs uppercase tracking-widest ${i === 3 ? 'text-lime bg-primary/5' : 'text-text-secondary'}`}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    {row.map((cell, j) => (
                      <td key={j} className={`py-5 px-4 text-sm ${j === 0 ? 'font-mono text-text-secondary uppercase tracking-wider text-xs' : j === 3 ? 'text-lime font-medium bg-primary/5' : 'text-foreground'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
