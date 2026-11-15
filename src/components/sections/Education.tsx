
import {
  GraduationCap,
  BookOpen,
  Award,
  CalendarDays,
} from "lucide-react";

const educationItems = [
  {
    number: "01",
    category: "FORMAL EDUCATION",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Adarsha College of Engineering, Angul",
    university: "Biju Patnaik University of Technology, Odisha",
    duration: "2023 – May 2026",
    result: "CGPA: 8.03",
    description:
      "Built a foundation in computer science, programming and software development, which helped develop my interest in data and analytical problem-solving.",
    icon: GraduationCap,
    color: "bg-[var(--soft-blue)]",
  },
  {
    number: "02",
    category: "INTERNSHIP PROGRAMME",
    title: "Data Science, ML & Deep Learning Using Python",
    institution: "Syllogistek Systems Private Limited",
    duration: "4 June – 26 June 2025",
    result: "Completed",
    description:
      "Completed a practical internship programme covering Python, Data Science, Machine Learning and Deep Learning.",
    icon: BookOpen,
    color: "bg-[var(--soft-green)]",
  },
  {
    number: "03",
    category: "SPECIALISED LEARNING",
    title: "AI & Machine Learning Master's Course",
    institution: "Euron",
    duration: "Completed – 2026",
    result: "Completed",
    description:
      "Developed an understanding of Artificial Intelligence and Machine Learning concepts and their applications.",
    icon: Award,
    color: "bg-[var(--soft-yellow)]",
  },
  {
    number: "04",
    category: "PROFESSIONAL CERTIFICATION",
    title: "Advanced Certification in Data Analytics with Generative AI",
    institution: "Coding Ninjas × iHub, IIT Mandi",
    duration: "6-Month Programme",
    result: "In Progress",
    description:
      "Currently developing practical skills in Advanced Excel, Power BI, SQL, Python and Generative AI through structured learning and project work.",
    icon: BookOpen,
    color: "bg-[var(--accent-light)]",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="container-custom section-spacing"
    >
      <div className="max-w-3xl">
        <p className="handwritten-text text-3xl text-[var(--accent)] md:text-4xl">
          My learning journey
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
          Education &amp; professional development.
        </h2>

        <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
          My journey combines formal education, practical
          training and continuous learning to build a strong
          foundation in data analytics and technology.
        </p>
      </div>

      <div className="mt-14 space-y-6">
        {educationItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.number}
              className="rounded-[22px] border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:shadow-lg md:p-9"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex shrink-0 items-start justify-between md:w-20">
                  <div
                    className={`flex size-14 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <Icon size={25} />
                  </div>

                  <span className="text-sm font-semibold tracking-wider text-[var(--muted)] md:hidden">
                    {item.number}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-semibold tracking-[0.15em] text-[var(--accent)]">
                      {item.category}
                    </p>

                    <span className="hidden text-sm font-semibold tracking-wider text-[var(--muted)] md:inline">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold leading-snug md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-medium text-[var(--foreground)]">
                    {item.institution}
                  </p>

                  {"university" in item && (
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.university}
                    </p>
                  )}

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={16} />
                      {item.duration}
                    </span>

                    <span className="font-semibold text-[var(--foreground)]">
                      {item.result}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
