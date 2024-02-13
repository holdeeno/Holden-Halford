import { GetStaticProps } from 'next';
import fetchNotionEvents from '../utils/fetchNotionEvents';

export const getStaticProps: GetStaticProps = async () => {
  const events = await fetchNotionEvents();
  console.log(events); // Log the fetched events to verify
  return {
    props: { events }, // Just for testing, pass events to the page (optional)
  };
};

const TestNotionPage = ({ events }) => {
  return <div>Check console for fetched events.</div>;
};

export default TestNotionPage;
