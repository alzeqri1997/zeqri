/** @format */

import Head from "next/head"
import  AboutMe  from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Divider from "../components/Divider"
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

			<main>
				<div className="relative light-bg">
					<Header />
					<Hero />
				</div>
				<Divider text={"What I do exactly"} />
				<WhatIDo />
				<Divider text={"Some of Things I’ve Built"} />
				<div className="light-bg relative hidden">
					<Pattern classes={"top-pattern"} />
					<Projects />
					<Pattern classes={"bottom-pattern"} />
				</div>
				<Divider text={"Contact Me"} />
				<ContactMe />
				<Divider text={"About Me"} />
				<AboutMe />
				<Footer/>
			</main>
		</div>
	)
}
