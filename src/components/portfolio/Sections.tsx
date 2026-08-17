import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { aboutCards, interests, skillGroups, services, toolkit } from "./data";
import helixAsset from "@/assets/image-12.png.asset.json";
import toolkitAsset from "@/assets/image-9.png.asset.json";
import aboutAsset from "@/assets/image-11.png.asset.json";


export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <Reveal className="max-w-2xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-2 font-display text-3xl font-black tracking-tight uppercase sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-sm leading-relaxed tracking-wide uppercase">{intro}</p>
      ) : null}
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-[76rem]">
        <SectionHeader title="About Me" />
        <Reveal className="mt-5 max-w-3xl text-sm leading-[1.9] tracking-wide uppercase">
          I&apos;m a <span className="font-semibold text-orange">Bioinformatics</span>{" "}
          student based in Pakistan, with a passion for computational biology,
          biological data analysis and Python. I turn complex biological data into
          meaningful insights, and I&apos;m also exploring artificial intelligence and
          machine learning.
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-2" delay={80}>
          {interests.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-3 py-1.5 text-[0.65rem] tracking-[0.14em] uppercase"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-5 rounded-2xl border border-border bg-card p-7 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 70}>
              <h3 className="font-display text-lg font-bold text-orange">
                0{i + 1}
              </h3>
              <p className="mt-2 text-sm font-semibold tracking-wide text-ink uppercase">
                {card.title}
              </p>
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
    <section id="skills" className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-[76rem]">
        <SectionHeader title="Skills" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 60}
              className="card-lift rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold tracking-[0.14em] text-ink uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-cream-deep px-2.5 py-1 text-[0.7rem] tracking-wide uppercase"
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
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-[76rem]">
        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-center p-8 sm:p-12"
          style={{ backgroundImage: `url(${toolkitAsset.url})` }}
        >
          <div className="absolute inset-0 bg-cream/92" />
          <div className="relative">
            <SectionHeader title="Toolkit" />
            <div className="mt-10 flex flex-wrap gap-2">
              {toolkit.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-card px-4 py-2 text-[0.68rem] font-medium tracking-[0.14em] text-ink uppercase transition-colors hover:bg-orange"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatIDo() {
  return (
    <section className="px-4 py-8 sm:px-6">
      <div
        className="relative mx-auto w-full max-w-[76rem] overflow-hidden rounded-2xl bg-ink bg-cover bg-center px-6 py-12 sm:px-12"
        style={{ backgroundImage: `url(${helixAsset.url})` }}
      >
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative">
        <h2 className="text-center font-display text-3xl font-black tracking-tight text-cream uppercase sm:text-4xl">
          Services
        </h2>

        <ul className="mx-auto mt-8 max-w-3xl">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 60}
              className="group flex items-center gap-5 border-b border-cream/15 px-4 py-4 transition-colors last:border-0 hover:bg-cream/5"
            >
              <span className="text-xs font-semibold text-orange">0{i + 1}</span>
              <div>
                <p className="text-base font-semibold tracking-[0.06em] text-cream uppercase group-hover:text-orange">
                  {s.title}
                </p>
                <p className="mt-1 text-sm text-cream/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        </div>
      </div>

    </section>
  );
}
