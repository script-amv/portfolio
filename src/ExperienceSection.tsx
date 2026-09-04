import { ArrowUpRight } from "lucide-react";

import Section from "./Section";

type ExperienceItem = {
  role: string;
  company: string;
  description: string;
  website: string;
  websiteLabel: string;
};

type ExperienceSectionProps = {
  content: { title: string; description: string; items: ExperienceItem[] };
};

function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <Section id="experience" title={content.title} description={content.description}>
      <ol className="mt-10 space-y-8 sm:mt-12 lg:mt-16">
        {content.items.map((item) => (
          <li className="relative grid gap-3 border-l border-line pb-8 pl-6 last:pb-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-8 sm:pl-8" key={item.company}>
            <span className="absolute top-1.5 -left-1.5 size-3 rounded-full border-2 border-canvas bg-accent" aria-hidden="true" />

            <div>
              <p className="text-sm font-semibold text-muted">{item.company}</p>
              <h3 className="mt-1 text-xl font-semibold sm:text-2xl">{item.role}</h3>
              <p className="mt-3 max-w-2xl text-muted">{item.description}</p>
            </div>

            <a className="flex w-fit items-center gap-1 text-sm font-semibold text-muted hover:text-accent sm:pt-1" href={item.website} target="_blank" rel="noreferrer">
              {item.websiteLabel}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ExperienceSection;
