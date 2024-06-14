// libraries
import { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import useOnClickOutside from "@hooks/useClickOutside";

interface MenuProps {
  isOpen: boolean;
  linkHandler: () => void;
}

const Menu = ({ isOpen, linkHandler }: MenuProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(wrapperRef, linkHandler);

  return (
    <div
      className={`fixed right-0 z-50 transform pt-10 backdrop-filter ${
        isOpen ? "left-0 h-full w-full backdrop-blur-sm" : "backdrop-blur-none"
      } transition-all duration-200 ease-in`}
    >
      <div
        className={`absolute right-6 z-10 transform ${
          isOpen ? "translate-x-0" : "translate-x-52"
        } rounded-md bg-primary-base px-10 pt-5 pb-8 shadow-md transition-all duration-200 ease-in`}
        ref={wrapperRef}
      >
        <ul className="flex flex-col space-y-6">
          <li className="flex justify-start">
            <ScrollLink
              className="cursor-pointer font-mono text-primary-light transition ease-in hover:underline"
              to="about"
              smooth
              duration={200}
              offset={-100}
              isDynamic
              onClick={linkHandler}
            >
              About
            </ScrollLink>
          </li>
          <li className="flex justify-start">
            <ScrollLink
              className="cursor-pointer font-mono text-primary-light transition ease-in hover:underline"
              to="skills"
              smooth
              duration={200}
              offset={-100}
              isDynamic
              onClick={linkHandler}
            >
              Skills
            </ScrollLink>
          </li>
          <li className="flex justify-start">
            <ScrollLink
              className="cursor-pointer font-mono text-primary-light transition ease-in hover:underline"
              to="work"
              smooth
              duration={200}
              offset={-100}
              isDynamic
              onClick={linkHandler}
            >
              Work
            </ScrollLink>
          </li>
          <li className="flex justify-start">
            <ScrollLink
              className="cursor-pointer font-mono text-primary-light transition ease-in hover:underline"
              to="projects"
              smooth
              duration={200}
              offset={-100}
              isDynamic
              onClick={linkHandler}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="flex justify-start">
            <ScrollLink
              className="cursor-pointer font-mono text-primary-light transition ease-in hover:underline"
              to="contact"
              smooth
              duration={200}
              offset={-100}
              isDynamic
              onClick={linkHandler}
            >
              Contact
            </ScrollLink>
          </li>
          <li className="flex justify-start">
            <a
              href="/Ng Gerald Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-sm px-4 py-2 font-mono text-sm text-primary-light shadow-md ring-1 ring-primary-light transition ease-in hover:bg-primary-light hover:bg-opacity-20"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
