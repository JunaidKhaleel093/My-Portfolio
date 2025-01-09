import { motion } from "framer-motion";

import {FaReact, FaNode, FaGithub, FaPython, FaBootstrap} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiExpress, SiVite, SiMongodb} from "react-icons/si";
import { DiDjango, DiJavascript1, DiJqueryLogo } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TiCss3 } from "react-icons/ti";
import { AiOutlineHtml5 } from "react-icons/ai";

const Skills = () => {
  const languages = [
    { id: 1, name: "HTML", icon: AiOutlineHtml5, color: "text-orange-600" },
    { id: 2, name: "CSS", icon: TiCss3, color: "text-blue-600" },
    {id: 3,name: "JavaScript",icon: DiJavascript1,color: "text-yellow-300"},
    { id: 4, name: "Python", icon: FaPython, color: "text-yellow-500" },
  ];

  const tools = [
    { id: 11, name: "MongoDB", icon: SiMongodb, color: "text-green-800" },
    { id: 12, name: "Express.js", icon: SiExpress, color: "text-black" },
    { id: 5, name: "React", icon: FaReact, color: "text-blue-700" },
    { id: 13, name: "Node.js", icon: FaNode, color: "text-green-900" },
    { id: 6, name: "Tailwind CSS",icon: SiTailwindcss, color: "text-cyan-700"},
    { id: 7, name: "Bootstrap", icon: FaBootstrap, color: "text-purple-800"},
    { id: 8, name: "jQuery", icon: DiJqueryLogo, color: "text-cyan-800" },
    { id: 15, name: "Django", icon: DiDjango, color: "text-green-900" },
    { id: 9, name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { id: 10, name: "Vite", icon: SiVite, color: "text-orange-800" },
    { id: 14, name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-pink-700" },
    { id: 16, name: "GitHub", icon: FaGithub, color: "text-gray" },
  ];

  return (
    <div
      name="skills"
      className="w-full min-h-screen relative overflow-x-hidden mt-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-4xl font-bold mt-10 mb-10 text-[#3a4d76] inline border-b-4 border-binary">
            Skills
          </p>
          <p
            style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}
            className="py-4 text-45px text-blue-200"
          >
            These are the technologies I have learned.
          </p>
        </motion.div>

        {/* Languages Section */}
        <div className="mt-8">
          <p className="text-3xl text-[#3a4d76] inline border-b-2 border-binary pb-2">
            Languages
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
            {languages.map(({ id, name, icon: Icon, color }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: id * 0.05 }}
                className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg bg-[#0e1728]"
              >
                <Icon className={`w-20 h-20 mx-auto ${color}`} />
                <p className="mt-4 text-white">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-8">
          <p className="text-3xl text-[#3a4d76] inline border-b-2 border-binary pb-2">
            Tools
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
            {tools.map(({ id, name, icon: Icon, color }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: id * 0.05 }}
                className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg bg-[#0e1728]"
              >
                <Icon className={`w-20 h-20 mx-auto ${color}`} />
                <p className="mt-4 text-white">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
