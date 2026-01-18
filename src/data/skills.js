import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFastapi,
  SiMysql,
  SiPython,
  SiPostman,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React JS", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: FaServer },
      { name: "REST APIs", icon: SiPostman },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "DBMS Concepts", icon: FaDatabase },
    ],
  },
  {
    category: "Tools & Concepts",
    skills: [
      { name: "Git & GitHub", icon: FaGithub },
      { name: "System Design", icon: FaServer },
      { name: "Data Structures & Algorithms", icon: FaJs },
    ],
  },
];

export default skillsData;
