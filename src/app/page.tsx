export default function Home() {
  const stats = [
    { label: "Focus", value: "AI / ML" },
    { label: "Class of", value: "2026" },
    { label: "Stack", value: "Full-Stack" },
    { label: "Base", value: "Laguna" },
  ];

  const signals = [
    {
      title: "Pragmatic builder",
      detail: "Balance speed and reliability with measurable outcomes.",
    },
    {
      title: "Human-first UX",
      detail: "Design flows that feel calm, fast, and intentional.",
    },
    {
      title: "Systems mindset",
      detail: "Think in architecture, resilience, and long-term maintenance.",
    },
  ];

  const projects = [
    {
      title: "Intelligent Systems Projects",
      summary: "AI tooling and machine learning solutions from coursework.",
      tags: ["Python", "Flask", "Colab"],
      metrics: "Computer Science",
    },
    {
      title: "Full-Stack Web Apps",
      summary: "Modern web portals and dashboards with responsive interfaces.",
      tags: ["Next.js", "Vue.js", "Inertia.js", "Laravel"],
      metrics: "Web Development",
    },
    {
      title: "Mobile & Database",
      summary: "Cross-platform mobile apps with scalable backend databases.",
      tags: ["Flutter", "Postgres", "Firebase"],
      metrics: "Mobile & Cloud",
    },
  ];

  const timeline = [
    {
      year: "2026",
      items: [
        {
          date: "Feb 3 - Apr 20",
          title: "Frontend Developer Intern",
          note: "Ollopa Corporation. Contributed to SocialDesk, a social media management platform.",
        },
        {
          date: "2022 - 2026",
          title: "Laguna State Polytechnic University",
          note: "BS Computer Science (Intelligent Systems). Graduating soon.",
        },
      ],
    },
    {
      year: "2022",
      items: [
        {
          date: "2016 - 2022",
          title: "Laguna College",
          note: "Highschool and Senior Highschool.",
        },
      ],
    },
    {
      year: "2016",
      items: [
        {
          date: "2008 - 2016",
          title: "Blue Danube School Inc.",
          note: "Preschool and Elementary.",
        },
      ],
    },
  ];

  const experiences = [
    {
      role: "Frontend Developer Intern",
      detail:
        "Served as a frontend developer at Ollopa Corporation (Special Projects Department) to build out SocialDesk (400-hour internship).",
    },
    {
      role: "Full-Stack Developer",
      detail:
        "Actively building responsive user journeys with Next.js, Vue, and Laravel, focusing on clarity and performance.",
    },
    {
      role: "Data & AI Enthusiast",
      detail:
        "Studying machine learning architectures and data-driven systems leveraging Python, Flask, and robust databases.",
    },
  ];

  return (
    <div className="bg-grid">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-16 pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <span className="chip">Software Engineer</span>
            <div className="space-y-4">
              <h1 className="hero-title font-semibold">
                Hello, I am <span className="accent">Dave Dominic Goze</span>.
              </h1>
              <p className="max-w-xl text-lg text-[color:var(--muted)]">
                I am a Computer Science student focused on Intelligent Systems,
                building apps with modern frameworks and practical features.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                className="surface animate-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                href="/professional"
              >
                View professional work
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--stroke)] px-6 py-3 text-sm font-semibold"
                href="/DaveDominicGoze-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View / Download Resume
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="surface flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-xl font-semibold">{stat.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="surface glow-ring animate-float flex min-h-[320px] flex-col items-center justify-center gap-6 p-10 text-center">
            <div className="rounded-full border border-[color:var(--stroke)] bg-[radial-gradient(circle,#1d2f3a_0%,#0b0e1a_65%)] px-10 py-10 text-4xl font-semibold">
              DD
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Location
              </p>
              <p className="text-lg">San Pablo City, Laguna</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {signals.map((signal) => (
            <div key={signal.title} className="surface-soft p-5">
              <h3 className="text-lg font-semibold">{signal.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {signal.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="chip">Projects</p>
            <h2 className="section-title font-semibold">Recent builds</h2>
          </div>
          <a className="text-sm text-[color:var(--muted)]" href="/professional">
            See full work
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="surface p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {project.summary}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                {project.metrics}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-10">
          <p className="chip">Timeline</p>
          <h2 className="section-title font-semibold">Milestones and key dates</h2>
        </div>
        <div className="relative grid gap-8">
          <div className="timeline-line absolute left-4 top-0 h-full w-px md:left-6" />
          {timeline.map((block) => (
            <div key={block.year} className="relative pl-12 md:pl-16">
              <div className="surface absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--stroke)] text-xs font-semibold">
                {block.year.slice(2)}
              </div>
              <h3 className="text-xl font-semibold">{block.year}</h3>
              <div className="mt-4 space-y-4">
                {block.items.map((item) => (
                  <div key={item.title} className="surface p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      {item.date}
                    </div>
                    <div className="mt-2 text-lg font-semibold">{item.title}</div>
                    <p className="text-sm text-[color:var(--muted)]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-8">
          <p className="chip">Experience</p>
          <h2 className="section-title font-semibold">How I contribute</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((experience) => (
            <article key={experience.role} className="surface p-6">
              <h3 className="text-xl font-semibold">{experience.role}</h3>
              <p className="mt-4 text-sm text-[color:var(--muted)]">
                {experience.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="surface grid gap-6 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="chip">Next steps</p>
            <h2 className="section-title font-semibold">Want to build together?</h2>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              I am open to product collaborations, engineering leadership roles, and
              ambitious systems work.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="surface inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              href="/contact"
            >
              Write a message
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--stroke)] px-6 py-3 text-sm font-semibold"
              href="/professional#timeline"
            >
              View timeline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
