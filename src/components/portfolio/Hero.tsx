import heroImage from "@/assets/hero-helix.jpg";

export function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="section-shell grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal" data-visible="true">
          <p className="eyebrow">Bioinformatics • AI/ML • Computational Biology</p>
          <h1 className="mt-5 text-[2.1rem] leading-[1.15] font-semibold sm:text-5xl sm:leading-[1.1]">
            Turning Biological Data Into Meaningful Computational Insights.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed">
            I&apos;m Mehak Zahra, a Bioinformatics student passionate about computational
            biology, biological data analysis, Python, artificial intelligence, and machine
            learning. I build practical solutions that connect biology with technology.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-medium text-heading transition-colors hover:border-sage-light hover:bg-accent"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <img
              src={heroImage}
              width={1024}
              height={1152}
              alt="Abstract line illustration of a DNA double helix connected to a molecular data network"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
