const interests = [
  {
    title: "Morning runs",
    detail: "Early runs keep me focused and help me think through systems design.",
  },
  {
    title: "Books and essays",
    detail: "I enjoy narrative nonfiction, tech essays, and good world-building.",
  },
  {
    title: "Music",
    detail: "Guitar and piano help me reset after intense shipping cycles.",
  },
  {
    title: "Language learning",
    detail: "Studying Japanese and German to keep my mind flexible.",
  },
];

const values = [
  {
    title: "Curiosity",
    note: "Always learning new tools and asking better questions.",
  },
  {
    title: "Craft",
    note: "Details matter, from performance to typography and spacing.",
  },
  {
    title: "Integrity",
    note: "Trust is built through clarity, honesty, and consistency.",
  },
];

const moments = [
  {
    title: "Travel notebooks",
    caption: "Collecting ideas from new cities and design culture.",
  },
  {
    title: "Weekend labs",
    caption: "Small experiments with shaders, data, and UI transitions.",
  },
  {
    title: "Community",
    caption: "Mentoring new developers and joining tech meetups.",
  },
];

export default function PersonalPage() {
  return (
    <div className="bg-grid">
      <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <span className="chip">Personal</span>
            <h1 className="hero-title font-semibold">
              A calm life outside the terminal.
            </h1>
            <p className="text-lg text-[color:var(--muted)]">
              I care about balance: movement, music, books, and time to reflect. It
              keeps my engineering grounded and my design choices intentional.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="surface inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                href="/contact"
              >
                Say hello
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--stroke)] px-6 py-3 text-sm font-semibold"
                href="/professional"
              >
                View professional
              </a>
            </div>
          </div>
          <div className="surface-soft p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Roots
            </p>
            <p className="mt-4 text-lg">
              Born and raised in San Pablo City, Laguna, Philippines (4000). I balance coding with other aspects of life here.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="mb-8">
          <p className="chip">Interests</p>
          <h2 className="section-title font-semibold">What refuels me</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {interests.map((item) => (
            <article key={item.title} className="surface p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="mb-8">
          <p className="chip">Moments</p>
          <h2 className="section-title font-semibold">Snapshots and rituals</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {moments.map((moment) => (
            <article key={moment.title} className="surface-soft flex min-h-[220px] flex-col justify-end p-6">
              <h3 className="text-lg font-semibold">{moment.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {moment.caption}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="surface grid gap-6 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="chip">Values</p>
            <h2 className="section-title font-semibold">How I try to show up</h2>
          </div>
          <div className="space-y-4">
            {values.map((value) => (
              <div key={value.title} className="surface-soft p-4">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {value.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
