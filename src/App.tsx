import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

function App() {
  return (
    <main className="portfolio-canvas mx-auto flex max-w-7xl flex-col gap-section border-x border-line bg-white px-24 py-section">
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}

export default App
