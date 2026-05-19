import { Logo, MoleculeMark } from "./brand";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MoleculeMark size={36} />
              <Logo className="text-3xl" />
            </div>
            <p className="font-korean text-text-secondary text-lg leading-relaxed max-w-md">
              합성의 힘으로,<br />바이오화학에 새로운 기준을 만듭니다.
            </p>
            <p className="font-mono text-xs text-text-secondary/60 mt-4 tracking-wider">
              Synthesized Here. Trusted Everywhere.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-5">EXPLORE</div>
              <ul className="space-y-3 text-sm">
                <li><a href="#products" className="text-text-secondary hover-lime">원료 라이브러리</a></li>
                <li><a href="#technology" className="text-text-secondary hover-lime">기술 소개</a></li>
                <li><a href="#origin" className="text-text-secondary hover-lime">회사 소개</a></li>
                <li><a href="#contact" className="text-text-secondary hover-lime">샘플 신청</a></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-lime mb-5">CONTACT</div>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:contact@withbiochem.com" className="text-text-secondary hover-lime">contact@withbiochem.com</a></li>
                <li className="text-text-secondary">서울, 대한민국</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-mono text-xs text-text-secondary">© 2025 withbiochem. All rights reserved.</p>
          <p className="font-mono text-xs text-text-secondary">위드바이오켐 · LPPS Peptide Synthesis</p>
        </div>
      </div>
    </footer>
  );
}
