
import {
  BriefcaseBusiness,
  GraduationCap,
  BookOpen,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    category: "PRACTICAL TRAINING",
    title: "Data Science, Machine Learning & Deep Learning",
    organisation: "Syllogistek Systems Private Limited",
    duration: "20-Day Programme",
    status: "Completed",
    description:
      "An introductory learning experience focused on Python, Data Science, Machine Learning and Deep Learning. It helped me understand data-driven approaches, machine learning concepts and their practical applications.",
    icon: BriefcaseBusiness,
    color: "bg-[var(--soft-blue)]",
    certificate: "/certificates/syllogistic-data-science.pdf",
  },
  {
    number: "02",
    category: "SPECIALISED LEARNING",
    title: "AI & Machine Learning Master's Course",
    organisation: "Euron",
    duration: "Completed",
    status: "Completed",
    description:
      "Explored core concepts in Artificial Intelligence and Machine Learning, building a broader understanding of intelligent systems and their applications.",
    icon: BookOpen,
    color: "bg-[var(--soft-yellow)]",
    certificate: "/certificates/euron-ai-ml-masters.pdf",
  },
  {
    number: "03",
    category: "PROFESSIONAL CERTIFICATION",
    title: "Advanced Certification in Data Analytics with Generative AI",
    organisation: "Coding Ninjas × iHub, IIT Mandi",
    duration: "6-Month Programme",
    status: "In Progress",
    description:
      "Currently developing practical skills in data analytics through structured learning in Advanced Excel, Power BI, SQL, Python and Generative AI, with a focus on analytical thinking and business problem-solving.",
    icon: GraduationCap,
    color: "bg-[var(--soft-green)]",
    certificate: null,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="container-custom section-spacing"
    >
      {/* SECTION HEADER */}
      <div className="max-w-3xl">
        <p className="handwritten-text text-3xl text-[var(--accent)] md:text-4xl">
          Learning & growing
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
          Experiences that shape my journey.
        </h2>

        <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
          Every learning experience has helped me build a stronger
          foundation in technology and data. Here is a look at the
          training and programmes that have contributed to my
          professional development.
        </p>
      </div>

      {/* EXPERIENCE TIMELINE */}
      <div className="relative mt-14 space-y-7">
        <div className="absolute bottom-10 left-[23px] top-10 hidden w-px bg-[var(--border)] md:block" />

        {experiences.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.number}
              className="relative grid gap-5 rounded-[22px] border border-[var(--border)] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[70px_1fr] md:gap-7 md:p-9"
            >
              {/* ICON */}
              <div
                className={`relative z-10 flex size-12 items-center justify-center rounded-2xl border border-[var(--border)] ${item.color}`}
              >
                <Icon size={22} />
              </div>

              {/* CONTENT */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">
                    {item.category}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "In Progress"
                        ? "bg-[var(--soft-blue)] text-[#416B9A]"
                        : "bg-[var(--soft-green)] text-[#3D7854]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug md:text-2xl">
                  {item.title}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-[var(--foreground)]">
                  <span>{item.organisation}</span>
                  <span className="text-[var(--muted)]">•</span>
                  <span className="text-[var(--muted)]">
                    {item.duration}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] md:text-base">
                  {item.description}
                </p>

                {/* CERTIFICATE BUTTON */}
                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent-light)]"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                    <ArrowUpRight size={16} />
                  </a>
                )}

                <p className="mt-6 text-xs font-semibold tracking-wider text-[var(--muted)]">
                  EXPERIENCE {item.number}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* CLOSING NOTE */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-[var(--accent-light)] p-7 md:p-9">
        <div>
          <h3 className="text-xl font-bold">
            Always learning, always improving.
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Building knowledge through continuous learning and practice.
          </p>
        </div>

        <ArrowUpRight
          size={25}
          className="text-[var(--accent)]"
        />
      </div>
    </section>
  );
}
