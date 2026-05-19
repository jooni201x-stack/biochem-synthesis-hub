import { useState } from "react";

const INTERESTS = ["PP-4", "PT-1", "PT-5", "GHK-Cu", "전체"];

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

        <div className="grid lg:grid-cols-3 gap-12 mt-20">
          <form onSubmit={onSubmit} className="lg:col-span-2 space-y-7 bg-surface p-8 md:p-12 border border-border">
            {submitted ? (
              <div className="py-20 text-center">
                <div className="font-serif text-3xl text-lime mb-3">접수되었습니다.</div>
                <div className="text-text-secondary">영업일 기준 24시간 이내 회신드립니다.</div>
              </div>
            ) : (
              <>
                <Field label="회사명 *" name="company" required />
                <Field label="담당자 이름 *" name="name" required />
                <Field label="이메일 *" name="email" type="email" required />
                <Field label="연락처" name="phone" />

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-3 block">
                    관심 원료
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map((i) => (
                      <button
                        type="button" key={i} onClick={() => toggle(i)}
                        className={`px-4 py-2 border text-xs font-mono uppercase tracking-wider transition-all ${
                          checked.includes(i)
                            ? "border-lime text-lime bg-lime/10"
                            : "border-border text-text-secondary hover:border-lime/50"
                        }`}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-3 block">
                    문의 내용
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-lime focus:outline-none transition"
                  />
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-medium hover:bg-lime transition-colors">
                  샘플 신청하기 →
                </button>
              </>
            )}
          </form>

          <div className="space-y-8">
            <div className="border border-border p-8 bg-surface/40">
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-4">CONTACT</div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-text-secondary mb-1">Email</div>
                  <a href="mailto:contact@withbiochem.com" className="text-foreground hover-lime">
                    contact@withbiochem.com
                  </a>
                </div>
                <div>
                  <div className="text-xs text-text-secondary mb-1">Response</div>
                  <div className="text-foreground text-sm">영업일 기준 24시간 이내</div>
                </div>
              </div>
            </div>
            <div className="border border-border p-8 bg-navy/40">
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-4">SUPPORT</div>
              <p className="text-sm text-foreground/90 leading-relaxed">
                CoA · SDS · 안정성 데이터 · 처방 가이드까지<br />
                기술 문서 일체를 24시간 내 제공합니다.
              </p>
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
        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-lime focus:outline-none transition"
      />
    </div>
  );
}
