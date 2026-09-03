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
          ? "scroll-mt-28 grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(12rem,20rem)] md:gap-12 lg:gap-16"
          : "scroll-mt-24"
      }
    >
      <div className="min-w-0">
        <div className="max-w-2xl">
          <Heading className="text-3xl/tight font-semibold sm:text-4xl/tight lg:text-5xl/tight">{title}</Heading>
          <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
        </div>
        {children}
      </div>
      {aside}
    </section>
  );
}

export default Section;
