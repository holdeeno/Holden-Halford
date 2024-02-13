// utils/fetchNotionEvents.ts
import { Client } from '@notionhq/client';
import { QueryDatabaseResponse, Page } from '@notionhq/client/build/src/api-endpoints';

// Define a type for the structure of the events we expect to receive
interface NotionEvent {
  title: string;
  date: string;
}

const fetchNotionEvents = async (): Promise<NotionEvent[]> => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  // Process and map the response to the NotionEvent type
  const events = response.results.map((page: Page) => {
    // Safely access the properties of the page assuming the structure of the response
    // Note: You might need to adjust these based on the actual structure of your Notion database properties
    const title = page.properties['Title']?.title[0]?.plain_text || 'No title';
    const date = page.properties['Date']?.date?.start || 'No date';

    return { title, date };
  });

  return events;
};

export default fetchNotionEvents;

