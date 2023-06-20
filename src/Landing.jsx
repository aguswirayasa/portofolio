import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.png";
import html from "./assets/skill1.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import mysql from "./assets/mysql.png";
import css from "./assets/css.png";
import tailwind from "./assets/tailwind.png";
import bootsrap from "./assets/bootsrap.png";
import node from "./assets/node.png";
import java from "./assets/java.png";
import spring from "./assets/spring.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView();
  const [refSection1, inViewSection1] = useInView();
  const [refSection2, inViewSection2] = useInView();
  const [refSection3, inViewSection3] = useInView();

  return (
    <div className="bg-black overflow-x-hidden">
      <div className="relative h-screen">
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
          className="absolute top-0 left-0 w-full h-full object-cover z-50"
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
        <motion.section className="text-center grid gap-3 text-white  p-10 mb-10">
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
          </motion.div>
        </motion.section>
        <h2 className="text-5xl font-bold text-purple-500 text-center w-full">
          Skills
        </h2>
        <section className="sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5">
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
        <section className="grid grid-cols-12 p-10">
          <motion.div
            className="col-span-5"
            ref={refSection3}
            initial="hidden"
            animate={inViewSection3 ? "visible" : "hidden"}
            variants={leftVariants}
          >
            <img
              src="https://e0.pxfuel.com/wallpapers/887/291/desktop-wallpaper-space-stars-universe-galaxy.jpg"
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
            <h2 className="text-3xl my-5 font-medium w-full text-left text-amber-500">
              Elevate Your Car Buying Experience
            </h2>
            <p className="text-justify">
              Are you tired of the traditional car buying process? Look no
              further than ABC Car groundbreaking Booking and Bidding Service.
              Say goodbye to endless dealership visits and haggling over prices.
              With our service, you can take control of your car purchase like
              never before. Our innovative booking feature lets you reserve your
              desired vehicle directly from our platform, ensuringready and
              waiting for you when you arrive. No more disappointments or wasted
              time. Andre looking for a great deal, our bidding option allows
              you to make competitive offers on select vehicles, giving you the
              opportunity to snag your dream car at an unbeatable price.
              Experience the future of car buying with ABC Car Booking and
              Bidding Service and revolutionize the way you shop for your next
              vehicle.
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
