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
      title={content.title}
      description={content.description}
      aside={
        <img
          className="mx-auto w-full max-w-xs rotate-3 rounded-3xl object-cover shadow-xl md:max-w-none"
          src={portrait}
          alt={content.portraitAlt}
        />
      }
    >
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-muted sm:gap-x-8">
        <a className="grid size-10 place-items-center" href="https://github.com/script-amv" aria-label="GitHub">
          <GitHubIcon />
        </a>

        <a className="grid size-10 place-items-center" href="https://www.linkedin.com/in/script-amv" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>

        <a
          className="flex min-h-10 min-w-0 items-center gap-2 break-all"
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
