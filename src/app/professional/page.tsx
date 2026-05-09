const highlights = [
  {
    title: "Intelligent Systems",
    detail: "Studying Machine Learning and AI solutions for modern problems.",
    metric: "Computer Science",
  },
  {
    title: "Full-Stack Development",
    detail: "Crafting web interfaces and backing them with scalable databases.",
    metric: "Web & Mobile",
  },
  {
    title: "Tech Stack",
    detail: "Next.js, Vue, Laravel, Python, Flutter, Postgres, Firebase.",
    metric: "Versatile",
  },
];

const projects = [
  {
    title: "SocialDesk (Internship)",
    role: "Frontend Developer Intern",
    summary: "A robust social media management system built during my Ollopa Corp internship.",
    stack: ["Next.js", "TypeScript", "Tailwind css"],
  },
  {
    title: "AI tooling & Intelligent Systems",
    role: "Computer Science Student",
    summary: "Algorithms and models developed during coursework.",
    stack: ["Python", "Flask", "Colab", "Java"],
  },
  {
    title: "Web & Portals",
    role: "Full-stack Developer",
    summary: "Responsive, data-driven web applications.",
    stack: ["Next.js", "Vue.js", "Laravel", "Tailwind"],
  },
  {
    title: "Mobile App Projects",
    role: "Cross-platform Developer",
    summary: "Native-feeling apps synced with scalable backend databases.",
    stack: ["Flutter", "Firebase", "SQLite", "Postgres"],
  },
  {
    title: "Other Utilities",
    role: "Software Developer",
    summary: "Desktop applications and general programming.",
    stack: ["C#", ".NET", "Java", "MySQL"],
  },
];

const timeline = [
  {
    year: "2026",
    items: [
      {
        date: "Feb 3 - Apr 20",
        title: "Frontend Developer Intern",
        note: "Ollopa Corporation (400 hrs). Built interfaces for SocialDesk.",
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

export default function ProfessionalPage() {
  return (
    <div className="bg-grid">
      <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <span className="chip">Professional</span>
            <h1 className="hero-title font-semibold">
              Computer Science & Intelligent Systems.
            </h1>
            <p className="text-lg text-[color:var(--muted)]">
              I focus on building AI algorithms alongside practical full-stack web and mobile applications. Currently finishing my BS degree.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="surface inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                href="/contact"
              >
                Start a conversation
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--stroke)] px-6 py-3 text-sm font-semibold"
                href="#timeline"
              >
                View timeline
              </a>
            </div>
          </div>
          <div className="surface-soft grid gap-4 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Core Skills
            </p>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              <li>Intelligent Systems & Machine Learning</li>
              <li>Frontend (Next.js, Vue, Tailwind) & Mobile (Flutter)</li>
              <li>Backend (Laravel, Python, Databases)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="surface p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                {item.metric}
              </p>
              <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-8">
          <p className="chip">Projects</p>
          <h2 className="section-title font-semibold">Selected builds</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="surface p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-[color:var(--muted)]">{project.role}</p>
                </div>
                <span className="chip">{project.stack[0]}</span>
              </div>
              <p className="mt-4 text-sm text-[color:var(--muted)]">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
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

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="surface grid gap-6 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="chip">Working style</p>
            <h2 className="section-title font-semibold">Reliable, thoughtful delivery</h2>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              I care about stable rollouts, crisp documentation, and a feedback loop
              that keeps stakeholders in sync.
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
              href="/"
            >
              Back to home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
