import Section from "./Section";
import githubIcon from "./assets/icons/github.svg";
import linkedinIcon from "./assets/icons/linkedin.png";
import portrait from "./assets/portrait.png";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Accessible, responsive, and performance-focused interfaces built with:",
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
      "Reliable APIs and data-driven applications using:",
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
      "Product design, development workflows, deployment, and measurement with:",
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
      "My educational background and professional certifications:",
    skills: [
      "BSc Computer Science — 2026",
      "JLPT N1",
      "EIKEN Grade 1",
      "Google Advanced Data Analytics Professional Certificate",
    ],
  },
];

function App() {
  return (
    <main className="mx-auto max-w-7xl border-x border-zinc-200 bg-white px-24 flex flex-col gap-[40vh] py-[40vh]">
      <Section
        headingLevel="h1"
        title="Hello, I'm Dmitrii — Web Developer."
        description="Based in Tokyo and available for new opportunities, I build thoughtful, reliable web applications across both frontend and backend. Explore my projects and experience, or get in touch to discuss an opportunity."
        aside={
          <img
            className="flex-1 min-w-64 max-md:max-h-64 rotate-3 rounded-3xl object-cover"
            src={portrait}
          />
        }
      >
        <div className="mt-4 opacity-60">
          <div className="flex gap-6">
            <a href="https://github.com/script-amv">
              <img className="h-5 w-5" src={githubIcon} />
            </a>

            <a href="https://www.linkedin.com/in/script-amv">
              <img className="h-5 w-5" src={linkedinIcon} />
            </a>
          </div>

          <a className="mt-4 block font-bold" href="mailto:dmitshostak@gmail.com">
            dmitshostak@gmail.com
          </a>
        </div>
      </Section>

      <Section
        title="Technologies I use, tools I trust, and qualifications I've earned."
        description="I work across frontend and backend development to build fast, accessible, and reliable web experiences. Here's a focused overview of the technologies I reach for, the tools that support my workflow, and the qualifications that have shaped my professional development."
      >
        <div className="mt-16 grid grid-cols-2 gap-16">
          {skillGroups.map((group) => (
            <section
              className="grid grid-cols-[8rem_minmax(0,1fr)] grid-rows-[auto_1fr_auto] gap-2"
              key={group.title}
            >
              <h3 className="font-semibold">{group.title}</h3>
              <p className="text-zinc-600">{group.description}</p>

              {group.skills.length > 0 && (
                <ul className="col-start-2 row-start-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      className="rounded-md border border-zinc-200 p-1 text-xs text-zinc-600 max-h-fit max-w-fit"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Section>
      
      <Section
        title="Projects I've built, problems I've solved, and ideas I've brought to life."
        description="I approach each project with a focus on thoughtful decisions, reliable implementation, and a clear purpose. Here's a selection of work that shows how I turn ideas and requirements into polished web applications across the stack."
      />
    </main>
  )
}

export default App
