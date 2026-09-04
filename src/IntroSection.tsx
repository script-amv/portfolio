import { Send } from "lucide-react";

import Section from "./Section";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import portrait from "./assets/portrait.png";

type IntroSectionProps = {
  content: { title: string; description: string; portraitAlt: string };
};

function IntroSection({ content }: IntroSectionProps) {
  return (
    <Section
      id="about"
      headingLevel="h1"
      fillViewport
      title={content.title}
      description={content.description}
      aside={
        <img
          className="order-first mx-0 size-28 shrink-0 rotate-3 rounded-2xl object-cover shadow-xl sm:size-64 md:order-none md:mx-auto md:rounded-3xl"
          src={portrait}
          alt={content.portraitAlt}
        />
      }
    >
      <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-muted">
        <a className="icon-link" href="https://github.com/script-amv" aria-label="GitHub" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>

        <a className="icon-link" href="https://www.linkedin.com/in/script-amv" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>

        <a
          className="flex min-h-10 min-w-0 items-center gap-2 rounded-full border border-line px-4 hover:border-accent-line hover:bg-surface-hover"
          href="mailto:dmitshostak@gmail.com"
        >
          <Send className="size-5" />
          dmitshostak@gmail.com
        </a>
      </div>
    </Section>
  );
}

export default IntroSection;
