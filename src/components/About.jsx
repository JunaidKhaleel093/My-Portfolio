import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="about" className="w-full h-screen sm:mt-[-2rem] md:mt-[-3rem] lg:mt-[-4rem]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:text-right pb-8 pl-4"
          >
            <p className="text-4xl font-bold mt-10 mb-10 text-[#3a4d76] inline border-b-4 border-binary">About Me</p>
          </motion.div>
        </div>

        {/* Box Section */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1b2a4e] p-6 rounded-lg shadow-lg text-[#3a4d76]"
          >
            <h2 className="text-2xl font-bold mb-4 ">Get to Know Me</h2>
            <p style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }} className="text-cyan-100">
              I'm a passionate front-end developer with a talent for creating
              UIs that are easy to use and responsive. My topics of interest are
              designing smooth, mobile-friendly digital experiences with HTML,
              CSS, and JavaScript. My mission is to close the gap between
              technology and design by enabling creative ideas to be created
              online.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1b2a4e] p-6 rounded-lg shadow-lg text-blue-200"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#3a4d76]">My Hobbies and Interests</h2>
            <p style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }} className="text-cyan-100">
              When I'm not coding, I love to play Badminton or watch Anime.
              These activities keep me creative and balanced, allowing me to
              bring fresh perspectives to my work. Whether it's playing
              Badminton, or watching Anime, I find joy in learning and
              challenging myself in new ways.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
