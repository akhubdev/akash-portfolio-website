
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "HealthGuard AI",
    subtitle: "Diabetes Risk Prediction & Healthcare Analytics",
    image: "/images/projects/python/healthguard-ai.png",
    description:
      "A Python-based healthcare application that uses machine learning to predict diabetes risk and provides an interactive healthcare analytics dashboard.",
    tools: ["Python", "Machine Learning", "Flask", "SQLite", "Chart.js"],
    github: "https://github.com/akhubdev/HealthGuard-AI",
  },
  {
    number: "02",
    title: "Civic AI",
    subtitle: "AI-Powered Civic Technology Project",
    image: "/images/projects/python/civic-ai.png",
    description:
      "A Python-based project exploring the use of AI and technology to address civic challenges.",
    tools: ["Python", "AI", "Machine Learning"],
    github: "https://github.com/akhubdev/CivicAI",
  },
];

export default function PythonProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="container-custom section-spacing">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          <ArrowLeft size={17} />
          Back to Portfolio
        </Link>

        <div className="mt-16 max-w-3xl">
          <p className="handwritten-text text-3xl text-[var(--accent)] md:text-4xl">
            Building with Python
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            Python Projects & Development.
          </h1>

          <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
            A collection of Python applications and machine learning
            projects focused on practical problem-solving and
            exploring real-world applications.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="overflow-hidden rounded-[22px] border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="relative mb-7 aspect-video overflow-hidden rounded-xl bg-[var(--soft-blue)]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm font-semibold tracking-wider text-[var(--muted)]">
                PROJECT {project.number}
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                {project.title}
              </h2>

              <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                {project.subtitle}
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-[var(--border)] pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-[var(--accent)]"
                >
                  <FaGithub size={18} />
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
