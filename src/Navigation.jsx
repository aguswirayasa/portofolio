import logo from "./assets/logo.png";
const Navigation = ({ home, about, skill, project, contact }) => {
  return (
    <nav className=" bg-opacity-80 py-4 transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center">
          <img src={logo} className="h-16 mr-3" alt="Agus Wirayasa Logo" />
          <span className="self-center text-2xl text-white font-bold whitespace-nowrap"></span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-semibold text-white flex text-lg flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="#home"
                className={`block py-2 pl-3 pr-4 ${
                  home && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`block py-2 pl-3 pr-4 ${
                  about && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200`}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`block py-2 pl-3 pr-4 ${
                  skill && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`block py-2 pl-3 pr-4 ${
                  project && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 pl-3 pr-4 ${
                  contact && "text-purple-500"
                } border-b-4 border-transparent rounded md:bg-transparent md:hover:border-purple-700 md:p-0 transition-colors duration-200`}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
