import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";
import { gsap } from "gsap";
import { useEffect } from "react";
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion";

const Social = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const tl = gsap.timeline({ delay: 0.6 });

    tl.from("#socialItems a", {
      opacity: 0,
      y: -10,
      stagger: 0.1,
      ease: "expo.out",
      duration: 0.5,
    });
  }, [prefersReducedMotion]);
  return (
    <div
      id="socialItems"
      className="fixed bottom-32 left-8 z-30 hidden lg:flex lg:flex-col lg:justify-center lg:space-y-7"
    >
      <a
        href="https://github.com/gucci3682"
        aria-label="External link"
        rel="me noopener noreferrer"
        target="_blank"
      >
        <FiGithub className="transform text-lg text-white-dark transition ease-in hover:-translate-y-0.5 hover:text-primary-light sm:text-xl" />
      </a>
      <a
        href="https://www.instagram.com/guccilerino/"
        aria-label="External link"
        rel="me noopener noreferrer"
        target="_blank"
      >
        <FiInstagram className="transform text-lg text-white-dark transition ease-in hover:-translate-y-0.5 hover:text-primary-light sm:text-xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/nggerald98/"
        aria-label="External link"
        rel="me noopener noreferrer"
        target="_blank"
      >
        <FiLinkedin className="transform text-lg text-white-dark transition ease-in hover:-translate-y-0.5 hover:text-primary-light sm:text-xl" />
      </a>
      <a
        href="mailto:ng.gerald.1998@gmail.com"
        aria-label="External link"
        rel="me noopener noreferrer"
        target="_blank"
      >
        <FiMail className="transform text-lg text-white-dark transition ease-in hover:-translate-y-0.5 hover:text-primary-light sm:text-xl" />
      </a>
    </div>
  );
};

export default Social;
