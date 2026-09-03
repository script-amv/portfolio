import Section from "./Section";

type SkillGroupData = {
  title: string;
  description: string;
  skills: string[];
};

function SkillGroup({ title, description, skills }: SkillGroupData) {
  return (
    <section className="grid content-start gap-2 border-l border-line pl-4 transition-colors hover:border-accent-line sm:grid-cols-[8rem_minmax(0,1fr)] sm:pl-6 lg:pl-8">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-muted">{description}</p>

      <ul className="flex flex-wrap gap-2 sm:col-start-2">
        {skills.map((skill) => (
          <li
            className="rounded-md border border-line p-1 text-xs text-muted transition-colors hover:border-accent-line hover:text-accent"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

type SkillsSectionProps = {
  content: { title: string; description: string; groups: SkillGroupData[] };
};

function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <Section
      id="skills"
      title={content.title}
      description={content.description}
    >
      <div className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-2 sm:gap-12 lg:mt-16 lg:gap-16">
        {content.groups.map((group) => (
          <SkillGroup {...group} key={group.title} />
        ))}
      </div>
    </Section>
  );
}

export default SkillsSection;
