
import type { Metadata } from "next";
import { DM_Sans, Inter, Coming_Soon } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const comingSoon = Coming_Soon({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akashdas.com"),

  title: {
    default: "Akash Das | Data Analyst Portfolio",
    template: "%s | Akash Das",
  },

  description:
    "Explore Akash Das's Data Analyst portfolio, featuring Excel, Power BI, SQL, Python projects and insights across Retail, E-commerce and Supply Chain Analytics.",

  keywords: [
    "Akash Das",
    "Akash Das Portfolio",
    "Data Analyst",
    "Junior Data Analyst",
    "Fresher Data Analyst",
    "Advanced Excel",
    "Power BI",
    "SQL",
    "Python",
    "Retail Analytics",
    "E-commerce Analytics",
    "Supply Chain Analytics",
    "Data Analytics Projects",
  ],

  authors: [{ name: "Akash Das" }],
  creator: "Akash Das",
  publisher: "Akash Das",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://akashdas.com",
    siteName: "Akash Das Portfolio",
    title: "Akash Das | Data Analyst Portfolio",
    description:
      "Explore my analytics projects, technical skills and work in Retail, E-commerce and Supply Chain Analytics.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Akash Das | Data Analyst Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Akash Das | Data Analyst Portfolio",
    description:
      "Data Analyst portfolio showcasing Excel, Power BI, SQL, Python and business analytics projects.",
    images: [
      {
        url: "/opengraph-image",
        alt: "Akash Das | Data Analyst Portfolio",
      },
    ],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} ${comingSoon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
