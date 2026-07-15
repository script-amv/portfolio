import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

function Section({ title, description, children }: SectionProps) {
  return (
    <section className="max-w-2xl">
      <h2 className="text-5xl/tight font-semibold">{title}</h2>
      <p className="mt-4 text-lg text-zinc-600">{description}</p>
      {children}
    </section>
  );
}

export default Section;
