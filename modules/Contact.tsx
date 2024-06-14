import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Container from "@components/Container";
import Heading from "@components/Heading";
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.from("#contact", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      ease: "power3.out",
      duration: 1,
      delay: 0.3,
    });
  }, [prefersReducedMotion]);

  return (
    <Container>
      <section
        id="contact"
        style={{ minHeight: "70vh" }}
        className="flex flex-col justify-center py-20"
      >
        <Heading
          type="h2"
          isMono
          color="text-primary-light"
          textSize="text-xl sm:text-2xl md:text-3xl"
          align="text-center"
          margin="mb-8"
        >
          Lets Get In Touch!
        </Heading>
        <p className="mx-auto mb-1 max-w-lg text-center text-sm text-white-dark md:text-base">
          Currently looking for full-time Software Engineering opportunities. If
          you think I make a great addition to your team or if you&apos;d like
          to chat, feel free to contact me! I&apos;ll be sure to get back to you
          as soon as I can.
        </p>
        <a
          href="mailto:ng.gerald.1998@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="mx-auto my-16 rounded-sm px-8 py-3 text-center font-mono text-sm text-primary-light shadow-md ring-1 ring-primary-light transition ease-in hover:bg-primary-light hover:bg-opacity-20 sm:py-4 sm:px-12"
        >
          Contact Me
        </a>
      </section>
    </Container>
  );
};

export default Contact;
