import heroImage from "@/assets/hero-helix.jpg";

export function Hero() {
  return (
    <section id="home" className="grid lg:grid-cols-2">
      <div className="relative min-h-[20rem] lg:min-h-[34rem]">
        <img
          src={heroImage}
          width={1024}
          height={1152}
          alt="Abstract line illustration of a DNA double helix connected to a molecular data network"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center bg-mint px-8 py-16 sm:px-14 lg:px-20">
        <div className="max-w-lg">
          <h1 className="font-display text-3xl font-bold text-coral sm:text-4xl">
            Hi! I&apos;m Mehak Zahra.
          </h1>
          <p className="mt-6 font-display text-lg leading-relaxed text-brand-green">
            I&apos;m a Bioinformatics student with a passion for computational biology,
            biological data analysis, and Python — turning biological data into
            meaningful insights.
          </p>
          <p className="mt-5 font-display text-lg leading-relaxed text-brand-green">
            I&apos;m also exploring artificial intelligence &amp; machine learning.{" "}
            <em>(Yeah, I&apos;ve got a lot of passions.)</em>
          </p>
          <a
            href="#projects"
            className="mt-9 inline-flex h-11 items-center justify-center bg-coral px-7 font-display text-[0.7rem] font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-colors hover:bg-coral-dark"
          >
            Tell me more!
          </a>
        </div>
      </div>
    </section>
  );
}
