import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Container from "@components/Container";
import Heading from "@components/Heading";
import MyStack from "@components/MyStack";
import { useEffect } from "react";
import useBlurImage from "@hooks/useBlurImage";
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.from("#about", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      ease: "power3.out",
      duration: 1,
      delay: 0.3,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container verticalPadding="py-28">
      <section
        id="about"
        style={{ minHeight: "80vh" }}
        className="flex flex-col justify-center"
      >
        <div className="mb-6 inline-flex items-center space-x-3" id="heading">
          <Heading type="h2" isMono color="text-primary-light">
            About Me
          </Heading>
        </div>
        <div className="grid-col-1 grid grid-rows-1 gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="mb-3 text-sm leading-6 text-white-dark sm:text-base sm:leading-7">
              Hello! I&lsquo;m Gerald and I like to code. I graduated from{" "}
              <a
                href="https://www.nus.edu.sg/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary-light hover:underline"
              >
                NUS
              </a>{" "}
              with a degree in{" "}
              <a
                href="https://www.comp.nus.edu.sg/programmes/ug/ba/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary-light hover:underline"
              >
                Business Analytics
              </a>
              .
            </p>
            <p className="mb-3 text-sm leading-6 text-white-dark sm:text-base sm:leading-7">
              I am a self-driven, independent learner who decided that
              programming was more fun than data science. Coming from NUS School
              of Computing, I have a strong technical foundation with a few
              professional technical experiences under my belt in various
              disciplines. Currently, I am doing DevOps to further expand my
              skillsets.
            </p>
            <p className="mb-3 text-sm leading-6 text-white-dark sm:text-base sm:leading-7">
              Here are a few technologies I&lsquo;ve been working with recently:
            </p>
            <MyStack />
          </div>
          <div className="relative mx-auto w-64 transform transition ease-in hover:-translate-y-2 sm:w-80">
            <Image
              className="z-0 rounded-lg shadow-md"
              src="/portfolio.png"
              alt="A photo of me"
              width={960}
              height={1280}
              layout="intrinsic"
              placeholder="blur"
              blurDataURL={useBlurImage(450, 450)}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
