import Image from "next/image";
import Heading from "./Heading";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import useBlurImage from "@hooks/useBlurImage";

interface FeaturedProjectCardProps {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  imageWidth?: number;
  imageHeight: number;
  stack?: string[];
  url?: string;
  github?: string;
  contentSide?: "right" | "left";
}

const FeaturedProjectCard = ({
  title,
  subTitle,
  description,
  image,
  imageWidth = 695,
  imageHeight,
  stack,
  url,
  github,
  contentSide = "right",
}: FeaturedProjectCardProps) => {
  return (
    <div className="relative my-6 flex items-center sm:my-8 md:my-16">
      <div className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2">
        <div
          className={`relative col-span-1 ${
            contentSide === "right"
              ? "md:col-start-1 md:col-end-2"
              : "md:col-start-2 md:col-end-3"
          }`}
        >
          <a
            href={url}
            aria-label="External link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="absolute z-10 h-full w-full rounded-md bg-primary-dark bg-opacity-90 shadow-2xl transition ease-in sm:rounded-lg md:bg-opacity-50 md:hover:bg-transparent" />
            <Image
              className="z-0 rounded-md sm:rounded-lg"
              src={image}
              alt={title}
              layout="intrinsic"
              width={imageWidth}
              height={imageHeight}
              placeholder="blur"
              blurDataURL={useBlurImage(imageWidth, imageHeight)}
            />
          </a>
        </div>
      </div>
      <div className="absolute top-0 grid h-full grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
        <div
          className={`col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-3 ${
            contentSide === "right"
              ? "md:col-start-2 md:col-end-4 md:items-end lg:col-start-3 lg:col-end-6"
              : "md:col-start-1 md:col-end-3 md:items-start lg:col-start-1 lg:col-end-4"
          } z-20 p-8`}
        >
          <a
            href={url}
            aria-label="External link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Heading
              type="h3"
              isClickable
              margin="mb-1 sm:mb-2"
              align={contentSide === "left" ? "text-left" : "md:text-right"}
              color="text-white-default md:text-white-base hover:text-primary-light"
            >
              {title}
            </Heading>
          </a>

          <p
            className={`font-mono text-sm text-primary-light sm:text-base ${
              contentSide === "left" ? "text-left" : "md:text-right"
            } mb-5`}
          >
            {subTitle}
          </p>

          <div className="mb-4 rounded-lg shadow-lg sm:mb-5 md:bg-primary-base md:p-6">
            <p
              className={`} text-sm text-white-base sm:text-base
							md:text-white-dark`}
            >
              {description}
            </p>
          </div>
          <div
            className={`inline-flex items-center space-x-2 font-mono text-xs sm:space-x-4 sm:text-sm ${
              contentSide === "left" ? "text-left" : "md:text-right"
            } mb-4 text-white-dark sm:mb-5`}
          >
            {stack && stack.map((item) => <p key={item}>{item}</p>)}
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
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
