import Head from "next/head"
import  AboutMe  from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import { Pattern } from "../components/icons"
import Projects from "../components/Projects"
import WhatIDo from "../components/WhatIDo"




export default function Home() {
	return (
		<div>
			<Head>
				<title>Zeqri</title>
				<meta
					name="description"
					content="zeqri for web development and design"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main >
				<div className="relative light-bg">
					<Header />
					<Hero />
				</div>
				
				<WhatIDo />
				<div className="light-bg relative">
					<Pattern classes={"top-pattern"} />
					<Projects />
					<Pattern classes={"bottom-pattern"} />
				</div>
				<ContactMe />
				<AboutMe />
				<Footer/>
			</main>
		</div>
	)
}
