import { Mail, Moon, Sun } from "lucide-react";
import { useState } from "react";

import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const controlClass =
  "grid size-8 shrink-0 place-items-center text-sm text-muted transition-colors hover:text-accent";

function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isJapanese, setIsJapanese] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 max-w-[calc(100vw-2rem)] -translate-x-1/2">
      <div className="flex items-center overflow-x-auto rounded-full border border-line bg-white/90 p-1 shadow-sm backdrop-blur-md">
        <nav className="flex" aria-label="Primary navigation">
          {navigation.map(({ label, href }) => (
            <a className="px-3 py-1 text-sm leading-6" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-1 flex border-l border-line pl-1">
          <a
            className={controlClass}
            href="https://github.com/script-amv"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            className={controlClass}
            href="https://www.linkedin.com/in/script-amv"
            aria-label="LinkedIn"
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
            onClick={() => setIsDark(!isDark)}
            aria-label="Preview theme switch"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            className={controlClass}
            type="button"
            onClick={() => setIsJapanese(!isJapanese)}
            aria-label="Preview language switch"
          >
            {isJapanese ? "EN" : "JA"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
