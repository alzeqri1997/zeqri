/** @format */

import Head from "next/head"
import React, { useEffect, useState } from "react"
import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import WhatIDo from "../components/WhatIDo"
import Loading from "../components/Loading"

export default function Home() {
	const [isLoading, setIsLoading] = useState(true)
	function demoAsyncCall() {
		return new Promise((resolve) => setTimeout(() => resolve(), 1000))
	}
	useEffect(() => {
		const onPageLoad = () => {
			demoAsyncCall().then(() => setIsLoading(false))
		}
		if (document.readyState === "complete") {
			onPageLoad()
		} else {
			window.addEventListener("load", onPageLoad)

			return () => window.removeEventListener("load", onPageLoad)
		}
	})

	if (isLoading) return <Loading />
	return (
		<>
			<Head>
				<title>Zeqri</title>
				<meta
					name="description"
					content="zeqri for web development and design"
				/>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<main>
				<div className="relative light-bg">
					<Header />
					<Hero />
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
