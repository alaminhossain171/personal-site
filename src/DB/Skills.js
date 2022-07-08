import { AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import {
  TbBrandBootstrap,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandSass,
} from "react-icons/tb";
const data = [
  {
    title: "JS",
    icon: <TbBrandJavascript size={30} />,
  },
  {
    title: "ReactJs",
    icon: <FaReact size={30} />,
  },
  {
    title: "NextJs",
    icon: <TbBrandNextjs size={30} />,
  },
  {
    title: "React Native",
    icon: <TbBrandReactNative size={30} />,
  },
  {
    title: "Bootstrap",
    icon: <TbBrandBootstrap size={30} />,
  },
  {
    title: "Sass",
    icon: <TbBrandSass size={30} />,
  },
  {
    title: "Jest",
    icon: <SiJest size={30} />,
  },
  {
    title: "Git",
    icon: <AiFillGithub size={30} />,
  },
];
export default data;
