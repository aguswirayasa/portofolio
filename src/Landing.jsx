/* eslint-disable react/no-unescaped-entities */
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.png";
import html from "./assets/skill1.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import mysql from "./assets/mysql.png";
import css from "./assets/css.png";
import tailwind from "./assets/tailwind.png";
import bootsrap from "./assets/bootsrap.png";
import project1 from "./assets/project1.png";
import java from "./assets/java.png";
import spring from "./assets/spring.png";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "./Navigation";

const animationVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const frontEndSkills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React Js", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootsrap", icon: bootsrap },

  // Add more skills and icons as needed
];
const BackEndSkills = [
  { name: "SpringBoot", icon: spring },
  { name: "Mysql", icon: mysql },
  { name: "Java", icon: java },

  // Add more skills and icons as needed
];

const leftVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
const rightVariants = {
  hidden: {
    opacity: 0,
    x: 150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
const leftSkillVariants = {
  hidden: {
    opacity: 0,

    y: -70,
  },
  visible: {
    opacity: 1,

    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const rightSkillVariants = {
  hidden: {
    opacity: 0,

    y: -70,
  },
  visible: {
    opacity: 1,

    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
function Landing() {
  const { scrollYProgress } = useViewportScroll();
  const translateYImg = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerHeight]
  );
  const scaling = useTransform(scrollYProgress, [0, 1], [1, 2.0]);
  const translateYText = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight / 2]
  );
  const navbarBgColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]
  );
  const [ref, inView] = useInView();
  const [refSection1, inViewSection1] = useInView();
  const [refSection2, inViewSection2] = useInView();
  const [refSection3, inViewSection3] = useInView();

  return (
    <div className="bg-primary overflow-x-hidden" id="home">
      <div className="relative h-screen">
        <motion.div
          className="fixed top-0 left-0 w-full z-50 bg-transparent"
          style={{ backgroundColor: navbarBgColor }}
        >
          <Navigation />
        </motion.div>
        <motion.img
          src={bg1}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            translateY: translateYImg,
          }}
        />
        <motion.img
          src={bg2}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-40"
          style={{
            translateY: translateYImg,
            scale: scaling,
          }}
        />

        <motion.div
          style={{
            translateY: translateYText,
          }}
          className="absolute top-44 left-0 w-full flex flex-col justify-center items-center"
        >
          <div>
            <motion.h2
              className=" text-white font-black mb-2 text-4xl md:text-6xl lg:text-7xl text-left"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Hi, I'm Agus Wirayasa
            </motion.h2>
            <motion.h2
              className=" text-white font-medium mb-4 text-left max-w-3xl lg:me-2  text-xl md:text-3xl lg:text-3xl"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Passionate Fullstack Web Developer dedicated to providing
              innovative web solution.
            </motion.h2>
          </div>
        </motion.div>
      </div>
      <main className="bg-black grid gap-10">
        <motion.section
          className="text-center grid gap-3 text-white  p-10 mb-10"
          id="about"
        >
          <motion.div
            className="mx-auto max-w-5xl"
            ref={refSection1}
            animate={inViewSection1 ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <h2 className="text-5xl my-5 font-bold w-full text-left text-purple-500">
              About Me
            </h2>
            <p className="text-justify text-lg mb-3">
              My name is Gede Agus Wirayasa, a passionate web developer based in
              Bali, Indonesia. Currently, I am pursuing a major in Information
              Systems at ITB Stikom Bali and studying Software Engineering at
              Lithan EduClass in Singapore. I specialize in developing robust
              and beautiful web applications that not only meet the needs of
              users but also provide an exceptional visual experience. I enjoy
              the process of transforming ideas into reality.
            </p>
            <p className="text-justify mx-auto max-w-5xl text-lg">
              In my free time, I am an avid gamer and a curious individual who
              loves staying up-to-date with the latest IT news, exploring the
              new technologies that emerge. I believe in continuous learning and
              expanding my skill set. I'm excited to showcase my work and
              connect with like-minded individuals and businesses who share my
              passion for pushing the boundaries of web development. Let's
              collaborate and create something amazing together!
            </p>
            <div className="grid w-full place-items-center my-6">
              <div className="grid grid-cols-12 w-3/5 gap-3">
                <button className="rounded-md px-3 py-2 font-semibold text-lg bg-purple-500 text-white col-span-6 w-full hover:bg-purple-700 transition-colors duration-200">
                  Resume
                </button>
                <button className="rounded-md px-3 py-2 font-semibold text-lg bg-purple-500 text-white col-span-6 w-full  hover:bg-purple-700 transition-colors duration-200">
                  Video Introduction
                </button>
              </div>
            </div>
          </motion.div>
        </motion.section>
        <h2
          className="text-5xl font-bold text-purple-500 text-center w-full"
          id="skills"
        >
          Skills
        </h2>
        <section className="sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 ">
          <motion.div
            ref={refSection2}
            initial="hidden"
            animate={inViewSection2 ? "visible" : "hidden"}
            variants={leftVariants}
            className="text-white p-10 sm:col-span-12 md:col-span-6"
          >
            <h2 className="text-4xl my-5 font-bold border-b-4 border-purple-400 w-full pb-3 text-center text-purple-500">
              Front End
            </h2>
            <motion.div
              className="flex flex-wrap-reverse flex-1 gap-3 justify-center"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2 }, // Add staggerChildren with delay between each item
                },
              }}
              initial="hidden"
              animate={inViewSection2 ? "visible" : "hidden"}
            >
              {frontEndSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="border-4 border-purple-500 bg-purple-500/30 text-white flex flex-col items-center justify-center rounded-lg xs:w-20 sm:w-28 md:w-40 lg:w-48 p-3 shadow-inner shadow-purple-400"
                  variants={leftSkillVariants}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="object-contain xs:h-8 sm:h-16 md:h-32 lg:w-40"
                  />
                  <p className="text-white font-semibold xs:text-sm text-center md:text-lg">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={refSection2}
            initial="hidden"
            animate={inViewSection2 ? "visible" : "hidden"}
            variants={leftVariants}
            className="text-white p-10 sm:col-span-12 md:col-span-6"
          >
            <h2 className="text-4xl my-5 font-bold border-b-4 border-purple-400 w-full pb-3 text-center text-purple-500">
              Back End
            </h2>
            <motion.div
              className="flex flex-wrap flex-1 gap-3 justify-center"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.4 }, // Add staggerChildren with delay between each item
                },
              }}
              initial="hidden"
              animate={inViewSection2 ? "visible" : "hidden"}
            >
              {BackEndSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="border-4 border-purple-500 bg-purple-500/30 text-white flex flex-col items-center justify-center rounded-lg xs:w-20 sm:w-28 md:w-40 lg:w-48 p-3 shadow-inner shadow-purple-400"
                  variants={rightSkillVariants}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="object-contain xs:h-8 sm:h-16 md:h-32 lg:w-40"
                  />
                  <p className="text-white font-semibold xs:text-sm text-center md:text-lg">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
        <h2
          className="text-5xl font-bold text-purple-500 text-center w-full"
          id="projects"
        >
          Projects
        </h2>
        <div className="grid place-items-center">
          <section className="grid grid-cols-12 p-10 border-y-2 max-w-screen-xl">
            <motion.div
              className="col-span-5"
              ref={refSection3}
              initial="hidden"
              animate={inViewSection3 ? "visible" : "hidden"}
              variants={leftVariants}
            >
              <img
                src={project1}
                alt="lamborghini"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="col-span-7 flex flex-col justify-center items-center text-white p-10"
              ref={refSection3}
              initial="hidden"
              animate={inViewSection3 ? "visible" : "hidden"}
              variants={rightVariants}
            >
              <h2 className="text-3xl my-5 font-medium w-full text-left text-purple-500">
                ABC Cars Portal
              </h2>
              <p className="text-justify">
                A web application that connects buyers and sellers of used cars,
                providing users a seamless platform to browse a wide variety of
                used cars and easily place bids or book test drives. With a
                dedicated administration panel, the application ensures
                efficient management of user and car data, ensuring a smooth and
                secure transaction process for all parties involved.
              </p>
              <div className="grid grid-cols-12 w-3/4 gap-3 my-3">
                <a
                  href="https://github.com/aguswirayasa/ABC-Cars-Portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 rounded-md px-3 py-2 hover:bg-purple-800 hover:scale-105 transition-all col-span-6 duration-300 flex gap-1 justify-center justify-items-center "
                >
                  <button className="flex gap-1 justify-center justify-items-center ">
                    <p className="text-lg font-semibold">Github</p>
                    <svg
                      enableBackground="new 0 0 512 512"
                      height="30px"
                      id="Layer_1"
                      version="1.1"
                      viewBox="0 0 512 512"
                      width="30px"
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
                  </button>
                </a>
                <button className="flex bg-zinc-800 rounded-md px-3 py-2 col-span-6 justify-center hover:bg-purple-800 hover:scale-105 transition-all duration-300">
                  <p className="text-lg font-semibold">Demo</p>
                </button>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Landing;
