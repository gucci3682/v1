import { FiExternalLink, FiGithub } from "react-icons/fi";
import Heading from "@components/Heading";

interface OtherProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  url?: string;
  github?: string;
}

const OtherProjectCard = ({
  title,
  description,
  stack,
  url,
  github,
}: OtherProjectCardProps) => {
  return (
    <section className="max-w-xl transform rounded-lg bg-primary-base p-4 shadow-lg transition ease-in hover:-translate-y-2 sm:px-6 sm:py-5 md:px-8 md:py-6">
      <div className="mb-3 flex items-center justify-between">
        <div className="mt-3">
          <Heading
            type="h4"
            isClickable
            color="text-white-default hover:text-primary-light"
          >
            {url ? (
              <a
                href={url}
                aria-label="External link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </Heading>
        </div>
        <div className="inline-flex items-center space-x-4">
          {github && (
            <a
              href={github}
              aria-label="Github link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiGithub className="text-lg text-white-base transition ease-in hover:text-primary-light sm:text-xl" />
            </a>
          )}
          {url && (
            <a
              href={url}
              aria-label="External link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiExternalLink className="text-lg text-white-base transition ease-in hover:text-primary-light sm:text-xl" />
            </a>
          )}
        </div>
      </div>

      <p className="mb-3 text-sm leading-7 text-white-base">{description}</p>
      <div className="inline-flex items-center space-x-2 font-mono text-xs text-white-dark sm:space-x-4 sm:text-sm">
        {stack && stack.map((item) => <p key={item}>{item}</p>)}
      </div>
    </section>
  );
};

export default OtherProjectCard;
