import { Check, Minus, X } from "lucide-react";

const FEATURES = [
  { tag: "SYNTHESIS", title: "팔미토일 계열 최적화 공정", body: "지용성 팔미토일 시퀀스에서 수율이 높고 배치 일관성이 우수합니다." },
  { tag: "QUALITY", title: "순도 95% 이상, 배치마다 검증", body: "외부 공인기관 성적서. CoA·SDS·중금속 시험 전 문서 즉시 제공." },
  { tag: "SUPPLY", title: "발주 후 3~5일 납기", body: "해외 수입 3~8주 대비 국내 직접 합성으로 즉시 공급." },
];

type Tone = "neg" | "neu" | "pos";
type Cell = { v: string; tone: Tone };

const COLS = ["항목", "중국산", "미국·스페인산", "withbiochem"];
const ROWS: { label: string; cells: [Cell, Cell, Cell] }[] = [
  { label: "순도", cells: [{ v: "변동 큼", tone: "neg" }, { v: "95%+", tone: "neu" }, { v: "95%+ 보장", tone: "pos" }] },
  { label: "납기", cells: [{ v: "4~6주", tone: "neg" }, { v: "6~8주", tone: "neg" }, { v: "3~5일", tone: "pos" }] },
  { label: "MOQ", cells: [{ v: "1kg+", tone: "neg" }, { v: "500g+", tone: "neu" }, { v: "50g~", tone: "pos" }] },
  { label: "단가", cells: [{ v: "낮음", tone: "neu" }, { v: "매우 높음", tone: "neg" }, { v: "시장가 -30%", tone: "pos" }] },
  { label: "기술지원", cells: [{ v: "제한적", tone: "neg" }, { v: "한국어 X", tone: "neu" }, { v: "박사 직접 지원", tone: "pos" }] },
  { label: "소통", cells: [{ v: "느림", tone: "neg" }, { v: "영어/시차", tone: "neu" }, { v: "실시간 한국어", tone: "pos" }] },
];

const ToneIcon = ({ tone }: { tone: Tone }) => {
  if (tone === "pos") return <Check size={14} strokeWidth={2.4} className="text-lime shrink-0" />;
  if (tone === "neu") return <Minus size={14} strokeWidth={2.4} className="text-amber-400 shrink-0" />;
  return <X size={14} strokeWidth={2.4} className="text-red-400 shrink-0" />;
};

const toneText: Record<Tone, string> = {
  pos: "text-lime",
  neu: "text-amber-300/90",
  neg: "text-red-400/85",
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

          <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="min-w-[720px] relative">
              {/* Winner badge */}
              <div className="absolute -top-3 right-0 w-1/4 flex justify-center pointer-events-none z-10">
                <span className="bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 shadow-lg">
                  ★ WINNER
                </span>
              </div>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    {COLS.map((c, i) => (
                      <th
                        key={i}
                        className={`text-left py-5 px-4 font-mono text-xs uppercase tracking-widest ${
                          i === 3
                            ? "text-lime bg-primary/10 border-x border-lime/40"
                            : "text-text-secondary"
                        }`}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="py-5 px-4 font-mono text-text-secondary uppercase tracking-wider text-xs">
                        {row.label}
                      </td>
                      {row.cells.map((cell, j) => {
                        const isWinner = j === 2;
                        return (
                          <td
                            key={j}
                            className={`py-5 px-4 text-sm ${
                              isWinner
                                ? "bg-primary/10 border-x border-lime/40 font-medium"
                                : ""
                            }`}
                          >
                            <span className={`inline-flex items-center gap-2 ${toneText[cell.tone]}`}>
                              <ToneIcon tone={cell.tone} />
                              {cell.v}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 font-mono text-xs text-text-secondary/70 leading-relaxed">
            ※ 순도 데이터는 시장 평균 기준. 실측 비교 데이터 확보 후 업데이트 예정.
          </p>
        </div>
      </div>
    </section>
  );
}

