import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { aboutCards, interests, skillGroups, services, toolkit } from "./data";

export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 leading-relaxed">{intro}</p> : null}
      <span className="mt-6 block h-px w-16 bg-sage-light" />
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="About Me"
          intro="I'm a Bioinformatics student focused on using computational approaches to analyze biological data and solve real-world problems. My work sits between molecular biology and software — writing Python to process sequences and datasets, and applying machine learning where it genuinely helps interpretation."
        />

        <Reveal className="mt-8 flex flex-wrap gap-2" delay={80}>
          {interests.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 70}
              className="card-lift rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-base font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Skills"
          intro="Tools and methods I work with across programming, bioinformatics, and machine learning."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 60}
              className="card-lift rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold tracking-wide text-heading uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-accent px-2.5 py-1 text-[0.8rem] text-accent-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Toolkit() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Toolkit"
          title="My Bioinformatics Toolkit"
          intro="Software and platforms I use for sequence, variant, and structural work."
        />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-7">
          {toolkit.map((tool) => (
            <div
              key={tool}
              className="flex items-center justify-center bg-card px-3 py-6 text-sm font-medium text-heading transition-colors hover:bg-accent"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatIDo() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Services" title="What I Do" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="card-lift rounded-lg border border-border bg-card p-6"
            >
              <span className="text-xs font-semibold text-sage">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
