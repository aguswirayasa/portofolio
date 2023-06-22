/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="p-10 bg-purple-950">
      <footer className="bottom-footer  text-white">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h4 className="text-2xl font-bold">Contact</h4>
              <p className="">
                Reach out to me for collaboration, inquiries, or just to say
                hello!
              </p>
              <span className="flex gap-1 items-center justify-center w-fit">
                <div className="pt-1">
                  <svg
                    className=""
                    fill="#ffffff"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 455.862 455.862"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M441.088,63.154H14.774C6.615,63.154,0,69.77,0,77.93v300.003c0,8.16,6.615,14.775,14.774,14.775h426.313
			c8.16,0,14.775-6.614,14.775-14.775V77.93C455.862,69.77,449.248,63.154,441.088,63.154z M403.394,316.659
			c6.256,5.43,6.926,14.903,1.497,21.16c-5.43,6.254-14.901,6.928-21.161,1.496c-3.876-3.364-101.683-88.252-105.452-91.523
			l-40.515,35.164c-2.82,2.448-6.326,3.672-9.832,3.672s-7.012-1.224-9.832-3.672l-40.515-35.164
			c-3.77,3.272-101.576,88.159-105.452,91.523c-6.257,5.43-15.731,4.761-21.161-1.496c-5.43-6.257-4.76-15.73,1.497-21.16
			L154.7,227.93L52.468,139.203c-6.256-5.43-6.926-14.903-1.497-21.16c5.431-6.256,14.904-6.928,21.161-1.496
			c5.07,4.4,146.594,127.231,155.799,135.22c7.972-6.919,150.305-130.451,155.799-135.22c6.256-5.431,15.731-4.762,21.161,1.496
			c5.43,6.257,4.76,15.731-1.497,21.16L301.162,227.93L403.394,316.659z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="font-semibold text-white">
                  aguswirayasa@gmail.com
                </p>
              </span>
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-xl font-semibold">Connect</h4>
              <p className="mb-4">
                Let's stay connected on social media for updates and
                inspirations:
              </p>
              <ul className="flex space-x-4">
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
          </div>
        </div>
      </footer>
      <footer className="bottom-footer  text-white mt-4">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <p className="text-sm">
                &copy; 2023 Gede Agus Wirayasa. All rights reserved.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <ul className="footer-links flex space-x-4 text-lg font-semibold ">
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white hover:border-b-2 transition-all duration-200 cursor-pointer"
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
                    className="text-white hover:border-b-2 transition-all duration-200 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white hover:border-b-2 transition-all duration-200 cursor-pointer"
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
                    className="text-white hover:border-b-2 transition-all duration-200 cursor-pointer"
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
                    className="text-white hover:border-b-2 transition-all duration-200 cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
