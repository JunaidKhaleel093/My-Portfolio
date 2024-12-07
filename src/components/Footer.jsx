import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#061521] text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

          <div className="text-left mb-4 md:mb-0">
          <p className="mb-1 ">&copy; {new Date().getFullYear()} Junaid Ismail. All rights reserved.</p>
          </div>

          <div className="w-full md:w-[calc(100%-200px)] border-t-2 border-cyan-800 mx-4 mb-4 md:mb-0"></div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/JunaidKhaleel093"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 hover:text-cyan-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/JunaidKhaleel96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 hover:text-cyan-500 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/mohammed_junaid_khaleel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 hover:text-cyan-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/junaidkhaleel093"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 hover:text-cyan-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
