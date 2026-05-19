import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Origin } from "@/components/sections/origin";
import { Technology } from "@/components/sections/technology";
import { Products } from "@/components/sections/products";
import { WhyUs } from "@/components/sections/why-us";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "withbiochem · 위드바이오켐 — LPPS Palmitoyl Peptide Synthesis" },
      { name: "description", content: "고려대학교 화학과 박사가 직접 합성하는 팔미토일 펩타이드 4종. LPPS 액상 합성, 순도 95%+, 납기 3~5일." },
      { property: "og:title", content: "withbiochem — Synthesized Here. Trusted Everywhere." },
      { property: "og:description", content: "B2B palmitoyl peptide supplier. LPPS synthesis. 95%+ purity. Made in Korea." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Origin />
      <Technology />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
