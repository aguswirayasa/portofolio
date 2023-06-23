import js from "../assets/js.png";
import react from "../assets/react.png";
import mysql from "../assets/mysql.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import bootsrap from "../assets/bootsrap.png";
import project1 from "../assets/project1.png";
import java from "../assets/java.png";
import spring from "../assets/spring.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const Projects = [
  {
    name: "ABC Cars Portal",
    image: project1,
    desc: "A web application that connects buyers and sellers of used cars, providing users a seamless platform to browse a wide variety of used cars and easily place bids or book test drives. With a dedicated administration panel, the application ensures efficient management of user and car data, ensuring a smooth and secure transaction process for all parties involved.",
    github: "https://github.com/aguswirayasa/ABC-Cars-Portal",
    techs: [
      {
        name: "springboot",
        image: spring,
      },
      { name: "MySql", image: mysql },
      { name: "java", image: java },
      { name: "javascript", image: js },
      { name: "tailwind", image: tailwind },
      { name: "boostrap", image: bootsrap },
      { name: "CSS", image: css },
    ],
  },
  {
    name: "Know Your Neighborhood",
    image: project2,
    desc: "A web application that allow user to get information about local store on their neighborhood. Key feature of this application is social login option that allow user to access the site by simply using their facerbook or google without the need of registering an account, this is done with the help of OAuth2.",
    github: "https://github.com/aguswirayasa/kyn",
    techs: [
      {
        name: "springboot",
        image: spring,
      },
      { name: "MySql", image: mysql },
      { name: "java", image: java },
      { name: "react", image: react },
      { name: "javascript", image: js },
      { name: "tailwind", image: tailwind },
    ],
  },
  {
    name: "ABC Jobs Portal",
    image: project3,
    desc: "A web application that allow users to find jobs and make connection. On this application users can register and login to the website, search another user, edit profile, change password. The application also includes administration that has authority to manage the user data.",
    github: "https://github.com/aguswirayasa/ABC-Jobs-Portal",
    techs: [
      {
        name: "spring MVC",
        image: spring,
      },
      { name: "MySql", image: mysql },
      { name: "java", image: java },
      { name: "javascript", image: js },

      { name: "boostrap", image: bootsrap },
      { name: "CSS", image: css },
    ],
  },
];
