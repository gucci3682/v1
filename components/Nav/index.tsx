// libraries
import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link as ScrollLink } from "react-scroll";

// components
import Hamburger from "@components/Nav/Hamburger";
import Menu from "@components/Nav/Menu";
import useScrollDirection from "@hooks/useScrollDirection";
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion";

const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection({ initialDirection: "down" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [menu, setMenu] = useState("");

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  const toggle = () => {
    if (!isOpen) {
      setMenu("opened");
    } else {
      setMenu("");
    }
    setIsOpen(!isOpen);
  };

  const handleLink = () => {
    setIsOpen(false);
    setMenu("");
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const tl = gsap.timeline({ delay: 0.4 });

    tl.from(
      "#brandLogo",
      { opacity: 0, duration: 0.3, ease: "expo.in" },
      "start"
    ).from("#navItems li", {
      opacity: 0,
      y: -10,
      stagger: 0.1,
      ease: "expo.out",
      duration: 0.5,
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 flex w-screen items-center justify-between p-4 font-poppins text-white-base sm:p-6 md:px-10
			${
        scrollDirection === "up" &&
        !scrolledToTop &&
        "h-[4.5rem] translate-y-0 bg-primary-dark bg-opacity-90 shadow-2xl shadow-zinc-900 duration-300 ease-in"
      }
			${
        scrollDirection === "down" &&
        !scrolledToTop &&
        "h-[4.5rem] translate-y-[-4.5rem] transform duration-300 ease-out"
      }
			`}
      >
        <div id="brandLogo" className="w-16 sm:w-20 md:w-24">
          <ScrollLink
            className="cursor-pointer"
            to="home"
            smooth
            duration={500}
            offset={-100}
            isDynamic
            onClick={handleLink}
          >
            <Image
              src="/brand_assets/logo-v1.svg"
              alt="brand logo"
              layout="intrinsic"
              width={185}
              height={92}
            />
          </ScrollLink>
        </div>
        <div>
          <ul id="navItems" className="flex space-x-14">
            <li className="hidden md:block">
              <ScrollLink
                className="cursor-pointer truncate font-mono transition ease-in hover:text-primary-light"
                to="about"
                smooth
                duration={500}
                offset={-100}
                isDynamic
              >
                1. About
              </ScrollLink>
            </li>
            <li className="hidden md:block">
              <ScrollLink
                className="cursor-pointer truncate font-mono transition ease-in hover:text-primary-light"
                to="skills"
                smooth
                duration={500}
                offset={-100}
                isDynamic
              >
                2. Work
              </ScrollLink>
            </li>
            <li className="hidden md:block">
              <ScrollLink
                className="cursor-pointer truncate font-mono transition ease-in hover:text-primary-light"
                to="projects"
                smooth
                duration={500}
                offset={-100}
                isDynamic
              >
                3. Projects
              </ScrollLink>
            </li>
            <li className="hidden md:block">
              <ScrollLink
                className="cursor-pointer truncate font-mono transition ease-in hover:text-primary-light"
                to="contact"
                smooth
                duration={500}
                offset={-100}
                isDynamic
              >
                4. Contact
              </ScrollLink>
            </li>
            <li className="hidden md:block">
              <a
                href="/Ng Gerald Resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
                className="rounded-sm px-4 py-2 font-mono text-sm text-primary-light shadow-md ring-1 ring-primary-light transition ease-in hover:bg-primary-light hover:bg-opacity-20"
              >
                Resume
              </a>
            </li>
            <li className="block md:hidden">
              <Hamburger
                onclick={toggle}
                classname={`hover:outline-none focus:outline-none menu ${menu}`}
              />
            </li>
          </ul>
        </div>
      </nav>
      <Menu isOpen={isOpen} linkHandler={handleLink} />
    </>
  );
};

export default Nav;
