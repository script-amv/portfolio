import IntroSection from "./IntroSection";
import Section from "./Section";
import SkillsSection from "./SkillsSection";

function App() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-section border-x border-line bg-white px-24 py-section">
      <IntroSection />
      <SkillsSection />

      <Section
        title="Projects I've built, problems I've solved, and ideas I've brought to life."
        description="I approach each project with a focus on thoughtful decisions, reliable implementation, and a clear purpose. Here's a selection of work that shows how I turn ideas and requirements into polished web applications across the stack."
      />
    </main>
  );
}

export default App
