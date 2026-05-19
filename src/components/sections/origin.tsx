export function Origin() {
  return (
    <section id="origin" className="relative bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        <div className="label-mono mb-16">OUR ORIGIN · 탄생의 이유</div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="md:sticky md:top-32">
            <div className="bg-navy p-12 md:p-16 aspect-[4/5] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 molecular-grid opacity-30" />
              <h2 className="relative font-korean text-7xl md:text-9xl font-light text-foreground leading-[0.95] tracking-tight">
                왜<br />없었을까.
              </h2>
            </div>
          </div>
          <div className="space-y-7 text-lg leading-[1.85] text-text-secondary font-korean">
            <p>세계가 인정하는 합성 기술을 가진 나라에 합리적으로 생산하는 펩타이드 솔루션 회사가 존재하지 않았습니다.</p>
            <p className="text-foreground">이상한 일입니다.<br />그리고 바꿔야 할 일입니다.</p>
            <p>연구실을 나서며 두 사람은 그 질문 앞에 멈췄습니다.</p>
            <p className="text-lime text-xl">대답을 찾는 대신,<br />직접 만들기로 했습니다.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-24">
          {[
            { name: "공동창업자 A", spec: "유기화학 합성 전공" },
            { name: "공동창업자 B", spec: "화장품·의약품 합성 연구" },
          ].map((f, i) => (
            <div key={i} className="border border-border p-8 bg-surface/40 hover:border-lime/40 transition-colors">
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-4">CO-FOUNDER 0{i + 1}</div>
              <div className="font-serif text-2xl text-foreground mb-2">{f.name}</div>
              <div className="text-sm text-text-secondary">고려대학교 화학과 박사</div>
              <div className="text-sm text-text-secondary">{f.spec}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
