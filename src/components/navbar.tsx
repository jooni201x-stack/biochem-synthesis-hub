import { useEffect, useState } from "react";
import { Logo } from "./brand";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#technology", label: "기술소개" },
  { href: "#products", label: "원료 라인업" },
  { href: "#origin", label: "회사소개" },
  { href: "#contact", label: "샘플신청" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <Logo />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-text-secondary hover-lime transition">
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-lime transition-colors"
          >
            샘플 신청
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 flex flex-col gap-5">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-text-secondary">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center">
            샘플 신청
          </a>
        </div>
      )}
    </nav>
  );
}
