const contactOptions = [
  {
    title: "Based in",
    detail: "San Pablo City, Laguna, Philippines 4000",
    action: "https://github.com/httpsdave",
    label: "GitHub Profile",
  },
  {
    title: "Call or Text",
    detail: "Let's discuss projects directly. Give me a ring anytime.",
    action: "tel:+6309912708956",
    label: "+63 0991 270 8956",
  },
  {
    title: "Connect",
    detail: "Always happy to meet new builders and designers.",
    action: "https://www.linkedin.com/in/davegoze/",
    label: "Follow on LinkedIn",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-grid">
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <span className="chip">Contact</span>
            <h1 className="hero-title font-semibold">Let us build something bold.</h1>
            <p className="text-lg text-[color:var(--muted)]">
              Tell me about your product, timeline, and the outcomes you care about.
            </p>
          </div>
          <div className="surface-soft p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Availability
            </p>
            <p className="mt-4 text-lg">Open for select projects and roles.</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              You can also reach me directly at davedominic912@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => (
            <article key={option.title} className="surface p-6">
              <h2 className="text-xl font-semibold">{option.title}</h2>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {option.detail}
              </p>
              <a
                className="mt-6 inline-flex rounded-full border border-[color:var(--stroke)] px-4 py-2 text-xs font-semibold"
                href={option.action}
              >
                {option.label}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="surface grid gap-6 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="chip">Message</p>
            <h2 className="section-title font-semibold">Send a quick note</h2>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              This form is a simple placeholder. Email is the fastest way to reach me.
            </p>
          </div>
          <form className="grid gap-4" aria-label="Contact form">
            <label className="text-sm font-semibold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="surface-soft w-full rounded-xl px-4 py-3 text-sm"
              placeholder="Your name"
              autoComplete="name"
            />
            <label className="text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="surface-soft w-full rounded-xl px-4 py-3 text-sm"
              placeholder="you@example.com"
              autoComplete="email"
            />
            <label className="text-sm font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="surface-soft w-full rounded-xl px-4 py-3 text-sm"
              placeholder="Tell me about your project..."
            />
            <a
              href="mailto:davedominic912@gmail.com"
              className="surface inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Email davedominic912@gmail.com
            </a>
          </form>
        </div>
      </section>
    </div>
  );
}
