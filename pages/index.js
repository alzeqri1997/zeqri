/** @format */

import Head from "next/head"
import React, {useState, useLayoutEffect, useRef } from "react"
import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import WhatIDo from "../components/WhatIDo"
import { gsap } from "gsap"


export default function Home() {
	const [isLoading, setIsLoading] = useState(true)
	const bg = useRef();
	function demoAsyncCall() {
		return new Promise((resolve) => setTimeout(() => resolve(), 1000))
	}
	useLayoutEffect(() => {
		gsap.set(bg.current, {
			visibility: 'visible',
			opacity:1
		})
  }, [])
	return (
		<>
			<Head>
				<title>Zeqri</title>
				<meta
					name="description"
					content="zeqri for web development and design"
				/>

				<link rel="icon" href="/zeqri/favicon.ico?" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/zeqri/apple-touch-icon.png"
				/>
				<link rel="manifest" href="/zeqri/site.webmanifest?" />
				<link
					rel="mask-icon"
					href="/zeqri/safari-pinned-tab.svg?"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<main>
				<div  className="relative light-bg">
					<div ref={bg} className="hide">
						<Header />
						<Hero />
					</div>
				</div>

				<WhatIDo />
				<Projects />
				<ContactMe />
				<AboutMe />
				<Footer />
			</main>
		</>
	)
}
