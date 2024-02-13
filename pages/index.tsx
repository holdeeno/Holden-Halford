import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head'
import Layout from '../components/Layout'
import LifeInWeeks from '../components/LifeInWeeks';
import fetchNotionEvents from '../utils/fetchNotionEvents';

// Define the type for the props to be received by the Home component
interface HomeProps {
  events: Array<{
    title: string;
    date: string;
  }>;
}

const Home: NextPage<HomeProps> = ({ events }) => {
  return (
    <Layout>
      <Head>
        <title>Holden Halford</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LifeInWeeks events={events} /> {/* Pass events as props to LifeInWeeks */}
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const events = await fetchNotionEvents(); // Fetch events from Notion
  console.log("Events fetched on server:", events); // Log the events fetched from Notion
  
  return {
    props: { events }, // Pass the fetched events to the Home component as props
  };
};

export default Home;