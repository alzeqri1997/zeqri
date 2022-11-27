import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zeqri</title>
        <meta name="description" content="zeqri for web development and design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Header />
        <Hero/>
      </main>
    </div>
  )
}
