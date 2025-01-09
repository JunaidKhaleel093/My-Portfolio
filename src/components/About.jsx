import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full relative overflow-x-hidden h-screen sm:mt-[-2rem] md:mt-[-3rem] lg:mt-[-4rem]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:text-right pb-8 pl-4"
          >
            <p className="text-4xl font-bold mt-10 mb-10 text-[#3a4d76] inline border-b-4 border-binary">
              About Me
            </p>
          </motion.div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1b2a4e] p-6 rounded-lg shadow-lg text-[#3a4d76]"
          >
            <h2 className="text-2xl font-bold mb-4 ">My Journey</h2>
            <p
              style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}
              className="text-cyan-100"
            >
              I began my web development journey with a passion for creating
              intuitive and responsive applications. Leveraging technologies
              like MongoDB, Express.js, React.js, Node.js, Tailwind CSS, and
              Bootstrap.
            </p>

           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1b2a4e] p-6 rounded-lg shadow-lg text-blue-200"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#3a4d76]">
            Tech That Inspires Me
            </h2>
            <p
              style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}
              className="text-cyan-100"
            >
               <div className="flex items-center justify-center gap-6 mt-6">
              <div className="text-center flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB Logo"
                  className="h-8 w-8"
                />
                <p className="mt-2 text-green-600">MongoDB</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                  alt="Express.js Logo"
                  className="h-8 w-8"
                />
                <p className="mt-2 text-black">Express.js</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React Logo"
                  className="h-8 w-8"
                />
                <p className="mt-2 text-blue-400">React.js</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  alt="Node.js Logo"
                  className="h-8 w-8"
                />
                <p className="mt-2 text-green-800">Node.js</p>
              </div>
            </div>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
