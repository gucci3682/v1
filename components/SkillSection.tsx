import React from "react";
import Icon from "@components/Icon";

interface Skill {
  title: string;
}

interface SkillSectionProps {
  name: string;
  icons: Skill[];
}

const SkillSection = ({ name, icons }: SkillSectionProps) => {
  return (
    <>
      <section
        className="pl-8 text-left font-mono text-lg font-semibold text-white-default"
        id="bullet"
      >
        <h3>{name}</h3>
      </section>
      <ul className="flex flex-wrap pt-3 pl-12">
        {icons.map((icon, index) => {
          return (
            <li
              key={index}
              className="relative z-0 mb-6 mr-4 flex h-10 w-10 flex-col place-content-end content-end items-center justify-end text-center text-primary-light/0 transition-[opacity_.5s,color_.5s] hover:text-primary-light/100 hover:text-opacity-100"
            >
              <Icon name={icon.title} />
              <i className="absolute -bottom-5 whitespace-nowrap font-mono text-xs">
                {icon.title}
              </i>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SkillSection;
