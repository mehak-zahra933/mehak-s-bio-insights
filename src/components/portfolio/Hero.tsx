import heroImage from "@/assets/hero-helix.jpg";

export function Hero() {
  return (
    <section id="home" className="px-4 pt-5 sm:px-6">
      <div className="relative mx-auto w-full max-w-[76rem] overflow-hidden rounded-2xl bg-ink">
        <img
          src={heroImage}
          width={1024}
          height={1152}
          alt="Abstract line illustration of a DNA double helix connected to a molecular data network"
          className="h-[26rem] w-full object-cover opacity-70 sm:h-[32rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/40" />

        <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10">
          <div className="flex items-start justify-between gap-8">
            <p className="max-w-[9rem] text-[0.6rem] leading-relaxed font-medium tracking-[0.16em] text-cream/75 uppercase">
              Available for
              <br />
              new projects
            </p>
            <p className="max-w-[9rem] text-right font-display text-lg leading-tight font-bold text-cream uppercase sm:text-xl">
              Bioinformatics
              <br />
              AI / ML
            </p>
          </div>

          <h1 className="font-display text-4xl leading-[1.05] font-black text-cream sm:text-6xl">
            Hi I Am
            <br />
            Mehak Zahra
          </h1>
        </div>
      </div>
    </section>
  );
}
