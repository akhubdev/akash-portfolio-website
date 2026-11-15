import Link from "next/link";
import { ArrowLeft, Database, Clock } from "lucide-react";

export default function SQLProjectsPage() {
  return (
    <main className="min-h-screen container-custom py-16 md:py-24">
      <Link
        href="/#portfolio"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>

      <section className="mx-auto mt-20 max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[var(--accent-light)]">
          <Database size={36} className="text-[var(--accent)]" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
          Coming Soon
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          More SQL Projects Are on the Way!
        </h1>

        <p className="mt-6 text-base leading-8 text-[var(--muted)]">
          I'm currently developing practical SQL projects focused on
          data analysis, database querying and real-world business
          problems. New projects will be added here soon.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["SQL", "MySQL", "Data Analysis"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
          <Clock size={16} />
          <span>Currently in progress</span>
        </div>

        <Link
          href="/#portfolio"
          className="mt-10 inline-flex rounded-full bg-[var(--foreground)] px-7 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent)]"
        >
          Explore Other Projects
        </Link>
      </section>
    </main>
  );
}