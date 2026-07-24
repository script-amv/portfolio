import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  description: string;
  children?: ReactNode;
  aside?: ReactNode;
  headingLevel?: "h1" | "h2";
};

function Section({
  id,
  title,
  description,
  children,
  aside,
  headingLevel: Heading = "h2",
}: SectionProps) {
  return (
    <section
      id={id}
      className={
        aside
          ? "scroll-mt-24 flex gap-16 max-md:flex-col-reverse"
          : "scroll-mt-24"
      }
    >
      <div>
        <div className="max-w-2xl">
          <Heading className="text-5xl/tight font-semibold">{title}</Heading>
          <p className="mt-4 text-lg text-muted">{description}</p>
        </div>
        {children}
      </div>
      {aside}
    </section>
  );
}

export default Section;
