
import {
  FileSpreadsheet,
  BarChart3,
  Database,
  Code2,
  Sparkles,
  Lightbulb,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Advanced Excel",
    description:
      "Spreadsheet analysis, data cleaning, reporting and dashboard creation.",
    skills: ["Excel Functions", "XLOOKUP", "Pivot Tables", "Power Query", "Data Cleaning"],
    icon: FileSpreadsheet,
    color: "bg-[var(--soft-green)]",
  },
  {
    number: "02",
    title: "Power BI",
    description:
      "Building interactive dashboards and analysing business performance.",
    skills: ["Data Modelling", "DAX", "Power Query", "Visualisation", "KPIs"],
    icon: BarChart3,
    color: "bg-[var(--soft-blue)]",
  },
  {
    number: "03",
    title: "SQL",
    description:
      "Working with databases to retrieve, organise and analyse data.",
    skills: ["SQL Queries", "Joins", "Subqueries", "Aggregations", "MySQL"],
    icon: Database,
    color: "bg-[var(--soft-yellow)]",
  },
  {
    number: "04",
    title: "Python",
    description:
      "Using Python for data analysis, programming and machine learning projects.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    icon: Code2,
    color: "bg-[var(--accent-light)]",
  },
  {
    number: "05",
    title: "Generative AI",
    description:
      "Exploring Generative AI tools and their applications in analytics and automation.",
    skills: ["Generative AI", "AI Tools", "Prompt Engineering", "Automation"],
    icon: Sparkles,
    color: "bg-[var(--soft-green)]",
  },
  {
    number: "06",
    title: "Analytical Thinking",
    description:
      "Approaching problems with curiosity, structured thinking and a business-focused mindset.",
    skills: ["Problem Solving", "Critical Thinking", "Data Interpretation", "Business Understanding"],
    icon: Lightbulb,
    color: "bg-[var(--soft-blue)]",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="container-custom section-spacing"
    >
      <div className="max-w-3xl">
        <p className="handwritten-text text-3xl text-[var(--accent)] md:text-4xl">
          Tools I work with
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
          Skills, tools &amp; capabilities.
        </h2>

        <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
          My technical toolkit is growing through structured
          learning and practical projects. I focus on building
          strong analytical foundations and applying the right
          tools to solve meaningful business problems.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.number}
              className="rounded-[22px] border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex size-14 items-center justify-center rounded-2xl ${group.color}`}
                >
                  <Icon size={25} />
                </div>

                <span className="text-sm font-semibold tracking-wider text-[var(--muted)]">
                  {group.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
