import { Send } from "lucide-react";
import { Dot } from "lucide-react";

import Section from "./Section";
import githubIcon from "./assets/icons/github.svg";
import linkedinIcon from "./assets/icons/linkedin.png";
import portrait from "./assets/portrait.png";

function IntroSection() {
  return (
    <Section
      headingLevel="h1"
      title="Hello, I'm Dmitrii — Web Developer."
      description="Based in Tokyo and available for new opportunities, I build thoughtful, reliable web applications across both frontend and backend. Explore my projects and experience, or get in touch to discuss an opportunity."
      aside={
        <img
          className="flex-1 min-w-64 max-md:max-h-64 rotate-3 rounded-3xl object-cover"
          src={portrait}
        />
      }
    >
      <div className="mt-4 opacity-60">
        <div className="flex gap-6">
          <a href="https://github.com/script-amv">
            <img className="h-5 w-5" src={githubIcon} />
          </a>

          <a href="https://www.linkedin.com/in/script-amv">
            <img className="h-5 w-5" src={linkedinIcon} />
          </a>

          <a className="flex items-center gap-2 font-semibold text-sm" href="mailto:dmitshostak@gmail.com">
            <Send className="size-4" />
            dmitshostak@gmail.com
          </a>
        </div>
      </div>
    </Section>
  );
}

export default IntroSection;
