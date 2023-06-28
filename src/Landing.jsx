/* eslint-disable react/no-unescaped-entities */
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.png";
import phone from "./assets/phone.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "./Navigation";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import icon from "./assets/icon.png";
import { education } from "./data/education";
import { Projects } from "./data/projects";
import { frontEndSkills, BackEndSkills } from "./data/skills";

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
  const [refSection4, inViewSection4] = useInView();
  const [about, inAbout] = useInView();
  const [skill, inSkill] = useInView();
  const [project, inProject] = useInView();
  const [contact, inContact] = useInView();

  return (
    <div className="bg-slate-950 overflow-x-hidden" id="home">
      <div className="relative h-screen">
        <motion.div
          className="fixed top-0 left-0 w-full z-50 bg-transparent h-fit"
          style={{ backgroundColor: navbarBgColor }}
        >
          <Navigation
            home={inView}
            about={inAbout}
            contact={inContact}
            skill={inSkill}
            project={inProject}
          />
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
            <div className="text-left my-6" ref={about}>
              <h2 className="font-bold text-4xl text-purple-500  border-b-2 pb-3 border-purple-400">
                Education
              </h2>
              {education.map((ed, index) => (
                <div
                  className="grid place-content-start border-b-2 p-3 border-purple-400"
                  key={index}
                >
                  <span className="flex justify-start items-center">
                    <img src={icon} alt="x" className="h-7" />

                    <h3 className="text-xl  font-bold">{ed.school}</h3>
                  </span>
                  <ul className=" px-7">
                    <li className="text-lg">{ed.location}</li>
                    <li className="text-lg">{ed.date}</li>
                    <li className="text-lg">{ed.major}</li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="grid w-full place-items-center my-8">
              <div className="grid grid-cols-12 w-3/5 gap-3">
                <a
                  href="
                "
                  className="xs:col-span-12 md:col-span-6 rounded-md px-3 py-2 font-semibold xs:text-base md:text-lg bg-purple-500 shadow-lg shadow-purple-500/50 hover:scale-105 text-white col-span-6 w-full hover:bg-purple-700 transition-all duration-200"
                >
                  Resume
                </a>
                <a
                  href="https://youtu.be/ncBZQVV0Q3I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xs:col-span-12 md:col-span-6 rounded-md px-3 py-2 font-semibold xs:text-base md:text-lg bg-purple-500 shadow-lg shadow-purple-500/50 hover:scale-105 text-white col-span-6 w-full  hover:bg-purple-700 transition-all duration-200"
                >
                  Video Introduction
                </a>
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
              className="flex flex-wrap flex-1 gap-3 justify-center"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2 }, // Add staggerChildren with delay between each item
                },
              }}
              ref={skill}
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
                    loading="lazy"
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
                    loading="lazy"
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
          ref={project}
        >
          Projects
        </h2>
        <motion.div
          className="grid place-items-center"
          ref={refSection3}
          initial="hidden"
          animate={inViewSection3 ? "visible" : "hidden"}
          variants={leftVariants}
        >
          {Projects.map((project, index) => (
            <section
              className="grid grid-cols-12 p-10 border-y-2 max-w-screen-xl"
              key={index}
            >
              <motion.div className="xs:col-span-12 md:col-span-5">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div className="xs:col-span-12 md:col-span-7 flex flex-col justify-center items-center text-white p-10">
                <h2 className="text-3xl my-5 font-medium w-full text-left text-purple-500">
                  {project.name}
                </h2>
                <p className="text-justify">{project.desc}</p>
                <div className="flex w-full flex-wrap p-3 gap-2">
                  {project.techs.map((tech, index) => (
                    <span
                      className=" border-2 border-purple-500   font-semibold p-3 rounded-xl flex justify-center items-center gap-2 capitalize"
                      key={index}
                    >
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="h-9 w-9 object-contain"
                        loading="lazy"
                      />
                      <p className="font-semibold text-lg">{tech.name}</p>
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-12 w-3/4 gap-3 my-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 shadow-lg shadow-purple-500/50 rounded-md px-3 py-2 hover:bg-purple-700 hover:scale-105 transition-all col-span-12 duration-300 flex gap-1 justify-center justify-items-center "
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
                </div>
              </motion.div>
            </section>
          ))}
        </motion.div>
        <div className="grid place-items-center">
          <section className="grid grid-cols-12 p-10  w-3/4 xs:gap-3">
            <motion.div
              className="xs:col-span-12 md:col-span-6"
              ref={refSection4}
              initial="hidden"
              animate={inViewSection4 ? "visible" : "hidden"}
              variants={leftVariants}
            >
              <h2 className="font-bold text-5xl text-purple-500 my-3">
                Let's keep in touch!
              </h2>
              <span className="flex gap-1 items-center justify-center w-fit mb-3">
                <div className=" w-fit p-2 rounded-md bg-zinc-800">
                  <svg
                    className=""
                    fill="#904ff7"
                    height="30px"
                    width="30px"
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
                <p
                  className="font-semibold text-xl text-white"
                  ref={contact}
                  id="contact"
                >
                  aguswirayasa@gmail.com
                </p>
              </span>
              <span className="flex gap-1 items-center justify-center w-fit">
                <div className=" w-fit p-2 rounded-md bg-zinc-800">
                  <img src={phone} alt="" />
                </div>
                <p
                  className="font-semibold text-xl text-white"
                  ref={contact}
                  id="contact"
                >
                  +62 821 4457 1746
                </p>
              </span>
            </motion.div>
            <motion.div
              className="xs:col-span-12 md:col-span-6  text-white "
              ref={refSection4}
              initial="hidden"
              animate={inViewSection4 ? "visible" : "hidden"}
              variants={rightVariants}
            >
              <ContactMe />
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
