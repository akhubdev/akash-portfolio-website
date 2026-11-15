
import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-white">
      <div className="container-custom py-14 md:py-16">

        {/* TOP SECTION */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* BRAND */}
          <div>
            <Link
              href="#home"
              className="text-3xl font-bold tracking-tight"
            >
              Akash Das<span className="accent-text">.</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)] md:text-base">
              An aspiring Data Analyst passionate about
              transforming data into meaningful business
              insights. Interested in Retail, E-commerce
              and Supply Chain Analytics.
            </p>

            <p className="handwritten-text mt-5 text-2xl text-[var(--accent)]">
              Focused on learning. Driven by curiosity.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:justify-self-end">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-12 gap-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-12 flex flex-col gap-5 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h3 className="text-sm font-semibold">
              Let's stay connected
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Feel free to reach out or explore my work.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:cchiku123456@gmail.com"
              aria-label="Send an email"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--border)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-light)]"
            >
              <Mail size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/akashdastech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--border)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-light)]"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://github.com/akhubdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--border)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-light)]"
            >
              <FaGithub size={19} />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-[var(--muted)] md:text-sm">
            © 2026 Akash Das. All rights reserved.
          </p>

          <Link
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            Back to top
            <ArrowUp size={16} />
          </Link>
        </div>

      </div>
    </footer>
  );
}
