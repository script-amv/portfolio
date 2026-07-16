import Section from "./Section";

type SkillGroupData = {
  title: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroupData[] = [
  {
    title: "Frontend",
    description:
      "Accessible, responsive interfaces built for speed and usability:",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Vite",
      "Vitest",
      "Playwright",
    ],
  },
  {
    title: "Backend",
    description:
      "Reliable APIs and data-driven systems built for scale and clarity:",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "REST",
      "GraphQL",
      "Docker",
    ],
  },
  {
    title: "Design",
    description:
      "Product design, delivery, and measurement for stronger outcomes:",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "GitHub",
      "CI/CD",
      "Vercel",
      "Postman",
      "Google Analytics",
    ],
  },
  {
    title: "Education",
    description:
      "Education and credentials supporting continued professional growth:",
    skills: [
      "BSc Computer Science — 2026",
      "JLPT N1",
      "EIKEN Grade 1",
      "Google Advanced Data Analytics Professional Certificate",
    ],
  },
];

function SkillGroup({ title, description, skills }: SkillGroupData) {
  return (
    <section className="grid content-start grid-cols-[8rem_minmax(0,1fr)] gap-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-muted">{description}</p>

      <ul className="col-start-2 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            className="rounded-md border border-line p-1 text-xs text-muted"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

function SkillsSection() {
  return (
    <Section
      title="Technologies I use, tools I trust, and qualifications I've earned."
      description="I work across frontend and backend development to build fast, accessible, and reliable web experiences. Here's a focused overview of the technologies I reach for, the tools that support my workflow, and the qualifications that have shaped my professional development."
    >
      <div className="mt-16 grid grid-cols-2 gap-16">
        {skillGroups.map((group) => (
          <SkillGroup {...group} key={group.title} />
        ))}
      </div>
    </Section>
  );
}

export default SkillsSection;
