/** @format */

import paintSM from "./assets/images/paint.png";
import paintBG from "./assets/images/paintBG.png";
import nerd from "./assets/images/nerd.png";
import nerdBG from "./assets/images/nerdBG.png";
import halabkImage from "./assets/images/projects/HalaBK.png";
import liquidus from "./assets/images/projects/LiquidusThumbnail.png";
import ajars from "./assets/images/projects/ajars.png";
import ebana from './assets/images/projects/Ebana.png'

export const cards = [
  {
    imageSM: paintSM,
    imageBG: paintBG,
    title: "High-quality UI Design or Re-design",
    body: "in the shortest possible time. I will help you make your product perfectly useable with actionable suggestions for improvement.",
  },
  {
    imageSM: nerd,
    imageBG: nerdBG,
    title: "Building a complete web application",
    body: "to ensure that website visitors can easily interact with the page.",
  },
];

export const projectDetails = [
  {
    image: ebana,
    badge: "Web Development",
    title: "Ebana Website",
    body: `
    <p>Ebana as a saudi company that provides and operates equity management, investors relations, and investment operations digital solutions.</p>
          <p>My role was bringing the figma design to real live website.</p>
          <p>Stack Used: <strong>Nextjs, TailwindCSS, and i18n</strong></p>
    `,
    link: "https://ebana.sa/",
  },
  {
    image: ajars,
    badge: "Web Development",
    title: "Ajras platform",
    body: `
    <p><strong>Ajras</strong> is A Saudi Propetech Company that provides solutions to make rental payment easier and simpler.</p>
          <p>The Project contains <strong>landing page, user panel, and super admin panel.</strong></p>
          <p>My role was converting the design to <strong> real life website </strong></p>
          <p>Tech Stack Used: <strong>ReactJS, Vite, TailwindCSS, Typescript.</strong></p>
    `,
    link: "https://ajras.com/",
  },
  {
    image: halabkImage,
    badge: "Web Development",
    title: "Halabk Service Provider Dashboard",
    body: `
    <p><strong>Halabk</strong> is a platform that connects tourists and service providers.It Provides services to the tourists as packages.</p>
          <p>The Project contains <strong>landing page, provider dashboard, user dashboard (tourists), and super admin dashboard.</strong></p>
          <p>My role was building the <strong>provider dashboard.</strong></p>
          <p>Tech Stack Used: <strong>HTML, CSS(SCSS), Javascript ( VueJS ), Bootstrap, VueX.</strong></p>
    `,
    link: "https://halabk.sa/en/",
  },
  {
    image: liquidus,
    badge: "Web Development",
    title: " Liquidus Landing page",
    body: `
    <p>Liquidus is a landing page to <strong>explain what Liquidus Company is </strong>and promote their mobile app.</p>
          <p>My Role was <strong>developing</strong> a responsive landing page with animation and <strong>integrating it with their API.</strong>
          <p>Stack Used: <strong> ReactJS, TailwindCSS, Typescript, and GSAP</strong></p>
    `,
    link: "https://alzeqri1997.github.io/liquidus-react-typescript-tailwindcss/",
    icons: [
      {
        icon: "Github",
        link: "https://github.com/alzeqri1997/liquidus-react-typescript-tailwindcss",
      },
    ],
  }
];
