
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  BarChart3,
  Code2,
  Database,
  ArrowUpRight,
} from "lucide-react";

const projectCategories = [
  {
    number: "01",
    title: "Excel Projects",
    description:
      "Data cleaning, spreadsheet analysis, business reporting and interactive Excel dashboards.",
    tools: ["Advanced Excel", "Data Cleaning", "Pivot Tables"],
    icon: FileSpreadsheet,
    color: "bg-[var(--soft-green)]",
    href: "/projects/excel",
  },
  {
    number: "02",
    title: "Power BI Projects",
    description:
      "Interactive dashboards, data modelling and business insights through data visualization.",
    tools: ["Power BI", "DAX", "Data Modelling"],
    icon: BarChart3,
    color: "bg-[var(--soft-blue)]",
    href: "/projects/power-bi",
  },
  {
    number: "03",
    title: "Python & Development",
    description:
      "Python applications, machine learning projects and practical software development.",
    tools: ["Python", "Machine Learning", "Flask"],
    icon: Code2,
    color: "bg-[var(--soft-yellow)]",
    href: "/projects/python",
  },
  {
    number: "04",
    title: "SQL Projects",
    description:
      "Database querying, data exploration and solving business problems using SQL.",
    tools: ["SQL", "Joins", "Data Analysis"],
    icon: Database,
    color: "bg-[var(--accent-light)]",
    href: "/projects/sql",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="container-custom section-spacing"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="handwritten-text text-3xl text-[var(--accent)] md:text-4xl">
          Things I've worked on
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
          Turning learning into practical work.
        </h2>

        <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
          A collection of projects that reflect my journey in
          data analytics, programming and problem-solving.
          Each project represents an opportunity to learn,
          explore and build something meaningful.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="mt-14 grid gap-6 sm:grid-cols-2"
      >
        {projectCategories.map((category) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.number}
              variants={cardVariants}
            >
              <Link
                href={category.href}
                className="group block h-full rounded-[22px] border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-9"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex size-14 items-center justify-center rounded-2xl ${category.color}`}
                  >
                    <Icon
                      size={25}
                      className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>

                  <span className="text-sm font-semibold tracking-wider text-[var(--muted)]">
                    {category.number}
                  </span>
                </div>

                <div className="mt-8 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold md:text-2xl">
                    {category.title}
                  </h3>

                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
                  {category.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
