import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Sections";
import { projects, experiences, education, profile } from "./data";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Projects"
          intro="Academic and personal work spanning bioinformatics, machine learning, and applied Python tooling."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="card-lift flex flex-col rounded-lg border border-border bg-card p-7"
            >
              <p className="eyebrow">{p.category}</p>
              <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border px-2.5 py-1 text-[0.78rem] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3 pt-5 border-t border-border">
                <a
                  href={p.github ?? "#"}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-heading"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                {p.demo !== undefined && (
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-heading"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Experience"
          intro="Roles and internships will be listed here as they are completed."
        />
        <ol className="mt-12 border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <Reveal
              key={i}
              as="li"
              delay={i * 70}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full border border-sage bg-background sm:-left-[2.4rem]" />
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{exp.role}</h3>
              <p className="text-sm text-sage">{exp.organization}</p>
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
    <section id="education" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Education" title="Education" />
        <Reveal className="mt-12 grid gap-8 rounded-lg border border-border bg-card p-7 sm:p-9 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-sm text-sage">{education.institution}</p>
            <p className="mt-4 text-sm">{education.semester}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase">
              Relevant Coursework
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {education.coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase">
              Academic Interests
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {education.academicInterests.map((c) => (
                <li key={c} className="rounded-md bg-accent px-2.5 py-1 text-[0.8rem]">
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
    <section id="contact" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's Work Together"
            intro="Have a research idea, project, internship opportunity, or collaboration in mind? I'd love to hear from you."
          />
          <Reveal className="mt-8 space-y-3" delay={80}>
            <a
              href={profile.links.github}
              className="flex items-center gap-3 text-sm transition-colors hover:text-heading"
            >
              <Github className="h-4 w-4 text-sage" /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              className="flex items-center gap-3 text-sm transition-colors hover:text-heading"
            >
              <Linkedin className="h-4 w-4 text-sage" /> LinkedIn
            </a>
            <a
              href={profile.links.email}
              className="flex items-center gap-3 text-sm transition-colors hover:text-heading"
            >
              <Mail className="h-4 w-4 text-sage" /> Email
            </a>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <form
            className="grid gap-5 rounded-lg border border-border bg-card p-7 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" placeholder="Your name" />
              <Field id="email" label="Email" type="email" placeholder="you@example.com" />
            </div>
            <Field id="subject" label="Subject" placeholder="What is this about?" />
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-heading">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me a little about your idea or opportunity."
                className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-sage-light focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage"
            >
              Send Message
            </button>
          </form>
        </Reveal>
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
      <label htmlFor={id} className="text-sm font-medium text-heading">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-sage-light focus:ring-2 focus:ring-ring/20"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-12">
      <div className="section-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold text-heading">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <a href={profile.links.github} className="transition-colors hover:text-heading">
            GitHub
          </a>
          <span className="text-border">|</span>
          <a href={profile.links.linkedin} className="transition-colors hover:text-heading">
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a href={profile.links.email} className="transition-colors hover:text-heading">
            Email
          </a>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
        © 2026 {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
