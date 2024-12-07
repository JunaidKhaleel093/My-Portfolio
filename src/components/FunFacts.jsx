import { motion } from "framer-motion";

const FunFacts = () => {
  const facts = [
    {
      id: 1,
      title: "Badminton Enthusiast",
      content: "I play badminton competitively and find it helps sharpen my focus.",
    },
    {
      id: 2,
      title: "Fitness Enthusiast",
      content: "Staying active through regular workouts keeps me physically and mentally sharp, ready for any challenge.",
    },
    {
      id: 3,
      title: "Creative Problem-Solver",
      content: "I enjoy tackling complex challenges, breaking them down into manageable solutions that drive results.",
    },
    {
      id: 4,
      title: "Visionary Designer",
      content: "I love crafting user-centric designs that seamlessly blend functionality with aesthetics.",
    },
    {
      id: 5,
      title: "Technology Explorer",
      content: "Exploring the latest trends and tools in technology fuels my curiosity and keeps my skills cutting-edge.",
    },
  ];

  return (
    <div name="funfacts" className="w-full min-h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold text-[#3a4d76] inline border-b-4 border-binary">
            Fun Facts
          </p>
          <p style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }} className="py-4 text-45px text-blue-200">A little more about me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {facts.map(({ id, title, content }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="bg-[#112240] p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-[#3a4d76] text-xl font-bold mb-2">{title}</h3>
              <p className="text-textSecondary">{content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;