import { Link } from "lucide-react";

import Section from "./Section";

type ProjectData = {
  name: string;
  description: string;
  url: string;
  mark: string;
  accentClass: string;
};

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
    <article className="flex min-w-0 flex-col rounded-xl p-4 transition-all hover:-translate-y-1 hover:bg-black/2">
      <div className="grid size-12 place-items-center rounded-full border border-line bg-canvas shadow-sm">
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

type ProjectsSectionProps = {
  content: { title: string; description: string; items: ProjectData[] };
};

function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <Section
      id="projects"
      title={content.title}
      description={content.description}
    >
      <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12 xl:gap-16">
        {content.items.map((project) => (
          <ProjectCard {...project} key={project.name} />
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
