type SectionProps = {
  title: string;
  description: string;
};

function Section({title, description}: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default Section;
