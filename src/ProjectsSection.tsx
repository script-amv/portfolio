import { Link } from "lucide-react";

import Section from "./Section";

type ProjectData = {
  name: string;
  description: string;
  url: string;
  mark: string;
  accentClass: string;
};

const projects: ProjectData[] = [
  {
    name: "Atlas",
    description: "A collaborative workspace for turning product plans into focused delivery.",
    url: "https://example.com",
    mark: "A",
    accentClass: "bg-violet-700",
  },
  {
    name: "MotionKit",
    description: "A lightweight animation toolkit for polished, high-performance interfaces.",
    url: "https://example.com",
    mark: "M",
    accentClass: "bg-cyan-500",
  },
  {
    name: "Signal",
    description: "A real-time dashboard for tracking activity across distributed systems.",
    url: "https://example.com",
    mark: "S",
    accentClass: "bg-rose-500",
  },
  {
    name: "OrbitOS",
    description: "An internal operating system for managing complex team workflows.",
    url: "https://example.com",
    mark: "O",
    accentClass: "bg-slate-900",
  },
  {
    name: "Launchpad",
    description: "A planning tool for preparing and coordinating product releases.",
    url: "https://example.com",
    mark: "L",
    accentClass: "bg-blue-500",
  },
];

function getUrlLabel(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

function ProjectCard({
  name,
  description,
  url,
  mark,
  accentClass,
}: ProjectData) {
  return (
    <article className="flex flex-col rounded-xl p-4 transition-all hover:-translate-y-1 hover:bg-surface-hover">
      <div className="grid size-12 place-items-center rounded-full border border-line bg-white shadow-sm">
        <div
          className={`grid size-8 place-items-center rounded-full text-xs font-semibold text-white ${accentClass}`}
        >
          {mark}
        </div>
      </div>

      <h3 className="mt-8 text-lg font-semibold">{name}</h3>
      <p className="mt-4 text-muted">{description}</p>

      <a
        className="flex items-center gap-2 pt-8 text-sm font-semibold text-muted transition-colors hover:text-accent"
        href={url}
      >
        <Link className="size-4" />
        {getUrlLabel(url)}
      </a>
    </article>
  );
}

function ProjectsSection() {
  return (
    <Section
      title="Projects I've built, problems I've solved, and ideas I've brought to life."
      description="I approach each project with a focus on thoughtful decisions, reliable implementation, and a clear purpose. Here's a selection of work that shows how I turn ideas and requirements into polished web applications across the stack."
    >
      <div className="mt-16 grid grid-cols-3 gap-16">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.name} />
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
