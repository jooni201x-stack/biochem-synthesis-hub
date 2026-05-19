import { useEffect, useRef, useState } from "react";
import { GraduationCap, FlaskConical, Lightbulb, Rocket, Atom, Truck } from "lucide-react";

const TIMELINE = [
  { label: "연구", en: "RESEARCH", icon: FlaskConical },
  { label: "발견", en: "INSIGHT", icon: Lightbulb },
  { label: "창업", en: "FOUNDED", icon: Rocket },
  { label: "합성", en: "SYNTHESIS", icon: Atom },
  { label: "납품", en: "DELIVERY", icon: Truck },
];

const PARAGRAPHS = [
  "세계가 인정하는 합성 기술을 가진 나라에 합리적으로 생산하는 펩타이드 솔루션 회사가 존재하지 않았습니다.",
  "이상한 일입니다. 그리고 바꿔야 할 일입니다.",
  "연구실을 나서며 두 사람은 그 질문 앞에 멈췄습니다.",
];

const CLOSING = "대답을 찾는 대신, 직접 만들기로 했습니다.";

function StaggeredText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(/(\s+)/);
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transitionDelay: `${delay + i * 45}ms`,
            whiteSpace: w === " " ? "pre" : undefined,
          }}
        >
          {w}
        </span>
      ))}
    </p>
  );
}

export function Origin() {
  return (
    <section id="origin" className="relative bg-background border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        <div className="label-mono mb-16">OUR ORIGIN · 탄생의 이유</div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT: Dramatic typography */}
          <div className="md:col-span-7 md:sticky md:top-32">
            <div className="bg-navy relative p-12 md:p-16 aspect-[5/6] flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 molecular-grid opacity-30" />
              {/* Quote mark */}
              <div
                className="absolute top-6 left-8 font-serif leading-none select-none pointer-events-none"
                style={{
                  fontSize: "180px",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(106,191,123,0.35)",
                }}
              >
                "
              </div>

              {/* Big outline 왜 */}
              <div className="relative mt-auto">
                <div
                  className="font-korean font-light leading-[0.85] select-none"
                  style={{
                    fontSize: "clamp(160px, 28vw, 320px)",
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(232,230,223,0.85)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  왜
                </div>
                <div
                  className="font-korean font-light text-foreground leading-[0.9] mt-2"
                  style={{
                    fontSize: "clamp(48px, 7vw, 88px)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  없었을까.
                </div>
              </div>

              {/* Closing quote */}
              <div
                className="absolute bottom-6 right-8 font-serif leading-none select-none pointer-events-none rotate-180"
                style={{
                  fontSize: "180px",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(106,191,123,0.35)",
                }}
              >
                "
              </div>
            </div>
          </div>

          {/* RIGHT: Body + timeline */}
          <div className="md:col-span-5 space-y-12">
            <div className="space-y-7 text-lg leading-[1.85] text-text-secondary font-korean">
              {PARAGRAPHS.map((p, i) => (
                <StaggeredText
                  key={i}
                  text={p}
                  delay={i * 200}
                  className={i === 1 ? "text-foreground" : ""}
                />
              ))}
              <StaggeredText
                text={CLOSING}
                delay={650}
                className="text-lime text-xl"
              />
            </div>

            {/* Timeline */}
            <div className="border-t border-border pt-10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-8">
                OUR PATH · 다섯 걸음
              </div>
              <ol className="relative space-y-6">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-lime via-border to-border" />
                {TIMELINE.map((t, i) => {
                  const Icon = t.icon;
                  const active = i < 4;
                  return (
                    <li key={i} className="relative flex items-center gap-4 pl-0">
                      <div
                        className={`relative z-10 w-8 h-8 flex items-center justify-center border bg-background ${
                          active ? "border-lime text-lime" : "border-border text-text-secondary"
                        }`}
                      >
                        <Icon size={14} strokeWidth={1.6} />
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-korean text-base text-foreground">{t.label}</span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                          {t.en}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>

        {/* Founder cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-24">
          {[
            { name: "공동창업자 A", spec: "유기화학 합성 전공", focus: "Organic Synthesis" },
            { name: "공동창업자 B", spec: "화장품·의약품 합성 연구", focus: "Cosmetic & Pharma Synthesis" },
          ].map((f, i) => (
            <div
              key={i}
              className="border border-border p-8 bg-surface/40 hover:border-lime/40 hover:bg-surface transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-lime">
                  CO-FOUNDER 0{i + 1}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 border border-border group-hover:border-lime/40 transition">
                  <GraduationCap size={14} strokeWidth={1.6} className="text-lime" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                    KU CHEM
                  </span>
                </div>
              </div>
              <div className="font-serif text-3xl text-foreground mb-3">{f.name}</div>
              <div className="space-y-1.5 border-t border-border pt-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary w-16 shrink-0">DEGREE</span>
                  <span className="text-sm text-foreground">고려대학교 화학과 박사 (Ph.D.)</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary w-16 shrink-0">FIELD</span>
                  <span className="text-sm text-foreground">{f.spec}</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary w-16 shrink-0">FOCUS</span>
                  <span className="font-mono text-xs text-text-secondary">{f.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
