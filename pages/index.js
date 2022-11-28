import Head from 'next/head'
import Divider from '../components/Divider'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WhatIDo from '../components/WhatIDo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zeqri</title>
        <meta name="description" content="zeqri for web development and design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className='relative light-bg' >
          <Header />
          <Hero/>
        </div>
        <Divider text={'What I do exactly'} />
        <WhatIDo/>
      </main>
    </div>
  )
}
