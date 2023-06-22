import { Link } from "react-scroll";
import logo from "./assets/logo.png";
import { useState } from "react";
import hamburger from "./assets/hamburger.png";
import { motion } from "framer-motion";

const hamburgerMenu = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
    transition: {
      duration: 0.5,
    },
  },
};

const Navigation = ({ home, about, skill, project, contact }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-opacity-80 py-4 transition-all duration-300">
      <div className="max-w-screen-xl h-20 flex flex-wrap items-center justify-between mx-auto xs:p-0 md:p-4">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <img src={logo} className="h-16 mr-3" alt="Agus Wirayasa Logo" />
          <span className="self-center text-2xl text-white font-bold whitespace-nowrap"></span>
        </Link>
        <button
          type="button"
          className={`xs:block md:hidden ml-3 text-gray-500 focus:outline-none ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={handleMenuToggle}
          aria-label="Open mobile menu"
        >
          {isMenuOpen ? (
            <svg
              fill="#ffffff"
              height="30"
              width="30"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-46.08 -46.08 552.93 552.93"
              xmlSpace="preserve"
              stroke="#ffffff"
              strokeWidth="0.00460775"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{" "}
              </g>
            </svg>
          ) : (
            <img src={hamburger} alt="menu" className="h-7" />
          )}
        </button>
        <div
          className="xs:hidden  md:flex justify-between "
          style={{ width: "69%" }}
          id="navbar-default"
        >
          <ul className="font-semibold text-white flex text-lg flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block py-2 pl-3 pr-4 ${
                  home && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block py-2 pl-3 pr-4 ${
                  about && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block py-2 pl-3 pr-4 ${
                  skill && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block py-2 pl-3 pr-4 ${
                  project && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block py-2 pl-3 pr-4 ${
                  contact && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                Contacts
              </Link>
            </li>
          </ul>
          <ul className="font-semibold text-white flex text-lg flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="https://www.linkedin.com/in/agus-wirayasa-4b0b89250/"
                target="_blank"
                rel="noreferrer"
                className="text-white flex gap-1 justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    id="mainIconPathAttribute"
                    fill="#ffffff"
                  ></path>
                </svg>
                <p className="font-semibold text-white">Linkedin</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aguswirayasa"
                target="_blank"
                rel="noreferrer"
                className="text-white flex gap-1 justify-center items-center"
              >
                <svg
                  enableBackground="new 0 0 512 512"
                  height="15"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="15"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      clipRule="evenodd"
                      d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
                      fill="#ffffff"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
                <p className="font-semibold text-white">Github</p>
              </a>
            </li>
          </ul>
        </div>
        <motion.div
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          variants={hamburgerMenu}
          exit="hamburgerMenu"
          className={`w-full xs:block md:hidden md:w-auto bg-purple-900`}
          id="navbar-default"
        >
          <ul className="font-semibold text-white flex text-lg flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuToggle}
                className={`block py-2 pl-3 pr-4 ${
                  home && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuToggle}
                className={`block py-2 pl-3 pr-4 ${
                  about && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuToggle}
                className={`block py-2 pl-3 pr-4 ${
                  skill && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuToggle}
                className={`block py-2 pl-3 pr-4 ${
                  project && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuToggle}
                className={`block py-2 pl-3 pr-4 ${
                  contact && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200 cursor-pointer`}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
