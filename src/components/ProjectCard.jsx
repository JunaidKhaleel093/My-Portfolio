import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="bg-[#112240] rounded-lg overflow-hidden shadow-xl transform-gpu relative overflow-x-hidden"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h3
          style={{ fontFamily: "Roboto, sans-serif" }}
          className="text-2xl font-bold mb-2 text-blue-200"
        >
          {project.title}
        </h3>
        <p
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-textSecondary mb-4"
        >
          {project.description}
        </p>

        <motion.div
          className="flex justify-center items-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="flex items-center gap-2 bg-cyan-700 px-4 py-2 rounded-lg text-md hover:opacity-90 hover:text-cyan-100 transition-colors text-white"
          >
            <ExternalLink size={18} />
            <span>View</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
