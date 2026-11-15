
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    number: "01",
    title: "India CPI Inflation Analysis",
    image: "/images/projects/excel/india-cpi-dashboard.png",
    description:
      "An Excel-based analytical project exploring inflation trends, patterns and economic indicators through structured data analysis.",
    tools: ["Advanced Excel", "Data Cleaning", "Pivot Tables"],
    github: "https://github.com/akhubdev/india-cpi-inflation-analysis-excel",
    report: "/presentations/excel/india-cpi-presentation.pptx",
  },
  {
    number: "02",
    title: "Gurgaon Traffic Violation Analysis",
    image: "/images/projects/excel/gurgaon-traffic-dashboard.png",
    description:
      "A data analysis project focused on exploring traffic violation records and identifying meaningful patterns.",
    tools: [,"Excel", "Data Analysis", "Data Visualization"],
    github: "https://github.com/akhubdev/gurgaon-traffic-violation-analysis-excel",
    report: "/presentations/excel/gurgaon-traffic-presentation.pptx",
  },
];

export default function ExcelProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="container-custom section-spacing">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div className="mt-12 max-w-3xl">
          <p className="handwritten-text text-3xl text-[var(--accent)] md:text-4xl">
            My Excel Work
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Excel Projects & Analysis.
          </h1>

          <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
            Exploring business problems through data cleaning,
            spreadsheet analysis, reporting and meaningful insights.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="rounded-[22px] border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-9"
            >
            <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                    src={project.image}
                    alt={`${project.title} dashboard preview`}
                    width={1200}
                    height={675}
                    className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
              <p className="text-sm font-semibold text-[var(--muted)]">
                PROJECT {project.number}
              </p>

              <h2 className="mt-5 text-2xl font-bold">
                {project.title}
              </h2>

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

              <div className="mt-8 flex flex-wrap gap-5 border-t border-[var(--border)] pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--accent)]"
                >
                  <FaGithub size={17} />
                  GitHub
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={project.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--accent)]"
                >
                  View Report
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
