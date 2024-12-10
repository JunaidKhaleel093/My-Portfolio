import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { FaBootstrap, } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiJquery, SiVite, SiFramer } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { id: 2, name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { id: 3, name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { id: 4, name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { id: 5, name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
    { id: 6, name: 'GitHub', icon: FaGithub, color: 'text-gray-900' },
    { id: 7, name: 'jQuery', icon: SiJquery, color: 'text-blue-800' },
    { id: 8, name: 'React', icon: FaReact, color: 'text-blue-400' },
    { id: 9, name: 'Vite', icon: SiVite, color:'text-orange-500'},
    { id: 10, name: 'Node.js', icon: FaNode, color: 'text-green-500' },
    { id: 11, name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
    { id: 12, name: 'Express.js', icon: SiExpress, color: 'text-blue-700' },
    { id: 13, name: 'Framer Motion', icon: SiFramer, color: 'text-pink-600' },
  ]

  return (
    <div name="skills" className="w-full min-h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold mt-10 mb-10 text-[#3a4d76]  inline border-b-4 border-binary">Skills</p>
          <p style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }} className="py-4 text-45px text-blue-200">These are the technologies I have learned.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-2 text-blue-200 sm:grid-cols-3 gap-8 text-center py-8">
          {skills.map(({ id, name, icon: Icon, color }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg bg-[#112240]"
            >
              <Icon className={`w-20 h-20 mx-auto ${color}`} />
              <p className="mt-4">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills