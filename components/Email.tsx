import { gsap } from "gsap";
import { useEffect } from "react";
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion";

const Email = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const tl = gsap.timeline({ delay: 0.6 });

    tl.from("#sideEmailContainer", {
      opacity: 0,
      y: -15,
      ease: "expo.out",
      duration: 0.5,
    });
  }, [prefersReducedMotion]);
  return (
    <div
      id="sideEmailContainer"
      className="fixed bottom-32 -right-14 z-30 hidden lg:block"
    >
      <a
        className="font-mono text-sm text-white-dark transition ease-in hover:text-primary-light"
        href="mailto:ng.gerald.1998@gmail.com"
        aria-label="External link"
        rel="me noopener noreferrer"
        target="_blank"
        id="sideEmail"
      >
        <p className="rotate-90 transform">ng.gerald.1998@gmail.com</p>
      </a>
    </div>
  );
};

export default Email;
