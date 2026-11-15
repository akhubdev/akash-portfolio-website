
import { Code2, BrainCircuit, Target } from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Where it started",
    description:
      "My Computer Science journey introduced me to programming. Python gradually became my favourite language and opened the door to exploring data.",
    icon: Code2,
    color: "bg-[var(--soft-blue)]",
  },
  {
    number: "02",
    title: "Discovering data",
    description:
      "My early exposure to Data Science and Machine Learning helped me understand how data can reveal patterns and support predictions. I later explored these ideas through my final-year project.",
    icon: BrainCircuit,
    color: "bg-[var(--soft-green)]",
  },
  {
    number: "03",
    title: "Where I'm heading",
    description:
      "I chose Data Analytics as the starting point of my professional career, with a growing interest in Retail, E-commerce and Supply Chain Analytics.",
    icon: Target,
    color: "bg-[var(--soft-yellow)]",
  },
];

export default function About() {
  return (
    <section id="about" className="container-custom section-spacing">

      {/* SECTION INTRODUCTION */}
      <div className="max-w-3xl">
        <p className="handwritten-text text-3xl text-[var(--accent)] md:text-4xl">
          A little about me
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
          A journey shaped by curiosity, code and data.
        </h2>

        <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
          My interest in technology began during my Computer Science
          journey, where I developed a strong liking for programming,
          particularly Python. Although I started learning both Java
          and Python, I gradually found myself drawn to Python because
          of its simplicity, versatility and powerful ecosystem for
          working with data.
        </p>

        <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
          During my third semester, I got an opportunity to explore
          Data Science, Machine Learning and Deep Learning through a
          20-day internship. That experience introduced me to how data
          can be used to identify patterns, train machine learning
          models and make predictions. It sparked an interest that
          continued to grow.
        </p>

        <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
          I carried that interest into my final-year B.Tech seminar
          project, where I developed a Diabetes Risk Prediction System
          using Machine Learning. It gave me an opportunity to connect
          my programming knowledge with a practical, data-driven
          problem.
        </p>

        <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
          As I explored the field further, I realised that I wanted
          to build my career step by step, starting with Data
          Analytics. I became particularly interested in understanding
          business data, identifying trends, creating meaningful
          insights and supporting better decisions.
        </p>

        <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
          Today, I am developing my skills in Advanced Excel, SQL,
          Power BI, Python and Generative AI, with a particular
          interest in Retail & E-commerce Analytics and Supply Chain
          Analytics.
        </p>
      </div>

      {/* MY JOURNEY */}
      <div className="mt-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            My journey
          </p>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            Three steps that shaped my direction.
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {journey.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="rounded-[20px] border border-[var(--border)] bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--muted)]">
                    {item.number}
                  </span>

                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <Icon size={23} />
                  </div>
                </div>

                <h4 className="mt-7 text-xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {/* CLOSING THOUGHT */}
      <div className="mt-12 rounded-[20px] bg-[var(--accent-light)] p-7 md:p-10">
        <p className="max-w-3xl text-lg font-medium leading-8 text-[var(--foreground)] md:text-xl">
          I believe good analytics is not just about working with
          data or creating dashboards. It is about asking the right
          questions, understanding the problem and turning information
          into insights that create value.
        </p>

        <p className="mt-5 handwritten-text text-2xl text-[var(--accent)] md:text-3xl">
          Curious to learn. Committed to improve. Ready to grow.
        </p>
      </div>

    </section>
  );
}
