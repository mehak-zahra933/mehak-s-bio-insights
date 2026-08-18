import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Sections";
import { projects, experiences, education, profile } from "./data";
import genomeAsset from "@/assets/image-8.png.asset.json";
import eduAsset from "@/assets/image-10.png.asset.json";
import projectsBg from "@/assets/projects-bg.png";


export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="px-4 py-16 sm:px-6">
      <div
        className="relative mx-auto w-full max-w-[76rem] overflow-hidden rounded-3xl border border-border bg-cover bg-center p-8 sm:p-12 shadow-sm"
        style={{ backgroundImage: `url(${projectsBg})` }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
        <div className="relative">
          <div className="flex items-start justify-between gap-6">
            <h2 className="font-display text-3xl font-black tracking-tight uppercase sm:text-5xl text-heading">
              Projects
            </h2>
            <a
              href="#contact"
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-card border border-border text-center text-[0.55rem] font-semibold tracking-[0.12em] text-ink uppercase shadow-xs transition-colors hover:bg-orange hover:text-white hover:border-orange"
            >
              View
              <br />
              More
            </a>
          </div>

          {featured ? (
            <Reveal className="mt-8 grid gap-8 border-t border-border pt-8 lg:grid-cols-[1.1fr_1fr]">
              <div
                className="relative min-h-[16rem] overflow-hidden rounded-2xl bg-ink bg-cover bg-center p-8 shadow-sm border border-border/60"
                style={{ backgroundImage: `url(${projectsBg})` }}
              >
                <div className="absolute inset-0 bg-ink/75 backdrop-blur-[1px]" />
                <p className="relative font-display text-2xl font-black text-cream uppercase">
                  {featured.category}
                </p>
                <span className="absolute right-6 bottom-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-md transition-transform hover:scale-105">
                  <ArrowUpRight className="h-6 w-6" />
                </span>
              </div>
              <div className="rounded-2xl border border-border/80 bg-card/95 backdrop-blur-sm p-6 shadow-sm">
                <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  {featured.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-black uppercase text-heading">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{featured.description}</p>
                <div className="mt-6 flex flex-wrap gap-10">
                  <div>
                    <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-ink uppercase">
                      Tech
                    </p>
                    <p className="mt-1 text-sm">{featured.tech.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-ink uppercase">
                      Links
                    </p>
                    <a
                      href={featured.github ?? "#"}
                      className="mt-1 inline-flex items-center gap-2 text-sm text-ink hover:text-orange font-medium"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ) : null}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="card-lift rounded-2xl border border-border/80 bg-card/95 backdrop-blur-sm p-7 shadow-sm">
                  <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-black uppercase text-heading">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-cream-deep px-2.5 py-1 text-[0.65rem] font-medium tracking-wide uppercase text-ink/90"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5 text-sm">
                    <a
                      href={p.github ?? "#"}
                      className="inline-flex items-center gap-2 text-ink hover:text-orange font-medium"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                    {p.demo !== undefined && (
                      <a
                        href={p.demo}
                        className="inline-flex items-center gap-2 text-ink hover:text-orange font-medium"
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-[76rem]">
        <SectionHeader title="Experience" />
        <ol className="mt-10 border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <Reveal key={i} as="li" delay={i * 70} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-orange sm:-left-[2.4rem]" />
              <p className="text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                {exp.period}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold uppercase">{exp.role}</h3>
              <p className="text-sm text-orange">{exp.organization}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed">{exp.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section
      id="education"
      className="relative bg-cover bg-center px-4 py-16 sm:px-6"
      style={{ backgroundImage: `url(${eduAsset.url})` }}
    >
      <div className="absolute inset-0 bg-background/90" />
      <div className="relative mx-auto w-full max-w-[76rem]">
        <SectionHeader title="Education" />
        <Reveal className="mt-10 grid gap-8 rounded-2xl border border-border bg-card/95 p-8 backdrop-blur-sm lg:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-black uppercase">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-orange">{education.institution}</p>
            <p className="mt-4 text-sm">{education.semester}</p>
          </div>
          <div>
            <h4 className="text-[0.62rem] font-semibold tracking-[0.16em] text-ink uppercase">
              Relevant Coursework
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {education.coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.62rem] font-semibold tracking-[0.16em] text-ink uppercase">
              Academic Interests
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {education.academicInterests.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-cream-deep px-2.5 py-1 text-[0.68rem] uppercase"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-4 py-8 sm:px-6">
      <div
        className="relative mx-auto w-full max-w-[76rem] overflow-hidden rounded-2xl bg-ink bg-cover bg-center px-7 py-12 sm:px-12"
        style={{ backgroundImage: `url(${genomeAsset.url})` }}
      >
        <div className="absolute inset-0 bg-ink/88" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <h2 className="max-w-xl font-display text-3xl leading-tight font-black text-cream uppercase sm:text-5xl">
              Let&apos;s Start Project Together?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/65">
              Have a research idea, project, internship opportunity or collaboration in
              mind? I&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-8 text-sm text-cream">
              <a href={profile.links.email} className="hover:text-orange">
                Email me
              </a>
              <a
                href={profile.links.linkedin}
                className="border-b border-orange pb-1 text-orange"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form
            className="grid gap-4 self-start rounded-2xl bg-cream/5 p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field id="name" label="Name" placeholder="Your name" />
            <Field id="email" label="Email" type="email" placeholder="you@example.com" />
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-[0.6rem] font-semibold tracking-[0.16em] text-cream/70 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your idea"
                className="rounded-lg border border-cream/20 bg-transparent px-3 py-2.5 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-orange"
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-orange px-6 text-[0.65rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-orange-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={id}
        className="text-[0.6rem] font-semibold tracking-[0.16em] text-cream/70 uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-lg border border-cream/20 bg-transparent px-3 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-orange"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-[76rem] flex-col items-start justify-between gap-4 border-t border-border pt-6 text-[0.65rem] tracking-[0.14em] uppercase sm:flex-row sm:items-center">
        <p className="font-semibold text-ink">{profile.name}</p>
        <div className="flex flex-wrap items-center gap-6">
          <a href={profile.links.github} className="hover:text-orange">
            GitHub
          </a>
          <a href={profile.links.linkedin} className="hover:text-orange">
            LinkedIn
          </a>
          <a href={profile.links.email} className="hover:text-orange">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
