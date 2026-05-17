import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import PulsingCircles from "./PulsingCircles";
import OrbitingCircle from "./OrbitingCircle";
import AnimatedSquares from "./AnimatedSquares";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const words = ["Full-Stack Developer", "MERN Stack Developer"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  const handleType = (count) => {
    setCurrentWord(words[count % words.length]);
  };

  return (
    <div className="w-full min-h-screen bg-[#061521] text-white overflow-hidden font-sans relative overflow-x-hidden">
      <FloatingShapes />
      <PulsingCircles />
      <OrbitingCircle />
      <AnimatedSquares />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center"
        >
          <motion.p
            style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}
            className="text-lg md:text-xl text-[#add8e6]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, My Name is
          </motion.p>

          <motion.h1
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-5xl md:text-6xl justify-center font-montserrat font-bold text-[#007bb8]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Mohammed Junaid Ismail
          </motion.h1>

          <motion.h2
            style={{ fontFamily: "Roboto, sans-serif", fontWeight: "700" }}
            className="text-4xl md:text-4xl font-bold text-[#3a4d76]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span
              style={{
                color:
                  currentWord === "MERN Stack Developer"
                    ? "#536878"
                    : "#3a4d76",
              }}
            >
              <Typewriter
                words={words}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={20}
                delaySpeed={2000}
                onType={handleType}
              />
            </span>
          </motion.h2>

          <motion.p
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
            className="text-[#afdbef] max-w-[600px] text-lg mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full Stack MERN Developer | Front-End Developer skilled in
            JavaScript, MongoDB, Express.js, React.js, Node.js. Proficient in
            creating responsive, scalable web applications and optimizing
            performance. Passionate about delivering impactful, user-centered
            solutions.
          </motion.p>
          <motion.div
            className="flex gap-6 items-center pt-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="px-6 py-3 bg-cyan-900/30 text-cyan-100 rounded-lg flex items-center gap-2 hover:bg-cyan-800/40 transition-colors border border-cyan-800/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/images/Junaid-MERN.pdf"
                download=""
                className="flex items-center"
              >
                <FileText className="w-5 h-5" />
                Download CV
              </a>
            </motion.button>

            <div className="flex gap-4">
              {[
                { Icon: FaGithub, url: "https://github.com/JunaidKhaleel093" },
                {
                  Icon: FaLinkedin,
                  url: "https://www.linkedin.com/in/junaidkhaleel093",
                },
              ].map(({ Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 hover:text-cyan-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
