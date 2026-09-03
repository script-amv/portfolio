import Header from "./Header";
import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

function App() {
  return (
    <>
      <Header />
      <main className="portfolio-canvas mx-auto flex max-w-7xl flex-col gap-section border-x border-line bg-canvas px-24 py-section transition-colors">
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App
