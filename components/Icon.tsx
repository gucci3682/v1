import { IconBase } from "react-icons";
import {
  IconPython,
  IconReact,
  IconAWS,
  IconCSS,
  IconHTML,
  IconJavaScript,
  IconTypescript,
  IconNodeJS,
  IconTailwind,
  IconNextJS,
  IconSQL,
  IconJava,
  IconGit,
  IconMongoDB,
  IconClickHouse,
  IconPowerBI,
} from "./Icons";

export default function Icon({ name }: { name: string }) {
  switch (name) {
    case "AWS":
      return <IconAWS />;
    case "CSS":
      return <IconCSS />;
    case "Tailwind":
      return <IconTailwind />;
    case "NextJS":
      return <IconNextJS />;
    case "HTML":
      return <IconHTML />;
    case "JavaScript":
      return <IconJavaScript />;
    case "Typescript":
      return <IconTypescript />;
    case "NodeJS":
      return <IconNodeJS />;
    case "Python":
      return <IconPython />;
    case "React":
      return <IconReact />;
    case "SQL":
      return <IconSQL />;
    case "Java":
      return <IconJava />;
    case "Git":
      return <IconGit />;
    case "MongoDB":
      return <IconMongoDB />;
    case "ClickHouse":
      return <IconClickHouse />;
    case "Microsoft PowerBI":
      return <IconPowerBI />;
    default:
      return <IconBase />;
  }
}
