
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  {
    label: "Portfolio",
    href: "#portfolio",
    dropdown: [
      { label: "Featured Projects", href: "#portfolio" },
      { label: "Excel Projects", href: "/projects/excel" },
      { label: "Power BI Projects", href: "/projects/power-bi" },
      { label: "Python Projects", href: "/projects/python" },
    ],
  },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
      <nav className="container-custom flex h-20 items-center justify-between">
        <Link
          href="#home"
          className="font-heading text-2xl font-bold tracking-tight"
          onClick={() => setMobileMenuOpen(false)}
        >
          Akash Das<span className="accent-text">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setPortfolioOpen(true)}
                  onMouseLeave={() => setPortfolioOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setPortfolioOpen(!portfolioOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                    <ChevronDown size={15} />
                  </button>

                  {portfolioOpen && (
                    <div className="absolute left-0 top-full w-56 rounded-xl border border-[var(--border)] bg-white p-2 shadow-lg">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--accent-light)] hover:text-[var(--foreground)]"
                          onClick={() => setPortfolioOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-md md:inline-flex"
        >
          Let's Talk
        </Link>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-[var(--foreground)] md:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-5 md:hidden">
          <div className="container-custom flex flex-col gap-4">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setPortfolioOpen(!portfolioOpen)}
                      className="flex w-full items-center justify-between text-left text-sm font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${portfolioOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {portfolioOpen && (
                      <div className="ml-4 mt-3 flex flex-col gap-3">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setPortfolioOpen(false);
                            }}
                            className="text-sm text-[var(--muted)]"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
