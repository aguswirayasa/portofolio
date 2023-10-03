import js from "../assets/js.png";
import react from "../assets/react.png";
import mysql from "../assets/mysql.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import bootsrap from "../assets/bootsrap.png";
import java from "../assets/java.png";
import spring from "../assets/spring.png";
import nextjs from "../assets/next.png";
import node from "../assets/node.png";
import firebase from "../assets/firebase.png";
import planetscale from "../assets/planetscale.jpeg";
import shadcn from "../assets/shadcn.png";
import ts from "../assets/ts.png";

export const Projects = [
  {
    name: "Jumpstart",
    image:
      "https://res.cloudinary.com/drqn4yupq/image/upload/v1696337849/aguswirayasa-portofolio/screencapture-jumpstart-three-vercel-app-2023-10-03-20_56_55_lsmbkw.png",
    desc: "Jumpstart is an e-commerce application that allows users to easily search, browse, and purchase products, save them to wishlists, collect them in carts, and checkout seamlessly with Stripe payment integration, while also providing powerful content management and order management tools for admins, for a fast, reliable, and scalable shopping experience.",
    github: "https://github.com/aguswirayasa/jumpstart",
    demo: "https://jumpstart-three.vercel.app/",
    demoAccount: [
      {
        role: "Admin",
        email: "admin@gmail.com",
        password: "qwerty",
      },
      {
        role: "Customer",
        email: "customer@gmail.com",
        password: "qwerty",
      },
    ],
    demoInformation: {
      title: "Demo Card Number",
      value: "4242-4242-4242-4242",
    },
    techs: [
      {
        name: "NextJs",
        image: nextjs,
      },
      { name: "Planetscale", image: planetscale },
      { name: "Tailwind", image: tailwind },
      { name: "Shadcn UI", image: shadcn },
      { name: "Typescript", image: ts },
      { name: "NodeJs", image: node },
      { name: "Cloudinary", image: null },
      { name: "NextAuth", image: null },
      { name: "Stripe", image: null },
    ],
  },
  {
    name: "Lucid Dreams",
    image:
      "https://res.cloudinary.com/drqn4yupq/image/upload/v1696338315/aguswirayasa-portofolio/Screenshot_2023-10-03_210500_oolndw.png",
    desc: "Lucid Dreams is an web application that allow users to generate all of the anime art that they ever dreams of. This app also have a feature to post your generated art to showcase them to other user. This is a platform for people to make their dreams anime art come to reality!",
    github: "https://github.com/aguswirayasa/lucid-dreams",
    demo: "https://lucid-dreams-two.vercel.app/",
    demoAccount: null,
    demoInformation: null,
    techs: [
      {
        name: "NextJs",
        image: nextjs,
      },
      { name: "Firebase", image: firebase },
      { name: "Tailwind", image: tailwind },
      { name: "Typescript", image: ts },
      { name: "NodeJs", image: node },
      { name: "Stable Diffusion", image: null },
      { name: "Cloudinary", image: null },
    ],
  },
  {
    name: "ABC Cars Portal",
    image:
      "https://res.cloudinary.com/drqn4yupq/image/upload/v1696333126/aguswirayasa-portofolio/project1_hdsgbo.png",
    desc: "A web application that connects buyers and sellers of used cars, providing users a seamless platform to browse a wide variety of used cars and easily place bids or book test drives. With a dedicated administration panel, the application ensures efficient management of user and car data, ensuring a smooth and secure transaction process for all parties involved.",
    github: "https://github.com/aguswirayasa/ABC-Cars-Portal",
    demo: "",
    demoAccount: null,
    demoInformation: null,
    techs: [
      {
        name: "Springboot",
        image: spring,
      },
      { name: "MySql", image: mysql },
      { name: "Java", image: java },
      { name: "Javascript", image: js },
      { name: "Tailwind", image: tailwind },
      { name: "Bootstrap", image: bootsrap },
      { name: "CSS", image: css },
    ],
  },
  {
    name: "Know Your Neighborhood",
    image:
      "https://res.cloudinary.com/drqn4yupq/image/upload/v1696333127/aguswirayasa-portofolio/project2_d0qb0z.png",
    desc: "A web application that allow user to get information about local store on their neighborhood. Key feature of this application is social login option that allow user to access the site by simply using their facerbook or google without the need of registering an account, this is done with the help of OAuth2.",
    github: "https://github.com/aguswirayasa/kyn",
    demo: "",
    demoAccount: null,
    demoInformation: null,
    techs: [
      {
        name: "springboot",
        image: spring,
      },
      { name: "MySql", image: mysql },
      { name: "Java", image: java },
      { name: "React", image: react },
      { name: "Javascript", image: js },
      { name: "Tailwind", image: tailwind },
    ],
  },
  {
    name: "ABC Jobs Portal",
    image:
      "https://res.cloudinary.com/drqn4yupq/image/upload/v1696333126/aguswirayasa-portofolio/project3_xkjg6d.png",
    desc: "A web application that allow users to find jobs and make connection. On this application users can register and login to the website, search another user, edit profile, change password. The application also includes administration that has authority to manage the user data.",
    github: "https://github.com/aguswirayasa/ABC-Jobs-Portal",
    demo: "",
    demoAccount: null,
    demoInformation: null,
    techs: [
      {
        name: "Spring MVC",
        image: spring,
      },
      { name: "MySql", image: mysql },
      { name: "Java", image: java },
      { name: "Javascript", image: js },

      { name: "Bootstrap", image: bootsrap },
      { name: "CSS", image: css },
    ],
  },
];
