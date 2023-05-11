import { useEffect } from "react";
import { gsap } from "gsap";
import Container from "@components/Container";
import Heading from "@components/Heading";
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion";

const HeroSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.from("#home", {
      opacity: 0,
      y: 40,
      ease: "power3.out",
      duration: 1,
      delay: 0.3,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <div
        id="home"
        style={{ minHeight: "90vh" }}
        className="flex items-center"
      >
        <div>
          <Heading isMono type="h4" color="text-primary-light">
            Hi there, I&apos;m
          </Heading>
          <Heading type="h1" margin="mb-4 sm:mb-8">
            Gerald
          </Heading>
          <Heading type="h3" margin="mb-5" color="text-white-dark">
            I turn food and sleep into code
          </Heading>
          <p className="mb-14 max-w-xl text-white-dark sm:text-lg">
            I&lsquo;m a{" "}
            <a
              href="https://www.comp.nus.edu.sg/programmes/ug/ba/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-primary-light hover:underline"
            >
              Business Analytics
            </a>{" "}
            graduate from{" "}
            <a
              href="https://www.nus.edu.sg/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-primary-light hover:underline"
            >
              NUS
            </a>{" "}
            who aspires to be a software engineer.
          </p>

          <a
            href="https://www.linkedin.com/in/nggerald98/"
            rel="noopener noreferrer"
            target="_blank"
            className="mx-auto my-16 rounded-sm px-8 py-3 font-mono text-sm text-primary-light shadow-md ring-1 ring-primary-light transition ease-in hover:bg-primary-light hover:bg-opacity-20 sm:py-4 sm:px-12"
          >
            Hit me up on LinkedIn!
          </a>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
