
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
const projects = [
  {
    number: "01",
    title: "Netflix Content Analytics Dashboard",
    image: "/images/projects/power-bi/netflix-content-dashboard.png",
    description:
      "A Power BI dashboard exploring Netflix content, including movies and TV shows, with insights into content distribution and catalogue trends.",
    tools: ["Power BI", "Data Visualization", "Data Analysis"],
    github: "https://github.com/akhubdev/netflix-movie-shows-dashboard-powerbi",
    report: "/presentations/power-bi/netflix-content-analytics.pptx",
  },
  {
    number: "02",
    title: "Brazilian E-commerce Analytics – Olist",
    image: "/images/projects/power-bi/olist-ecommerce-dashboard.png",
    description:
      "An e-commerce analytics project using the Brazilian Olist dataset to explore business performance through interactive Power BI visualizations.",
    tools: ["Power BI", "DAX", "Data Modelling"],
    github: "https://github.com/akhubdev/olist-e-commerce-analytics-powerbi",
    report: "/presentations/power-bi/olist-ecommerce-analytics.pptx",
  },
  {
    number: "03",
    title: "Blinkit Sales & Business Performance Dashboard",
    image: "/images/projects/power-bi/blinkit-sales-dashboard.png",
    description:
      "A sales analytics dashboard focused on exploring Blinkit's sales performance and presenting business metrics through interactive visualizations.",
    tools: ["Power BI", "DAX", "Business Analytics"],
    github: "https://github.com/akhubdev/blinkit-grocery-sales-analysis",
    report: "/presentations/power-bi/blinkit-grocery-sales-analysis.pptx",
  },
];

export default function PowerBIProjectsPage() {
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

        <div className="mt-14 max-w-3xl">
          <p className="handwritten-text text-3xl text-[var(--accent)] md:text-4xl">
            Exploring data visually
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            Power BI Projects & Analytics.
          </h1>

          <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
            Interactive dashboards and analytical projects
            focused on exploring data, understanding business
            performance and communicating meaningful insights.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-[22px] border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-9"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={`${project.title} dashboard preview`}
                  width={1200}
                  height={675}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="text-sm font-semibold text-[var(--muted)]">
                PROJECT {project.number}
              </p>

              <h2 className="mt-5 text-xl font-bold md:text-2xl">
                {project.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
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

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[var(--border)] pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--accent)]"
                >
                  <FaGithub size={18} />
                  GitHub
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={project.report}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--accent)]"
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
