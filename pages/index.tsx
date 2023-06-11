import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
    return (
    <Layout>
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <h1>Welcome to my Next.js app!</h1>
      </main>
    </Layout>
  )
}

export default Home