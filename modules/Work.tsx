import { useEffect, useState, useRef, useCallback, KeyboardEvent } from "react";
import { gsap } from "gsap";
import { KEY_CODES } from "@lib/data";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Icon from "@components/Icon";
import Heading from "@components/Heading";
import Container from "@components/Container";
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion";

// types
import { type Job } from "@interfaces/util";

interface WorkProps {
  jobs: Job[];
}

gsap.registerPlugin(ScrollTrigger);

const Work = ({ jobs }: WorkProps) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number>(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.from("#work", {
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 40%",
      },
      opacity: 0,
      y: 40,
      ease: "power3.out",
      duration: 1,
      delay: 0.3,
    });
  }, [prefersReducedMotion]);

  // if activeTabId changes, use gsap to fade the content in
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.from(`#tab-panels`, {
      opacity: 0,
      y: 40,
      ease: "power4.out",
      duration: 0.5,
      delay: 0.2,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabId]);

  const focusTab = useCallback(() => {
    if (tabs.current[tabFocus as number]) {
      tabs.current[tabFocus as number]?.focus();
      return;
    }
    if (tabFocus && tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    if (tabFocus && tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  }, [tabFocus]);

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [focusTab, tabFocus]);

  // Focus on tabs when using up & down arrow keys
  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <Container verticalPadding="py-28 my-auto">
      <section
        id="work"
        style={{ minHeight: "80vh" }}
        className="flex flex-col justify-center"
      >
        <div
          className='fter:content-[""] mb-6 inline-flex items-center space-x-3 after:relative after:ml-8 after:mb-2
					after:block after:h-[2px] after:w-[20%] after:bg-primary-light'
        >
          <Heading type="h2" isMono color="text-primary-light">
            Where I&apos;ve Worked
          </Heading>
        </div>
        <div
          className="flex md:min-h-[20rem] max_sm:block"
          aria-label="work experience content"
        >
          <section
            className="mb-2 box-content w-full align-middle md:w-1/3"
            id="work-tabs"
          >
            <ul
              className="z-3 p-auto relative w-full max_sm:flex max_sm:overflow-x-scroll"
              onKeyDown={(e) => onKeyDown(e)}
              aria-label="work experience tabs"
            >
              {jobs.map((job, index) => (
                <li key={index} className="sm:md-0 md:mb-0">
                  <button
                    className={`flex h-full w-full items-center border-b-2 border-solid bg-transparent px-5 py-2 sm:border-b-0 sm:border-l-2 md:w-[95%] md:border-l-2 md:border-b-0 ${
                      activeTabId === index
                        ? "border-primary-light bg-primary-light bg-opacity-10 text-primary-light"
                        : "border-slate-700 text-white-base"
                    } overflow-hidden break-words text-left font-mono text-sm transition ease-in hover:bg-primary-light hover:bg-opacity-10 hover:text-primary-light`}
                    onClick={() => setActiveTabId(index)}
                    ref={(el) => (tabs.current[index] = el)}
                    role="tab"
                    aria-label="tab button"
                    aria-selected={activeTabId === index}
                    aria-controls={`panel-${index}`}
                  >
                    {job.company}
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <section
            className="relative ml-0 w-full sm:ml-5 md:w-2/3"
            aria-label="tab panels"
            id="tab-panels"
          >
            <div className="h-auto w-full">
              <Heading type="h4" isMono={false} color="text-white-default">
                <span>{jobs[activeTabId]?.title}</span>
                <span className="text-primary-light">
                  &nbsp;@&nbsp;
                  <a
                    href={jobs[activeTabId]?.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="hover:underline">
                      {jobs[activeTabId]?.company}
                    </span>
                  </a>
                </span>
              </Heading>

              <p className="text-md mb-6 font-mono text-white-dark">
                {`${jobs[activeTabId]?.range}  •  ${jobs[activeTabId]?.role}`}
                {jobs[activeTabId]?.recommendation && (
                  <span className="text-primary-light">
                    &nbsp;-&nbsp;
                    <a
                      href={jobs[activeTabId]?.recommendation}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="hover:underline">
                        Letter of Recommendation
                      </span>
                    </a>
                  </span>
                )}
              </p>
              <hr className="h-0 border-[1px] border-white-base border-opacity-20" />
              <ul className="m-0 pt-6 text-base text-white-dark">
                {jobs[activeTabId]?.content.map(
                  (bullet: string, index: number) => (
                    <li
                      key={index}
                      className="relative mb-2 pl-7 font-poppins"
                      id="bullet"
                    >
                      <p>{bullet}</p>
                    </li>
                  )
                )}
              </ul>
              <ul
                className="flex flex-wrap justify-start p-2 pt-6"
                id="stack-list"
                aria-label="stack-list"
              >
                {jobs[activeTabId]?.techstack.map((stack, index) => (
                  <li
                    key={index}
                    className="relative z-0 mb-6 mr-4 flex h-10 w-10 flex-col place-content-end content-end items-center justify-end text-primary-light/0 transition-[opacity_.5s,color_.5s] hover:text-primary-light/100 hover:text-opacity-100"
                  >
                    <Icon name={stack} />
                    <i className="absolute -bottom-5 whitespace-nowrap font-mono text-xs">
                      {stack}
                    </i>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </Container>
  );
};

export default Work;
