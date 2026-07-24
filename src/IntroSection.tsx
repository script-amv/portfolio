import { Send } from "lucide-react";

import Section from "./Section";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import portrait from "./assets/portrait.png";

function IntroSection() {
  return (
    <Section
      id="about"
      headingLevel="h1"
      title="Hello, I'm Dmitrii — Web Developer."
      description="Based in Tokyo and available for new opportunities, I build thoughtful, reliable web applications across both frontend and backend. Explore my projects and experience, or get in touch to discuss an opportunity."
      aside={
        <img
          className="flex-1 min-w-64 max-md:max-h-64 rotate-3 rounded-3xl object-cover shadow-xl"
          src={portrait}
          alt="Dmitrii"
        />
      }
    >
      <div className="mt-4 flex items-center gap-8 text-sm font-semibold text-muted">
        <a href="https://github.com/script-amv" aria-label="GitHub">
          <GitHubIcon />
        </a>

        <a href="https://www.linkedin.com/in/script-amv" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>

        <a
          className="flex items-center gap-2"
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
