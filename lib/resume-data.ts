/**
 * resume-data.ts
 * -----------------------------------------------------------------------
 * Single source of truth for every fact shown on the site.
 * Both the UI components AND the AI chatbot system prompt (see
 * app/api/chat/route.ts) read from this file. This guarantees the
 * chatbot can never say anything about Khushi that isn't also visible
 * on the page — no drift, no invented claims.
 *
 * Update this file when the resume changes. Nothing else needs to change.
 * -----------------------------------------------------------------------
 */

export const profile = {
  name: "Khushi Krishnamurthy",
  title: "Business Analyst in Training",
  tagline: "BBA, Business Analytics — Class of 2028",
  location: "Navi Mumbai, India",
  email: "2025.khushis@isu.ac.in",
  phone: "+91 84529 27388",
  // One or two honest sentences. No invented years of experience, no
  // fabricated "elite professional" framing — just an accurate, confident
  // description of where she is right now and where she's headed.
  summary:
    "First-year Business Analytics student building fluency in Excel, SQL, and Python, one dataset at a time. Currently turning classroom frameworks into hands-on skill: pivot tables into pattern-finding, formulas into automation instincts, and a sales internship into a working sense of how business decisions actually get made.",
} as const;

export const education = [
  {
    degree: "BBA — Business Analytics",
    institute: "ITM Skills University, Kharghar, Navi Mumbai",
    year: "2025 – 2028",
    status: "In Progress",
    note: "Core coursework in business analytics, statistics, and data-driven decision making.",
  },
  {
    degree: "XII (IGCSE)",
    institute: "Omkar Cambridge International School",
    year: "2025",
    status: "Completed",
    note: "",
  },
  {
    degree: "X (IGCSE)",
    institute: "Ira Global School",
    year: "2023",
    status: "Completed",
    note: "",
  },
] as const;

export type SkillLevel = "learning" | "familiar" | "proficient";

export const skills = [
  {
    category: "Data & Spreadsheets",
    items: [
      { name: "Excel", level: "proficient" as SkillLevel, detail: "Data analysis, pivot tables, formulas" },
      { name: "SQL", level: "familiar" as SkillLevel, detail: "Querying and interpreting relational data" },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: "learning" as SkillLevel, detail: "Beginner-level scripting for data tasks" },
    ],
  },
  {
    category: "Visualization",
    items: [
      { name: "Power BI", level: "learning" as SkillLevel, detail: "Building simple dashboards and charts" },
      { name: "Tableau", level: "learning" as SkillLevel, detail: "Building simple dashboards and charts" },
    ],
  },
  {
    category: "Analytical & Working Style",
    items: [
      { name: "Data Interpretation", level: "familiar" as SkillLevel, detail: "Basic pattern-finding and problem-solving" },
      { name: "Attention to Detail", level: "proficient" as SkillLevel, detail: "Accuracy in data handling and reporting" },
    ],
  },
] as const;

export const experience = [
  {
    role: "Sales Executive (Internship)",
    org: "Pariyavaran Dkshata Mandal",
    period: "Internship",
    description:
      "Sold organic and environmentally-friendly products directly to customers — a hands-on introduction to how value gets communicated and how decisions actually get made on the ground, before ever touching a dashboard.",
    skillsGained: [
      "Team coordination and client relationship management",
      "Negotiation and persuasion",
      "Field sales and order acquisition",
      "Time management and target-oriented working",
    ],
  },
] as const;

export const achievements = [
  {
    title: "Bronze Medal — District-Level Running Competition",
    category: "Sports",
  },
  {
    title: "School & district-level running competitions",
    category: "Sports",
    description: "Consistent involvement in athletics and competitive events.",
  },
  {
    title: "Swimming competitions and sports activities",
    category: "Sports",
  },
  {
    title: "School events and competitions",
    category: "Academic & Team",
    description: "Actively contributed to team performance.",
  },
] as const;

export const interests = ["Reading", "Writing"] as const;

/**
 * Sections intentionally left empty for now — NOT deleted, so the
 * corresponding UI (see components/sections/) can render an honest
 * "in progress" state instead of fabricated content. Fill these in
 * the moment real work exists, and the site will pick it up automatically.
 */
export const projects: Array<{
  title: string;
  problem: string;
  impact: string;
  stack: string[];
  githubUrl?: string;
}> = [];

export const certifications: Array<{ name: string; issuer: string; year: string }> = [];

export const blogPosts: Array<{ title: string; slug: string; excerpt: string; date: string }> = [];

/**
 * Flattened, plain-text version of everything above — this is what gets
 * injected into the AI assistant's system prompt. Keeping it derived
 * (rather than hand-written) means the chatbot's knowledge can never
 * drift out of sync with the page content.
 */
export function buildResumeContext(): string {
  const lines: string[] = [];
  lines.push(`Name: ${profile.name}`);
  lines.push(`Title: ${profile.title} (${profile.tagline})`);
  lines.push(`Location: ${profile.location}`);
  lines.push(`Summary: ${profile.summary}`);

  lines.push(`\nEducation:`);
  education.forEach((e) =>
    lines.push(`- ${e.degree}, ${e.institute} (${e.year}, ${e.status})${e.note ? " — " + e.note : ""}`)
  );

  lines.push(`\nSkills:`);
  skills.forEach((group) => {
    lines.push(`- ${group.category}: ` + group.items.map((i) => `${i.name} (${i.level}: ${i.detail})`).join(", "));
  });

  lines.push(`\nExperience:`);
  experience.forEach((e) => {
    lines.push(`- ${e.role} at ${e.org}: ${e.description} Skills gained: ${e.skillsGained.join(", ")}.`);
  });

  lines.push(`\nAchievements & Activities:`);
  achievements.forEach((a) => lines.push(`- ${a.title}${a.description ? " — " + a.description : ""}`));

  lines.push(`\nInterests: ${interests.join(", ")}`);

  if (projects.length === 0) {
    lines.push(`\nProjects: None published yet — Khushi is early in her degree and building toward her first data project.`);
  }

  return lines.join("\n");
}
