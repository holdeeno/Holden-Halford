import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import LifeInWeeks from '../components/LifeInWeeks';

const Home: NextPage = () => {
    return (
    <Layout>
      <Head>
        <title>Holden Halford</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <LifeInWeeks />
      </main>
    </Layout>
  )
}

export default Home