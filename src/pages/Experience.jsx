import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Front-End Developer Intern",
      company: "Unified Mentor / Internship",
      duration: "2024",
      description:
        "As a passionate and eager-to-learn front-end developer, I have gained hands-on experience with HTML, CSS, JavaScript, and modern frameworks like React.js and Tailwind CSS. I am excited to build intuitive, responsive, and visually appealing user interfaces. My goal is to continuously improve my skills and contribute to creating engaging web experiences.",
    },
    {
      id: 2,
      role: "Freelance Web Developer",
      company: "Private Client",
      duration: "2024",
      description:
        "Created a professional interior design website for a company called 'EXCEL CONSTRUCTION & ELECTRICALS [ECE],' showcasing their commercial, luxury, and home-office projects with a modern and responsive layout tailored to their brand identity.",
    },
    {
      id: 3,
      role: "Front-End Developer (Personal Projects)",
      company: "Self-initiated",
      duration: "Ongoing",
      description:
        "Developed a E-Commerce website and Blog website using React.js, JavaScript and Tailwind CSS to demonstrate front-end skills. Worked on creating responsive and visually appealing user interfaces, focusing on performance and user experience.",
    },
    {
      id: 4,
      role: "Front-End Development Student",
      company: "Online Courses",
      duration: "2024-Present",
      description:
        "Completed various online courses on platforms like freeCodeCamp, and Udemy, focusing on HTML, CSS, JavaScript, and React. Gained a strong foundation in front-end development and modern web technologies.",
    },
    {
      id: 5,
      role: "Customer Support Engineer",
      company: "ECPL ( Expert Callers Pvt Ltd )",
      duration: "2023-2024",
      description: "Customer Support Engineer..",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen relative overflow-x-hidden mt-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold inline text-[#3a4d76]  border-b-4 border-binary">
            Experience
          </p>
          <p
            style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}
            className="py-4 text-45px text-blue-200"
          >
            My Professional Journey
          </p>
        </motion.div>

        <div className="mt-8">
          {experiences.map(({ id, role, company, duration, description }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="flex gap-4 mb-8"
            >
              <div className="mt-1">
                <FaBriefcase className="text-secondary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-textPrimary">{role}</h3>
                <p className="text-secondary">{company}</p>
                <p className="text-textSecondary">{duration}</p>
                <p className="text-textSecondary mt-2">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
