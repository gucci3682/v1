// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// lib
import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// components
import Container from "@components/Container";
import SkillSection from "@components/SkillSection";
import Heading from "@components/Heading";
import SelectionPanel from "@components/SelectionPanel";

// hooks
import { useD3 } from "@hooks/useD3";
import { range } from "@lib/functions";
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  svg: string;
  title: string;
}

interface SkillsProps {
  frameworks: Skill[];
  languages: Skill[];
}

const Skills = ({ frameworks, languages }: SkillsProps) => {
  // this D3 layout will create divs with background images that will be used as the skills icons
  // each div will have a class of 'skill-bubble' and an id of the skill name
  // each div can collide with each other using elastic collision

  const nodes = [{}, ...languages];
  const prefersReducedMotion = usePrefersReducedMotion();

  const [activeTabId, setActiveTabId] = useState(0);
  const [D3nodes, setD3Nodes] = useState(nodes);

  const setIcons = (index: number) => {
    d3.selectAll("#skill-bubble").remove();
    setActiveTabId(index);

    switch (index) {
      case 0:
        setD3Nodes([{}, ...languages]);
        break;
      case 1:
        setD3Nodes([{}, ...frameworks]);
        break;
      default:
        setD3Nodes([{}, ...frameworks]);
        break;
    }
  };

  const collide = (node: unknown) => {
    const radius = node.radius + 1;
    const nx1 = node.x - radius;
    const nx2 = node.x + radius;
    const ny1 = node.y - radius;
    const ny2 = node.y + radius;

    return (quad, x1, y1, x2, y2) => {
      if (quad.point && quad.point !== node) {
        let x = node.x - quad.point.x;
        let y = node.y - quad.point.y;
        let left = Math.sqrt(x ** 2 + y ** 2);
        const right = node.radius + quad.point.radius;
        if (left < right) {
          left = ((left - right) / left) * 0.1;
          node.x -= x *= left;
          node.y -= y *= left;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    };
  };

  const width = 400;
  const height = 300;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.from("#skills", {
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 60%",
      },
      opacity: 0,
      y: 40,
      ease: "power3.out",
      duration: 1,
      delay: 0.3,
    });
  }, []);

  const ref = useD3(
    (svg: d3.Selection<HTMLElement, unknown, null, undefined>) => {
      if (!prefersReducedMotion) {
        gsap.from(`#D3`, {
          opacity: 0,
          y: 40,
          ease: "power1.out",
          duration: 0.3,
          delay: 0.2,
        });
      }
      const root = D3nodes[0];

      root.radius = 0;
      root.fixed = true;

      const force = d3.layout
        .force()
        .gravity(0.08)
        .friction(0.2)
        .charge((_data, i) => {
          return i ? 0 : -2000;
        })
        .nodes(D3nodes)
        .size([width, height])
        .on("tick", () => {
          const q = d3.geom.quadtree(D3nodes);
          const n = D3nodes.length;

          range(0, n).forEach((_element, i) => {
            q.visit(collide(D3nodes[i]));
          });

          svg
            .selectAll("#skill-bubble")
            .style("left", (data) => {
              return `${data.x}px`;
            })
            .style("top", (data) => {
              return `${data.y}px`;
            });
        })
        .start();

      svg = d3.select("#D3").attr("preserveAspectRatio", "xMinYMin");

      svg
        .selectAll("#D3")
        .data(D3nodes.slice(1))
        .enter()
        .append("li")
        .attr("id", "skill-bubble")
        .attr(
          "class",
          "h-16 w-16 rounded-full translate-x-[-50%] translate-y-[-50%] absolute hover:text-primary-light/100 text-primary-light/0 hover:text-opacity-100 z-0 hover:z-50 text-center items-center"
        )
        .html((data) => {
          return data.svg;
        })
        .append("i")
        .attr("class", "font-poppins text-sm")
        .attr("id", "skill-name")
        .html((data) => {
          return data.title;
        });

      svg.on("mousemove", function () {
        const p1 = d3.mouse(this);
        root.px = p1[0];
        root.py = p1[1];
        force.resume();
      });
    },
    [D3nodes]
  );

  return (
    <Container verticalPadding="py-28 my-auto">
      <section className="flex h-full w-full flex-row items-start" id="skills">
        <div className="order-last ml-5 hidden flex-shrink-0 flex-grow-0 basis-5/12 lg:block">
          <ul className="relative h-full" ref={ref} id="D3"></ul>
        </div>
        <div>
          <div className="space-y-2 pb-5">
            <div
              className='mb-6 inline-flex w-full items-center space-x-3 after:relative after:ml-8 after:mb-2 after:block
							after:h-[2px] after:w-[20%] after:bg-primary-light after:content-[""]'
            >
              <Heading type="h2" isMono color="text-primary-light">
                My Skills
              </Heading>
            </div>

            <p className="text-md inline-block font-poppins text-white-default">
              Here are some Frameworks and Languages I&apos;ve worked with:
            </p>
          </div>
          <div className="hidden lg:block">
            <SelectionPanel
              activeTabId={activeTabId}
              onClickEffect={setIcons}
            />
          </div>
          <div className="relative flex w-full flex-col lg:hidden">
            <SkillSection name={"Languages"} icons={languages} />
            <SkillSection name={"Frameworks"} icons={frameworks} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
