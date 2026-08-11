import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Skills, Toolkit, WhatIDo } from "@/components/portfolio/Sections";
import {
  Projects,
  Experience,
  Education,
  Contact,
  Footer,
} from "@/components/portfolio/Content";

const title = "Mehak Zahra — Bioinformatics & AI/ML Portfolio";
const description =
  "Portfolio of Mehak Zahra, a Bioinformatics student working in computational biology, biological data analysis, Python, and machine learning.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhatIDo />
        <Toolkit />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
