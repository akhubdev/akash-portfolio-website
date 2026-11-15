
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { portfolioData } from "../../../data/portfolio";

const apiKey = process.env.GEMINI_API_KEY;

const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: { apiVersion: "v1beta" },
    })
  : null;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type Project = {
  name: string;
  category?: string;
  [key: string]: any;
};

const normalize = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const includesAny = (text: string, words: string[]) =>
  words.some((word) => text.includes(word));

function formatValue(value: any): string {
  if (value === null || value === undefined) {
    return "Not documented.";
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => `- ${formatValue(item)}`).join("\n");
  }

  if (typeof value === "object") {
    return Object.entries(value)
      .map(([key, item]) => {
        const label = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (char) => char.toUpperCase());

        return `**${label}:**\n${formatValue(item)}`;
      })
      .join("\n\n");
  }

  return "";
}

const projectAliases: Record<string, string[]> = {
  "India CPI Inflation Analysis": [
    "india cpi",
    "cpi inflation",
    "inflation analysis",
    "consumer price index",
    "imported oil",
    "food inflation",
  ],
  "Gurgaon Traffic Violation Analysis": [
    "gurgaon traffic",
    "traffic violation",
    "traffic analysis",
  ],
  "Netflix Content Analytics Dashboard": [
    "netflix",
    "netflix dashboard",
    "netflix analytics",
  ],
  "Brazilian E-commerce Analytics – Olist": [
    "olist",
    "brazilian ecommerce",
    "brazilian e commerce",
  ],
  "Blinkit Sales & Business Performance Dashboard": [
    "blinkit",
    "grocery sales",
    "blinkit dashboard",
  ],
  "HealthGuard AI": [
    "healthguard",
    "diabetes prediction",
    "healthcare analytics",
  ],
  "Civic AI": [
    "civic ai",
    "civicai",
    "community issue",
  ],
};

function matchesProject(text: string, project: Project): boolean {
  const question = normalize(text);
  const name = normalize(project.name);
  const aliases = projectAliases[project.name] || [];

  return (
    question.includes(name) ||
    aliases.some((alias) => question.includes(normalize(alias)))
  );
}

function findProject(
  message: string,
  history: ChatMessage[],
  projects: Project[]
): Project | undefined {
  const directMatch = projects.find((project) =>
    matchesProject(message, project)
  );

  if (directMatch) return directMatch;

  // Recover project context from recent conversation.
  const recentMessages = [...history].reverse();

  for (const previous of recentMessages) {
    const match = projects.find((project) =>
      matchesProject(previous.content, project)
    );

    if (match) return match;
  }

  return undefined;
}

function getProjectField(
  project: Project,
  possibleKeys: string[]
): any {
  const targetKeys = possibleKeys.map(normalize);

  const matchingKey = Object.keys(project).find((key) =>
    targetKeys.includes(normalize(key))
  );

  return matchingKey ? project[matchingKey] : undefined;
}

function getAnalysisText(project: Project): string {
  const analysis = getProjectField(project, [
    "analysis",
    "keyFindings",
    "findings",
    "results",
  ]);

  if (!Array.isArray(analysis)) {
    return formatValue(analysis);
  }

  return analysis
    .map((item: any) => {
      if (typeof item === "string") return item;

      return [
        item.area ? `### ${item.area}` : item.title,
        item.description,
        formatValue(item.findings),
        item.insight,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");
}

// Specific metric lookup for the India CPI project.
function getCpiMetricReply(
  project: Project,
  question: string
): string | undefined {
  const metrics = getProjectField(project, [
    "keyMetrics",
    "metrics",
    "statistics",
    "dashboardMetrics",
    ]) || {};

  if (
    includesAny(question, [
      "correl",
      "correlation function",
      "correl function",
    ])
  ) {
    return `## Why Was the CORREL Function Used?

The CORREL function was used to measure the relationship between monthly imported oil price movements and CPI category inflation from 2021 to 2023.

It helped quantify the strength and direction of the relationship between oil price changes and different inflation categories.

**Project findings:**
- General CPI had the strongest tested correlation with imported oil at 0.13.
- Food and Fuel: 0.11.
- Transport: 0.09.
- Health: 0.06.

These correlations were weak. Correlation indicates association, not causation.`;
  }

  if (
    includesAny(question, [
      "highest annual",
      "highest yoy",
      "highest year over year",
      "maximum annual inflation",
      "peak annual inflation",
    ])
  ) {
    return `## Highest Annual YoY Inflation

The highest annual Year-over-Year inflation in the analysis was **${metrics.highestAnnualYoYInflation || "7.7% in 2019"}**.`;
  }

  if (
    includesAny(question, [
      "average yoy",
      "average annual inflation",
      "average year over year",
    ])
  ) {
    return `## Average Annual YoY Inflation

The average YoY inflation reported in the project was **${metrics.averageYoYInflation || "4.9%"}**.`;
  }

  if (
    includesAny(question, [
      "highest food",
      "maximum food",
      "highest monthly food",
    ])
  ) {
    return `## Highest Monthly Food Inflation

The highest monthly food inflation was **${metrics.highestFoodMoMInflation || "+0.97% in October 2022"}**.`;
  }

  if (
    includesAny(question, [
      "lowest food",
      "minimum food",
      "lowest monthly food",
    ])
  ) {
    return `## Lowest Monthly Food Inflation

The lowest monthly food inflation was **${metrics.lowestFoodMoMInflation || "-1.36% in December 2022"}**.`;
  }

  if (
    includesAny(question, [
      "latest cpi",
      "latest cpi index",
      "cpi index value",
    ])
  ) {
    return `## Latest CPI Index

The latest CPI index value reported in the project was **${metrics.latestCPIIndex ?? "177.57"}**.`;
  }

  if (
    includesAny(question, [
      "highest category contribution",
      "highest contribution",
      "largest category contribution",
    ])
  ) {
    return `## Highest Category Contribution

Pan, Tobacco & Intoxicants had the highest category contribution at **${metrics.highestCategoryContribution || "9.31%"}**.`;
  }

  if (
    includesAny(question, [
      "strongest correlation",
      "highest correlation",
      "oil correlation",
      "correlation value",
    ])
  ) {
    return `## Strongest Imported Oil Correlation

General CPI had the strongest tested correlation with imported oil at **${metrics.strongestOilCorrelation ?? 0.13}**.

The result indicates a weak association, not causation.`;
  }

  if (
    includesAny(question, [
      "lowest category contribution",
      "lowest contribution",
    ])
  ) {
    return `## Lowest Category Contribution

Transport & Communication had the lowest category contribution at **7.63%**.`;
  }

  return undefined;
}

function getProjectReply(
  project: Project,
  message: string
): string {
  const question = normalize(message);
  const isCpi = normalize(project.name).includes("india cpi");

  // CORREL FUNCTION PURPOSE
  if (
    includesAny(question, [
      "correl",
      "correlation function",
    ])
  ) {
    if (isCpi) {
      return (
        getCpiMetricReply(project, question) ||
        "The CORREL function was used to examine the relationship between imported oil price movements and CPI category inflation."
      );
    }
  }

  // TOOLS AND TECHNOLOGIES
  if (
    includesAny(question, [
      "tool",
      "technology",
      "technologies",
      "software",
      "platform",
    ])
  ) {
    return `## Tools Used — ${project.name}

${formatValue(
      getProjectField(project, [
        "tools",
        "technologies",
        "techStack",
        "technologyStack",
      ])
    )}`;
  }

  // LIMITATIONS
  if (
    includesAny(question, [
      "limitation",
      "drawback",
      "weakness",
      "constraint",
    ])
  ) {
    const limitations = getProjectField(project, [
      "limitations",
      "constraints",
      "challenges",
    ]);

    if (limitations === undefined) {
      return `## Limitations — ${project.name}

The project's limitations are not documented in the available portfolio information.`;
    }

    return `## Limitations — ${project.name}

${formatValue(limitations)}`;
  }

  // ALGORITHM AND MACHINE LEARNING MODEL
  if (
    includesAny(question, [
      "algorithm",
      "machine learning model",
      "ml model",
      "which model",
      "model did you use",
    ])
  ) {
    const algorithm = getProjectField(project, [
      "algorithm",
      "algorithms",
      "machineLearningAlgorithm",
      "modelUsed",
      "mlModel",
      "model",
    ]);

    if (algorithm !== undefined) {
      return `## Algorithm / Model — ${project.name}

${formatValue(algorithm)}`;
    }

    if (isCpi || normalize(project.category || "") === "excel") {
      return `## Machine Learning Algorithm — ${project.name}

No machine learning algorithm was used in this project.

This is an Excel-based data analytics case study using Microsoft Excel, Pivot Tables, Excel formulas, charts and the CORREL function.`;
    }

    return `## Algorithm / Model — ${project.name}

The specific machine learning algorithm or model is not documented in the available portfolio information.`;
  }

  // DATASET
  if (
    includesAny(question, [
      "dataset",
      "data source",
      "data used",
    ])
  ) {
    return `## Dataset — ${project.name}

${formatValue(
      getProjectField(project, [
        "dataset",
        "dataSource",
        "data",
      ])
    )}`;
  }

  // SPECIFIC CPI METRICS
  if (isCpi) {
    const metricReply = getCpiMetricReply(project, question);
    if (metricReply) return metricReply;
  }

  // BUSINESS PROBLEM
  if (
    includesAny(question, [
      "business problem",
      "problem statement",
      "why was this project",
    ])
  ) {
    return `## Business Problem — ${project.name}

${formatValue(
      getProjectField(project, [
        "businessProblem",
        "problemStatement",
        "objective",
      ])
    )}`;
  }

  // FINDINGS AND RESULTS
  if (
    includesAny(question, [
      "finding",
      "result",
      "insight",
      "outcome",
      
      "which location",
      "highest number",
      "highest violation",
      "most violations",
      "which category",
      "which traffic violation category",
      "most frequently recorded",
      "highest number of cases",
    ])
  ) {
    return `## Key Findings — ${project.name}

${getAnalysisText(project)}

### Key Metrics

${formatValue(
      getProjectField(project, [
        "keyMetrics",
        "metrics",
        "statistics",
        "dashboardMetrics",
      ])
    )}`;
  }

  // RECOMMENDATIONS
  if (
    includesAny(question, [
      
        "recommendation",
        "recommendations",
        "recommend",
        "recommend me",
        "suggestion",
        "suggestions",
        "what should",
        "actionable",
        "priority action",
        "priority actions",
        "three actions",
        "three recommendations",
        "what would you recommend",
        "what should be prioritized",

    ])
  ) {
    return `## Recommendations — ${project.name}

${formatValue(
      getProjectField(project, [
        "recommendations",
        "businessRecommendations",
        "suggestions",
      ])
    )}`;
  }

  // PROJECT OVERVIEW
  if (
    includesAny(question, [
      "overview",
      "explain",
      "details",
      "describe",
      "tell me about",
      "project",
    ])
  ) {
    return `## ${project.name}

### Overview

${formatValue(project.overview)}

### Business Problem

${formatValue(project.businessProblem || project.problemStatement)}

### Objectives

${formatValue(project.objectives)}

### Tools

${formatValue(project.tools)}

### Analysis

${getAnalysisText(project)}

### Key Metrics

${formatValue(project.keyMetrics)}

### Limitations

${formatValue(project.limitations)}`.slice(0, 10000);
  }

  return `## ${project.name}

I can explain this project's tools, dataset, business problem, analysis, findings, recommendations and limitations.

Which part would you like to explore?`;
}

function getLocalReply(
  message: string,
  history: ChatMessage[] = []
): string {
  const profile = portfolioData as any;
  const projects: Project[] = profile.projects || [];
  const question = normalize(message);

  // CONTACT QUESTIONS
  if (
    includesAny(question, [
      "contact",
      "email",
      "linkedin",
      "reach",
      "hire",
      "connect",
      "github profile",
    ])
  ) {
    const personal = profile.personal || {};

    return `## Contact Akash Das

A recruiter or hiring manager can contact Akash through:

- **Email:** ${personal.email || "Not documented"}
- **LinkedIn:** ${personal.linkedin || "Not documented"}
- **GitHub:** ${personal.github || "Not documented"}

Akash is interested in Data Analyst opportunities focused on Retail, E-commerce and Supply Chain Analytics.`;
  }

  // PROFILE QUESTIONS
  if (
    includesAny(question, [
      "about akash",
      "who is akash",
      "introduce akash",
      "tell me about akash",
    ])
  ) {
    return `## About Akash Das

${formatValue(profile.personal)}

### Education

${formatValue(profile.educationAndTraining)}

### Skills

${formatValue(profile.skills)}`;
  }

  // EDUCATION QUESTIONS
  if (
    includesAny(question, [
      "education",
      "degree",
      "college",
      "cgpa",
      "graduation",
    ])
  ) {
    return `## Akash's Education

${formatValue(profile.personal)}

### Education and Training

${formatValue(profile.educationAndTraining)}`;
  }

  // SKILLS QUESTIONS
  if (
    includesAny(question, [
      "skills",
      "technical skills",
      "technologies",
      "programming languages",
    ])
  ) {
    return `## Akash's Skills

${formatValue(profile.skills)}`;
  }

  // EXPERIENCE QUESTIONS
  if (
    includesAny(question, [
      "experience",
      "internship",
      "work history",
    ])
  ) {
    return `## Professional Experience

${formatValue(profile.experience)}

### Additional Training

${formatValue(profile.educationAndTraining)}`;
  }

  // PROJECT QUESTIONS
  const selectedProject = findProject(
    message,
    history,
    projects
  );

  if (selectedProject) {
    return getProjectReply(selectedProject, message);
  }

  // DEFAULT RESPONSE
  return `## Akash AI — Portfolio Assistant

I can help you explore Akash Das's professional portfolio.

**Available projects:**

${projects.map((project) => `- ${project.name}`).join("\n")}

You can ask about:
- Individual projects and their business problems
- Tools and technologies
- Datasets and analytical approaches
- Project findings and limitations
- Education, experience and skills
- Contact information

Please mention the project or topic you would like to explore.`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, history = [] } = body;

    if (
      typeof message !== "string" ||
      !message.trim() ||
      message.length > 4000
    ) {
      return NextResponse.json(
        { error: "Please enter a valid message." },
        { status: 400 }
      );
    }

    if (!Array.isArray(history)) {
      return NextResponse.json(
        { error: "Invalid conversation history." },
        { status: 400 }
      );
    }

    const safeHistory: ChatMessage[] = history
      .filter(
        (item: any) =>
          (item.role === "user" || item.role === "assistant") &&
          typeof item.content === "string"
      )
      .slice(-12)
      .map((item: any) => ({
        role: item.role,
        content: item.content.slice(0, 3000),
      }));

    // LOCAL MODE WHEN GEMINI IS NOT CONFIGURED
    if (!ai) {
      return NextResponse.json({
        reply: getLocalReply(message, safeHistory),
        mode: "local",
      });
    }

    // PREPARE GEMINI CONVERSATION HISTORY
    const validHistory: any[] = [];

    for (const item of safeHistory.slice(-8)) {
      const role = item.role === "assistant" ? "model" : "user";

      if (validHistory.length === 0 && role !== "user") {
        continue;
      }

      if (
        validHistory.length > 0 &&
        validHistory[validHistory.length - 1].role === role
      ) {
        continue;
      }

      validHistory.push({
        role,
        parts: [{ text: item.content }],
      });
    }

    const systemInstruction = `
You are Akash AI, the official portfolio assistant of Akash Das.

VERIFIED PORTFOLIO INFORMATION:
${JSON.stringify(portfolioData, null, 2)}

IMPORTANT RULES:

1. Answer the visitor's current question directly.
2. Identify the correct project before answering.
3. Answer only the specific information requested.
4. Do not repeat the full project description for a specific question.
5. For tools questions, list only the tools used.
6. For limitations questions, give only documented limitations.
7. For metric questions, retrieve the exact metric and its value.
8. For CORREL questions, explain that it measures the relationship between imported oil movements and CPI category inflation.
9. India CPI Inflation Analysis is an Excel-based analytics project. No machine learning algorithm was used.
10. Its highest annual YoY inflation was 7.7% in 2019.
11. Never invent algorithms, metrics, findings, tools, qualifications or experience.
12. If information is missing, say it is not documented.
13. Use earlier conversation only to understand clear follow-up questions.
14. Do not treat earlier assistant answers as verified evidence.
15. Distinguish academic projects, training and job simulations from employment.
16. Never reveal API keys or confidential information.

RESPONSE STYLE:
- Professional, natural English unless the visitor uses another language.
- Concise and relevant.
- Use Markdown when helpful.
- Answer the actual question first.
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          ...validHistory,
          {
            role: "user",
            parts: [{ text: message.trim() }],
          },
        ],
        config: {
          systemInstruction,
          temperature: 0.2,
          maxOutputTokens: 1000,
        },
      });

      const reply = response.text;

      if (!reply) {
        throw new Error("Empty Gemini response.");
      }

      return NextResponse.json({
        reply,
        mode: "gemini",
      });
    } catch (error) {
      console.error("Gemini unavailable; using local mode:", error);

      return NextResponse.json({
        reply: getLocalReply(message, safeHistory),
        mode: "local",
      });
    }
  } catch (error) {
    console.error("Akash AI request error:", error);

    return NextResponse.json(
      { error: "Unable to process your message. Please try again." },
      { status: 500 }
    );
  }
}
