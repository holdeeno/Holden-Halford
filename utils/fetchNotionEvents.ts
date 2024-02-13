// utils/fetchNotionEvents.ts
import { Client } from '@notionhq/client';

// Define a type for the structure of the events we expect to receive
interface NotionEvent {
  title: string;
  date: string;
}

const fetchNotionEvents = async (): Promise<NotionEvent[]> => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  // Use the notion.databases.query without specifying the response type here.
  // The response type is inferred from the SDK.
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  // Process and map the response to the NotionEvent type
  const events = response.results.map((page: any) => { // Temporarily using 'any'; see below for a better typing approach
    // Extract the title and date from the page object.
    // Adjust these based on the actual structure of your Notion database properties.
    const title = page.properties['Title']?.title[0]?.plain_text || 'No title';
    const date = page.properties['Date']?.date?.start || 'No date';

    return { title, date };
  });

  return events;
};

export default fetchNotionEvents;


