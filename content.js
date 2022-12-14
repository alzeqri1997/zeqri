/** @format */

import paintSM from "./assets/images/paint.png"
import paintBG from "./assets/images/paintBG.png"
import nerd from "./assets/images/nerd.png"
import nerdBG from "./assets/images/nerdBG.png"
import halabkImage from "./assets/images/projects/HalaBK.png"
import titanex from "./assets/images/projects/Titanex.png"
import lunBread from "./assets/images/projects/lunbread.png"
import rentalHome from "./assets/images/projects/rentalHomeCaseStudy.png"

export const cards = [
	{
		imageSM: paintSM.src,
		imageBG: paintBG.src,
		title: "High-quality UI Design or Re-design",
		body: "in the shortest possible time. I will help you make your product perfectly useable with actionable suggestions for improvement.",
	},
	{
		imageSM: nerd.src,
		imageBG: nerdBG.src,
		title: "Building a complete web application",
		body: "to ensure that website visitors can easily interact with the page.",
	},
]

export const projectDetails = [
	{
		imageRight: false,
		image: halabkImage.src,
		badge: "Web Development",
		title: "Halabk Service Provider Dashboard",
		body: `
    <p><strong>Halabk</strong> is a platform that connects tourists and service providers.It Provides services to the tourists as packages.</p>
          <p>The Project contains <strong>landing page, provider dashboard, user dashboard (tourists), and super admin dashboard.</strong></p>
          <p>My role was building the <strong>provider dashboard.</strong></p>
          <p>Tech Stack Used: <strong>HTML, CSS(SCSS), Javascript ( VueJS ), Bootstrap, VueX.</strong></p>
    `,
		link: "#",
		icons: [
			{
				icon: "Behance",
				link: "#",
			},
		],
	},
	{
		imageRight: true,
		image: titanex.src,
		badge: "Web Design & Web Development",
		title: "Titanex Landing page",
		body: `
    <p>Exchange, transfer cryptos.</p>
          <p>My Role was <strong>designing</strong> a responsive landing page and <strong>developing</strong> it</p>
          <p>Stack Used: <strong>Figma, ReactJS, TailwindCSS</strong></p>
    `,
		link: "#",
		icons: [
			{
				icon: "Behance",
				link: "#",
			},
			{
				icon: "Github",
				link: "#",
			},
		],
	},
	{
		imageRight: false,
		image: rentalHome.src,
		badge: "Case Study",
		title: "Rental Home Website",
		body: `
    <p><strong>Rental home</strong>  is  a website that connects between users who is looking for place to live in such as house, or <br> 
    apartment and the property owner.</p>
    <p>My role was designing the <strong>The website.</strong></p>
    `,
		link: "#",
		icons: [
			{
				icon: "Behance",
				link: "#",
			},
		],
	},
	{
		imageRight: true,
		image: lunBread.src,
		badge: "Mobile Design",
		title: "LunBread Mobile Application",
		body: `
    <p><strong>Lunbread</strong> is a bakery app that allows users to quickly order their favorite backed <br>
    goods, sandwiches, pastry and cakes that skip in-line food ordering by using our app</p>
    <p>My Role was User <strong> Research, Personas, Wireframes, <br>
    Prototyping, and User Testing. </strong></p>
    <p>Stack Used: <strong> Figma</strong></p>
    `,
		link: "#",
		icons: [
			{
				icon: "Behance",
				link: "#",
			},
		],
	},
]
