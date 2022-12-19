import Head from "next/head"
import React, {useEffect, useState} from 'react'
import  AboutMe  from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import WhatIDo from "../components/WhatIDo"
import Loading from "../components/Loading"


export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	function demoAsyncCall() {
		return new Promise((resolve) => setTimeout(() => resolve(), 2500));
	}
	useEffect(() => {
		demoAsyncCall().then(() => setIsLoading(false))
	})

	if(isLoading) return <Loading/>
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
					<Projects />
				<ContactMe />
				<AboutMe />
				<Footer/>
			</main>
		</div>
	)
}
