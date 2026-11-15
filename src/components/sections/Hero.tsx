
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container-custom py-8 sm:py-12 md:py-20">
      <div className="grid items-center gap-12 rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-7 md:grid-cols-2 md:gap-14 md:rounded-[28px] md:p-12 lg:p-16">

        {/* LEFT: INTRODUCTION */}
        <div className="flex min-w-0 flex-col items-start">

          <p className="handwritten-text mb-5 text-3xl text-[var(--muted)] sm:text-4xl">
            Hi, I&apos;m Akash 👋
          </p>

          <h1 className="max-w-xl text-[clamp(2rem,7vw,3rem)] font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
            Turning Data Into Meaningful Business Insights.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[var(--muted)] sm:mt-7 md:text-lg">
            I&apos;m an aspiring Data Analyst with a background in
            Computer Science, passionate about transforming data
            into meaningful insights that support better business
            decisions. My interests include Retail, E-commerce
            and Supply Chain Analytics.
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">

            <Link
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:px-7"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:w-auto sm:px-7"
            >
              Let&apos;s Connect
              <ArrowDown size={17} />
            </Link>

            <a
              href="/resume.pdf"
              download="Akash_Das_Data_Analyst_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-7 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md"
            >
              Download Resume
            </a>

          </div>

          <p className="mt-8 text-sm font-medium leading-6 text-[var(--muted)] sm:mt-10">
            Focused on learning. Driven by curiosity. Inspired by data.
          </p>

        </div>

        {/* RIGHT: PROFILE IMAGE */}
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-sm md:max-w-md">

          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[var(--soft-blue)]">

            <Image
              src="/images/akash-profile.jpeg"
              alt="Akash Das - Aspiring Data Analyst"
              fill
              priority
              sizes="(max-width: 480px) 280px, (max-width: 768px) 384px, 45vw"
              className="object-cover object-center"
            />

          </div>

          <div className="absolute -bottom-4 left-2 max-w-[calc(100%-16px)] rounded-2xl border border-[var(--border)] bg-white px-4 py-3 shadow-sm sm:-bottom-5 sm:-left-4 sm:px-5 md:-left-8">
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Data Analytics
            </p>
            <p className="text-xs text-[var(--muted)]">
              Retail • E-commerce • Supply Chain
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
