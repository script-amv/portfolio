import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description: string;
  children?: ReactNode;
  aside?: ReactNode;
  headingLevel?: "h1" | "h2";
};

function Section({
  title,
  description,
  children,
  aside,
  headingLevel: Heading = "h2",
}: SectionProps) {
  return (
    <section
      className={
        aside
          ? "flex gap-16 max-md:flex-col-reverse"
          : ""
      }
    >
      <div className="max-w-2xl">
        <Heading className="text-5xl/tight font-semibold">{title}</Heading>
        <p className="mt-4 text-lg text-zinc-600">{description}</p>
        {children}
      </div>
      {aside}
    </section>
  );
}

export default Section;
