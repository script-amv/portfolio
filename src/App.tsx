import { useEffect, useState } from "react";

import ContactFooter from "./ContactFooter";
import Header from "./Header";
import ExperienceSection from "./ExperienceSection";
import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import { content, type Language } from "./content";

function App() {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem("language") === "ja" ? "ja" : "en",
  );

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <Header
        content={content[language]}
        language={language}
        onLanguageChange={() => setLanguage(language === "en" ? "ja" : "en")}
      />
      <main className="portfolio-canvas mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-section border-x border-line bg-canvas px-4 py-32 pb-0 transition-colors sm:px-8 md:px-12 lg:px-16 xl:px-24 xl:py-section xl:pb-0">
        <IntroSection content={content[language].intro} />
        <SkillsSection content={content[language].skills} />
        <ProjectsSection content={content[language].projects} />
        <ExperienceSection content={content[language].experience} />
        <ContactFooter content={content[language].contact} />
      </main>
    </>
  );
}

export default App
