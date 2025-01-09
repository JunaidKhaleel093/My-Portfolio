import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: "Home", link: "/", icon: <FaHome /> },
    { id: 3, name: "Skills", link: "/skills", icon: <FaTools /> },
    { id: 4, name: "Projects", link: "/projects", icon: <FaProjectDiagram /> },
    { id: 5, name: "Experience", link: "/experience", icon: <FaBriefcase /> },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed z-50 bg-[#061521]  text-white transition-all duration-300">
      <div className="flex justify-center sm:justify-start items-center">
        <img
          src="/images/favicon-120.png"
          alt="Logo"
          className="h-16 sm:h-16 object-contain"
        />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-secondary duration-200"
          >
            <Link to={link} className="flex items-center space-x-2">
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden transition-transform duration-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-1/2 bg-[ #004242 ] backdrop-blur-md z-50 transform ${
          nav ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div
          onClick={() => setNav(false)}
          className="absolute top-4 right-6 cursor-pointer text-white text-3xl"
        >
          <FaTimes />
        </div>
        <ul className="flex flex-col justify-center items-center h-full">
          {links.map(({ id, name, link, icon }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl hover:text-secondary flex items-center space-x-2"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                className="flex items-center space-x-2"
              >
                {icon && <span className="text-lg">{icon}</span>}
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
