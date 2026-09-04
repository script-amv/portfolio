import { Mail, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import type { Content, Language } from "./content";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const controlClass =
  "grid size-10 shrink-0 place-items-center rounded-full text-sm text-muted hover:bg-surface-hover hover:text-accent";

type HeaderProps = {
  content: Pick<Content, "navigation" | "controls">;
  language: Language;
  onLanguageChange: () => void;
};

function Header({ content, language, onLanguageChange }: HeaderProps) {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    function updateHeaderVisibility() {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - previousScrollY;

      if (currentScrollY < 24) {
        setIsHidden(false);
      } else if (Math.abs(scrollDifference) > 8) {
        setIsHidden(scrollDifference > 0);
      }

      previousScrollY = currentScrollY;
    }

    window.addEventListener("scroll", updateHeaderVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderVisibility);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;

    document.documentElement.classList.toggle("dark", nextTheme);
    setIsDark(nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return (
    <header
      className={`fixed top-3 left-1/2 z-50 w-max max-w-[calc(100vw-1rem)] -translate-x-1/2 transition-transform duration-300 ease-in-out motion-reduce:transition-none sm:top-4 sm:max-w-[calc(100vw-2rem)] ${
        isHidden
          ? "pointer-events-none -translate-y-20"
          : "translate-y-0"
      }`}
    >
      <div className="flex max-w-full items-center overflow-hidden rounded-full border border-line bg-canvas/90 p-1 shadow-sm backdrop-blur-md transition-colors">
        <nav className="flex min-w-0 flex-1 overflow-x-auto" aria-label="Primary navigation">
          {content.navigation.map(({ label, href }) => (
            <a
              className="shrink-0 rounded-full px-2 py-2 text-xs leading-5 hover:bg-surface-hover sm:px-3 sm:text-sm"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-1 hidden border-l border-line pl-1 min-[421px]:flex">
          <a
            className={controlClass}
            href="https://github.com/script-amv"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            className={controlClass}
            href="https://www.linkedin.com/in/script-amv"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            className={controlClass}
            href="mailto:dmitshostak@gmail.com"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
        </div>

        <div className="ml-1 flex border-l border-line pl-1">
          <button
            className={controlClass}
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? content.controls.switchToLight
                : content.controls.switchToDark
            }
            aria-pressed={isDark}
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            className={controlClass}
            type="button"
            onClick={onLanguageChange}
            aria-label={
              language === "ja"
                ? content.controls.switchToEnglish
                : content.controls.switchToJapanese
            }
          >
            {language === "ja" ? "EN" : "JA"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
