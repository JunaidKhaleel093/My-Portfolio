import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'HomeHaven',
    description: 'A modern furniture e-commerce website built with React and Tailwind CSS. It features a responsive design, an intuitive user interface, and a functional cart system, offering users a seamless shopping experience.',
    image: './images/HomeHaven.png',
    demo: 'https://home-haven-black.vercel.app/',
    tech: ['React', 'Tailwind CSS', 'Redux', 'Framer-Motion'],
  },
  {
    id: 2,
    title: 'CodeSphere',
    description: 'A tech blog dedicated to web development, where I share tips, and the latest trends in front-end technologies. Join me as I explore the world of coding.',
    image: 'images/Code2.png',
    demo: 'https://code-sphere-lemon.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'MDX', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Jetset Journeys',
    description: 'A sleek and responsive travel blog website built with React and Tailwind CSS. It showcases captivating travel stories, stunning visuals, and an intuitive design to inspire and guide travel enthusiasts worldwide.',
    image: 'images/Travel.png',
    demo: 'https://jetset-journeys.vercel.app/',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 4,
    title: 'Slider-3D',
    description: 'A 3D Slider is a visually captivating carousel or slideshow that brings an added depth to content, creating a more immersive user experience.',
    image: 'images/3d-Web.png',
    demo: 'https://junaidkhaleel093.github.io/Slider-3D/',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Projects = () => {
  return (
    <div name="projects" className="w-full min-h-screen relative overflow-x-hidden mt-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}
            className="text-4xl font-bold inline text-[#3a4d76] border-b-4 border-binary"
          >
            Projects
          </p>
          <p
            style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            className="py-6 text-[18px] text-blue-200"
          >
            Check out some of my recent work
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 text-blue-200 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
