
import {
  Mail,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const contactLinks = [
  {
    title: "Email",
    description: "Have an opportunity or a question? Send me an email.",
    value: "YOUR_EMAIL@example.com",
    href: "mailto:cchiku123456@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    description: "Let's connect and grow our professional network.",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/akashdastech/",
    icon: FaLinkedinIn,
  },
  {
    title: "GitHub",
    description: "Explore my projects, code and development work.",
    value: "akhubdev",
    href: "https://github.com/akhubdev",
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="container-custom section-spacing"
    >
      <div className="rounded-[28px] border border-[var(--border)] bg-white p-8 md:p-14">
        <div className="max-w-3xl">
          <p className="handwritten-text text-3xl text-[var(--accent)] md:text-4xl">
            Have something in mind?
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            Let's Connect.
          </h2>

          <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
            I'm open to entry-level Data Analyst opportunities,
            professional connections and meaningful collaborations.
            Feel free to reach out. I'd be happy to connect and
            have a conversation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={
                  item.title === "Email" ? undefined : "_blank"
                }
                rel={
                  item.title === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group rounded-2xl border border-[var(--border)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--soft-blue)]">
                    <Icon size={23} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-[var(--accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {item.description}
                </p>

                <p className="mt-5 break-all text-sm font-semibold">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[var(--border)] pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <MessageCircle
              size={22}
              className="text-[var(--accent)]"
            />
            <p className="text-sm text-[var(--muted)]">
              Looking forward to hearing from you.
            </p>
          </div>

          <a
            href="https://github.com/akhubdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Explore My GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
