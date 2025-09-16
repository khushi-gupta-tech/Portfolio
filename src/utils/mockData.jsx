import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiPython } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, level: 100 },
  { name: "CSS", icon: FaCss3Alt, level: 95 },
  { name: "JavaScript", icon: FaJs, level: 80 },
  { name: "React", icon: FaReact, level: 80 },
  { name: "Tailwind", icon: SiTailwindcss, level: 80 },
  { name: "Redux", icon: SiRedux, level: 95 },
  { name: "Python", icon: SiPython, level: 70 },
  { name: "GitHub", icon: FaGithub, level: 95 },
];

export default skills;
