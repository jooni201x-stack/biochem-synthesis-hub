import { useState } from "react";
import { Check, Clock, FlaskConical, Send, CheckCircle2 } from "lucide-react";

const INTERESTS = [
  { id: "PP-4", label: "PP-4", sub: "Palmitoyl Pentapeptide-4" },
  { id: "PT-1", label: "PT-1", sub: "Palmitoyl Tripeptide-1" },
  { id: "PT-5", label: "PT-5", sub: "Palmitoyl Tripeptide-5" },
  { id: "GHK-Cu", label: "GHK-Cu", sub: "Copper Tripeptide-1" },
  { id: "ALL", label: "전체", sub: "All Peptides" },
];

const BENEFITS = [
  { icon: Check, title: "무상 샘플 발송", desc: "OEM·ODM 업체 대상 1~2g 무상 제공" },
  { icon: Clock, title: "24시간 내 응답", desc: "영업일 기준 24시간 이내 회신" },
  { icon: FlaskConical, title: "처방 컨설팅 포함", desc: "박사가 직접 포뮬레이션 지원" },
];

export function Contact() {
  const [checked, setChecked] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (v: string) =>
    setChecked((c) => (c.includes(v) ? c.filter((x) => x !== v) : [...c, v]));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        <div className="label-mono mb-8">GET STARTED · 시작하기</div>
        <h2 className="text-4xl md:text-6xl text-foreground max-w-3xl leading-tight">
          첫 샘플은 <span className="text-lime">무료</span>입니다.
        </h2>
        <p className="mt-6 text-text-secondary max-w-2xl leading-relaxed">
          OEM·ODM 업체 대상 1~2g 무상 샘플 제공. 샘플 수령 후 기술 미팅 연결.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-20 items-start">
          {/* LEFT: Form */}
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-br from-lime/20 via-transparent to-primary/10 pointer-events-none" />
            <form onSubmit={onSubmit} className="relative bg-surface border border-border p-8 md:p-12">
              {submitted ? (
                <div className="py-20 text-center animate-fade-up">
                  <CheckCircle2 size={56} strokeWidth={1.2} className="text-lime mx-auto mb-6" />
                  <div className="font-serif text-3xl text-foreground mb-4">샘플 신청이 완료되었습니다.</div>
                  <div className="text-text-secondary leading-relaxed">
                    24시간 내 연락드리겠습니다.
                  </div>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setChecked([]); }}
                    className="mt-10 font-mono text-xs uppercase tracking-widest text-lime border-b border-lime/40 pb-1 hover:border-lime"
                  >
                    새 문의 작성 →
                  </button>
                </div>
              ) : (
                <div className="space-y-7">
                  <Field label="회사명 *" name="company" required />
                  <Field label="담당자 이름 *" name="name" required />
                  <Field label="이메일 *" name="email" type="email" required />
                  <Field label="연락처" name="phone" />

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-4 block">
                      관심 원료 (복수 선택)
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {INTERESTS.map((i) => {
                        const on = checked.includes(i.id);
                        return (
                          <button
                            type="button"
                            key={i.id}
                            onClick={() => toggle(i.id)}
                            className={`group flex items-center gap-3 p-3 border text-left transition-all ${
                              on
                                ? "border-lime bg-lime/10"
                                : "border-border hover:border-lime/40 hover:bg-background/50"
                            }`}
                          >
                            <span
                              className={`w-5 h-5 border flex items-center justify-center shrink-0 transition-all ${
                                on ? "border-lime bg-lime" : "border-border bg-background"
                              }`}
                            >
                              {on && <Check size={13} strokeWidth={3} className="text-background" />}
                            </span>
                            <span className="flex flex-col">
                              <span className={`font-mono text-xs ${on ? "text-lime" : "text-foreground"}`}>
                                {i.label}
                              </span>
                              <span className="font-mono text-[9px] uppercase tracking-widest text-text-secondary/70">
                                {i.sub}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-3 block">
                      문의 내용
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/20 focus:shadow-[0_0_0_4px_rgba(106,191,123,0.08)] transition resize-none"
                      placeholder="원료 용도, 사용 분야, 예상 수량 등을 알려주세요."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-medium hover:bg-lime transition-colors inline-flex items-center justify-center gap-2 group"
                  >
                    샘플 신청하기
                    <Send size={15} strokeWidth={1.8} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary/60 text-center">
                    No spam · 입력 정보는 샘플 발송 외 사용되지 않습니다.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* RIGHT: Info */}
          <div className="space-y-6 lg:pl-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-5 border border-border p-6 bg-surface/40 hover:border-lime/40 hover:bg-surface transition-all group"
                >
                  <div className="w-11 h-11 border border-lime/40 flex items-center justify-center text-lime shrink-0 group-hover:bg-lime/10 transition">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <div>
                    <div className="font-serif text-xl text-foreground mb-1.5">{b.title}</div>
                    <div className="text-sm text-text-secondary leading-relaxed">{b.desc}</div>
                  </div>
                </div>
              );
            })}

            <div className="border-l-2 border-lime pl-6 py-2 mt-10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-3">
                FROM THE FOUNDERS
              </div>
              <blockquote className="font-korean text-xl md:text-2xl text-foreground leading-snug">
                "합성한 사람이 <span className="text-lime">직접</span> 처방을 도와드립니다."
              </blockquote>
            </div>

            <div className="border border-border p-6 bg-navy/30 mt-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-3">DIRECT</div>
              <a href="mailto:contact@withbiochem.com" className="text-foreground hover-lime text-base font-mono">
                contact@withbiochem.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-3 block">
        {label}
      </label>
      <input
        type={type} name={name} required={required}
        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/20 focus:shadow-[0_0_0_4px_rgba(106,191,123,0.08)] transition"
      />
    </div>
  );
}
