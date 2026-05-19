import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download, FileText, FlaskConical, ShieldCheck, Target,
  Sparkles, Atom, ChevronDown, ArrowRight, ArrowLeft, Check,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";

export const Route = createFileRoute("/ingredients/pp4")({
  head: () => ({
    meta: [
      { title: "Palmitoyl Pentapeptide-4 (PP-4) · withbiochem" },
      { name: "description", content: "팔미토일펜타펩타이드-4 (Matrixyl®) 기술 데이터시트. 콜라겐 합성 촉진, 순도 95%+, LPPS 합성." },
      { property: "og:title", content: "Palmitoyl Pentapeptide-4 — withbiochem" },
      { property: "og:description", content: "Anti-aging core peptide. LPPS synthesized. 95%+ purity." },
    ],
    links: [{ rel: "canonical", href: "/ingredients/pp4" }],
  }),
  component: PP4Page,
});

const SPECS = [
  ["INCI", "PALMITOYL PENTAPEPTIDE-4"],
  ["CAS No.", "214047-00-4"],
  ["분자식", "C₃₉H₇₅N₇O₉"],
  ["분자량", "798.07 g/mol"],
  ["순도 (HPLC)", "≥ 95.0%"],
  ["외관", "White to off-white powder"],
  ["용해도", "Water-soluble (with carrier)"],
  ["MOQ", "50 g"],
  ["납기", "3~5 business days"],
  ["저장조건", "−20°C, sealed, away from light"],
];

const MECHANISM = [
  {
    icon: Target,
    title: "ECM 신호 모방",
    body: "Pal-KTTKS 시퀀스가 콜라겐 분해 시 발생하는 fragment를 모방하여 진피 섬유아세포에 신호 전달.",
  },
  {
    icon: Sparkles,
    title: "콜라겐 합성 자극",
    body: "Type I·III·IV 콜라겐 및 fibronectin 생합성을 유의미하게 증가시킴.",
  },
  {
    icon: ShieldCheck,
    title: "주름 가시화 감소",
    body: "팔미토일 부착으로 지질층 침투력 강화 — 표피 통과율 향상.",
  },
];

const CLINICAL = [
  {
    metric: "+117%",
    label: "Collagen I synthesis",
    note: "in vitro · 3T3 fibroblast assay",
  },
  {
    metric: "−45%",
    label: "Wrinkle depth",
    note: "12-week clinical, n=23",
  },
  {
    metric: "+27%",
    label: "Skin density",
    note: "Ultrasound assessment, 8 weeks",
  },
];

const SAFETY = [
  {
    q: "사용 권장 농도",
    a: "최종 처방 기준 3~8 ppm (0.0003~0.0008%). 일반 화장품에서는 2~5% 원료 농도(carrier 포함)로 배합 권장.",
  },
  {
    q: "안정성 (pH·온도)",
    a: "pH 4.0~7.0 범위에서 안정. 40°C 이상 장기 노출 시 분해 가능. 항산화제(Vit E, ferulic acid)와 병용 권장.",
  },
  {
    q: "병용 금기",
    a: "강산성(pH<3) 처방, 고농도 알코올(>30%) 베이스 회피. 비타민 C 고농도 처방 시 분리 캡슐화 권장.",
  },
  {
    q: "알러지·자극 데이터",
    a: "HRIPT (Human Repeat Insult Patch Test) 통과. 50명 패널 기준 자극 사례 0건. 전체 보고서 요청 시 제공.",
  },
  {
    q: "규제 현황",
    a: "EU CosIng 등재 / KFDA 화장품 원료 사용 가능 / FDA cosmetic ingredient (no restriction).",
  },
];

const DOCS = [
  { name: "Certificate of Analysis", code: "CoA-PP4-2024", size: "1.2 MB", icon: FileText },
  { name: "Safety Data Sheet", code: "SDS-PP4-EN", size: "850 KB", icon: ShieldCheck },
  { name: "Technical Data Sheet", code: "TDS-PP4-EN", size: "640 KB", icon: FlaskConical },
];

const RELATED = [
  { code: "PT-1", name: "팔미토일트리펩타이드-1", en: "Palmitoyl Tripeptide-1", accent: "#3a7abf" },
  { code: "PT-5", name: "팔미토일트리펩타이드-5", en: "Palmitoyl Tripeptide-5", accent: "#9a7d3a" },
];

function MoleculeViz() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6abf7b" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6abf7b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="120" r="120" fill="url(#glow)" />
      {/* Chain backbone */}
      {[
        [40, 180], [80, 140], [120, 170], [160, 130], [200, 160],
        [240, 110], [280, 150], [320, 100], [360, 140],
      ].map((p, i, arr) => (
        <g key={i}>
          {i < arr.length - 1 && (
            <line x1={p[0]} y1={p[1]} x2={arr[i + 1][0]} y2={arr[i + 1][1]} stroke="#6abf7b" strokeWidth="1" opacity="0.6" />
          )}
          <circle cx={p[0]} cy={p[1]} r={i % 2 === 0 ? 5 : 3.5} fill="#6abf7b" opacity={i % 2 === 0 ? 0.95 : 0.6} />
        </g>
      ))}
      {/* Side groups */}
      <line x1="120" y1="170" x2="120" y2="200" stroke="#4a9e65" strokeWidth="0.8" opacity="0.5" />
      <circle cx="120" cy="205" r="3" fill="#9a7d3a" />
      <line x1="240" y1="110" x2="240" y2="80" stroke="#4a9e65" strokeWidth="0.8" opacity="0.5" />
      <circle cx="240" cy="75" r="3" fill="#9a7d3a" />
      <line x1="320" y1="100" x2="320" y2="70" stroke="#4a9e65" strokeWidth="0.8" opacity="0.5" />
      <circle cx="320" cy="65" r="3" fill="#e8e6df" opacity="0.7" />
    </svg>
  );
}

function PP4Page() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 molecular-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-text-secondary hover-lime mb-10"
          >
            <ArrowLeft size={12} /> 원료 라인업으로
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-lime border border-lime/40 px-2.5 py-1">
                  ANTI-AGING CORE
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                  PP-4
                </span>
              </div>
              <div className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-text-secondary mb-4">
                INCI · PALMITOYL PENTAPEPTIDE-4
              </div>
              <h1 className="font-serif font-light text-5xl md:text-7xl text-foreground leading-tight tracking-tight mb-6">
                팔미토일<br />펜타펩타이드<span className="text-lime">-4</span>
              </h1>
              <p className="font-mono text-xs uppercase tracking-widest text-text-secondary/80 mb-8">
                Matrixyl® · Pal-KTTKS · Lipopentapeptide
              </p>
              <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
                지방산-펩타이드 conjugate. 콜라겐 I·III·IV 합성을 자극하여 진피 ECM 재생을 가속하는 안티에이징 코어 펩타이드.
              </p>

              <div className="flex flex-wrap gap-3 mt-10">
                <a href="#contact-pp4" className="px-7 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-lime transition">
                  샘플 신청 →
                </a>
                <a href="#downloads" className="px-7 py-3 border border-border text-foreground text-sm font-medium hover:border-lime hover:text-lime transition inline-flex items-center gap-2">
                  <Download size={14} /> 데이터시트
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface border border-border aspect-[5/4] flex items-center justify-center relative overflow-hidden">
                <MoleculeViz />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                  STRUCTURE · Pal-Lys-Thr-Thr-Lys-Ser
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-lime">
                  C₃₉H₇₅N₇O₉
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content + sticky CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-24">
          {/* SPECS */}
          <section>
            <div className="label-mono mb-4">01 / SPECIFICATIONS</div>
            <h2 className="font-serif text-4xl text-foreground mb-10">기술 사양</h2>
            <div className="border border-border">
              {SPECS.map(([k, v], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 ${i < SPECS.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="col-span-1 px-5 py-4 bg-surface/40 font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                    {k}
                  </div>
                  <div className="col-span-2 px-5 py-4 text-sm text-foreground font-mono">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MECHANISM */}
          <section>
            <div className="label-mono mb-4">02 / MECHANISM</div>
            <h2 className="font-serif text-4xl text-foreground mb-10">작용 기전</h2>
            <div className="space-y-4">
              {MECHANISM.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="flex gap-6 border border-border p-6 bg-surface/40 hover:border-lime/40 transition">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 border border-lime/40 flex items-center justify-center text-lime">
                        <Icon size={18} strokeWidth={1.6} />
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mt-3">
                        STEP {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-foreground mb-2">{m.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{m.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CLINICAL */}
          <section>
            <div className="label-mono mb-4">03 / CLINICAL DATA</div>
            <h2 className="font-serif text-4xl text-foreground mb-10">임상·실험 데이터</h2>
            <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
              {CLINICAL.map((c, i) => (
                <div key={i} className="bg-surface p-7">
                  <div className="font-serif text-5xl text-lime mb-3">{c.metric}</div>
                  <div className="text-sm text-foreground font-medium">{c.label}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mt-2">
                    {c.note}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs font-mono text-text-secondary leading-relaxed">
              Source · Lintner K. <em>Promoting production in the extracellular matrix without compromising barrier.</em>
              Cutis 70(6S), 13–16 (2002). 추가 시험 데이터 요청 시 별도 보고서 제공.
            </p>
          </section>

          {/* SAFETY */}
          <section>
            <div className="label-mono mb-4">04 / SAFETY PROFILE</div>
            <h2 className="font-serif text-4xl text-foreground mb-10">안전성·사용 가이드</h2>
            <div className="border border-border divide-y divide-border">
              {SAFETY.map((s, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface/60 transition"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-lime tracking-widest">
                          Q{String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-foreground font-medium">{s.q}</span>
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-text-secondary transition-transform ${isOpen ? "rotate-180 text-lime" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pl-[88px] text-sm text-text-secondary leading-relaxed bg-surface/30">
                        {s.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* DOWNLOADS */}
          <section id="downloads">
            <div className="label-mono mb-4">05 / DOCUMENTS</div>
            <h2 className="font-serif text-4xl text-foreground mb-10">기술 문서 다운로드</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {DOCS.map((d, i) => {
                const Icon = d.icon;
                return (
                  <button
                    key={i}
                    className="border border-border p-6 text-left bg-surface/40 hover:border-lime hover:bg-surface transition group"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <Icon size={22} strokeWidth={1.4} className="text-lime" />
                      <Download size={14} className="text-text-secondary group-hover:text-lime transition" />
                    </div>
                    <div className="font-serif text-lg text-foreground">{d.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mt-3 flex justify-between">
                      <span>{d.code}</span>
                      <span>PDF · {d.size}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* RELATED */}
          <section>
            <div className="label-mono mb-4">06 / RELATED</div>
            <h2 className="font-serif text-4xl text-foreground mb-10">함께 보는 원료</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {RELATED.map((r) => (
                <Link
                  key={r.code}
                  to="/"
                  className="block border border-border bg-surface/40 hover:bg-surface hover:border-lime/40 transition overflow-hidden"
                >
                  <div className="h-[3px] w-full" style={{ backgroundColor: r.accent }} />
                  <div className="p-7">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-3">
                      {r.code}
                    </div>
                    <div className="font-serif text-2xl text-foreground mb-1">{r.name}</div>
                    <div className="text-xs text-text-secondary italic mb-6">{r.en}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-lime inline-flex items-center gap-2">
                      VIEW DETAIL <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* STICKY CTA SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 space-y-4" id="contact-pp4">
            <div className="border border-border bg-surface p-7">
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-3">
                REQUEST SAMPLE
              </div>
              <div className="font-serif text-2xl text-foreground mb-2">
                이 원료 샘플 신청
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                OEM·ODM 업체 대상 PP-4 1~2g 무상 샘플 발송. 신청 후 영업일 24시간 내 회신.
              </p>
              <ul className="space-y-3 mb-7">
                {["무상 샘플 1~2g", "CoA·SDS·TDS 즉시 제공", "박사 직접 처방 컨설팅"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={14} strokeWidth={2.5} className="text-lime shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                to="/"
                hash="contact"
                className="block w-full py-3.5 bg-primary text-primary-foreground text-sm font-medium text-center hover:bg-lime transition"
              >
                샘플 신청하기 →
              </Link>
            </div>

            <div className="border border-border bg-navy/30 p-7">
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-3">
                QUICK SPECS
              </div>
              <dl className="space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <dt className="text-text-secondary">PURITY</dt>
                  <dd className="text-lime">≥ 95.0%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">MOQ</dt>
                  <dd className="text-foreground">50 g</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">LEAD TIME</dt>
                  <dd className="text-foreground">3~5 days</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">SYNTHESIS</dt>
                  <dd className="text-foreground">LPPS</dd>
                </div>
              </dl>
            </div>

            <div className="border border-border bg-surface/40 p-7 flex items-start gap-4">
              <Atom size={18} className="text-lime shrink-0 mt-1" />
              <p className="text-xs text-text-secondary leading-relaxed">
                LPPS(액상) 합성 공정으로 배치 일관성이 우수합니다. 모든 배치 CoA 첨부.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
