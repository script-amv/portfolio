import { ArrowUpRight, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

type ContactFooterProps = {
  content: {
    title: string;
    description: string;
    availability: string;
    email: string;
    profilesLabel: string;
    copyright: string;
  };
};

function ContactFooter({ content }: ContactFooterProps) {
  return (
    <footer
      id="contact"
      className="mt-section scroll-mt-24 -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-24"
    >
      <div className="border-t border-line px-4 pt-10 pb-4 sm:px-8 sm:pt-12 sm:pb-4 md:px-12 md:pb-8 lg:px-16 lg:pt-16 lg:pb-12 xl:px-24 xl:pb-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-muted">{content.availability}</p>
            <h2 className="mt-3 text-3xl/tight font-semibold sm:text-4xl/tight lg:text-5xl/tight">
              {content.title}
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              {content.description}
            </p>
          </div>

          <a
            className="group flex w-fit items-center gap-3 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-accent-line hover:bg-surface-hover sm:text-base"
            href={`mailto:${content.email}`}
          >
            <Mail
              className="size-5 text-muted transition-colors group-hover:text-accent"
              aria-hidden="true"
            />
            <span>{content.email}</span>
            <ArrowUpRight
              className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 text-sm text-muted sm:mt-16">
          <p>{content.copyright}</p>
          <div className="flex items-center justify-center gap-4">
            <span className="sr-only">{content.profilesLabel}</span>
            <a
              className="grid size-10 place-items-center rounded-full border border-line hover:border-accent-line"
              href="https://github.com/script-amv"
              aria-label="GitHub"
            >
              <GitHubIcon className="size-4" />
            </a>
            <a
              className="grid size-10 place-items-center rounded-full border border-line hover:border-accent-line"
              href="https://www.linkedin.com/in/script-amv"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;
