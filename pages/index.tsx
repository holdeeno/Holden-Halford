import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
    return (
    <Layout>
      <Head>
        <title>Holden Halford</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <h1>Amateur</h1>
      </main>
    </Layout>
  )
}

export default Home