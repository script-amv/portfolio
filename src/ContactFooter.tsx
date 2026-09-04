import { ArrowUpRight, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

type ContactFooterProps = {
  content: {
    title: string;
    description: string;
    availability: string;
    emailLabel: string;
    profilesLabel: string;
    copyright: string;
  };
};

function ContactFooter({ content }: ContactFooterProps) {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line pt-10 sm:pt-12 lg:pt-16">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-muted">{content.availability}</p>
          <h2 className="mt-3 text-3xl/tight font-semibold sm:text-4xl/tight lg:text-5xl/tight">{content.title}</h2>
          <p className="mt-4 text-base text-muted sm:text-lg">{content.description}</p>
        </div>

        <a className="group flex w-fit items-center gap-3 text-lg font-semibold sm:text-xl" href="mailto:dmitshostak@gmail.com">
          <Mail className="size-5 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
          <span className="border-b border-line pb-1 transition-colors group-hover:border-accent">{content.emailLabel}</span>
          <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-6 text-sm text-muted sm:mt-16">
        <p>{content.copyright}</p>
        <div className="flex items-center gap-4">
          <span>{content.profilesLabel}</span>
          <a className="grid size-9 place-items-center rounded-full border border-line hover:border-accent-line" href="https://github.com/script-amv" aria-label="GitHub">
            <GitHubIcon className="size-4" />
          </a>
          <a className="grid size-9 place-items-center rounded-full border border-line hover:border-accent-line" href="https://www.linkedin.com/in/script-amv" aria-label="LinkedIn">
            <LinkedInIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;
