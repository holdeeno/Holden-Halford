import React from 'react';

// Defines the shape of individual event objects expected as part of the events array.
interface NotionEvent {
  title: string; // The title of the event (e.g., "I'm born", "I get married")
  date: string; // The date of the event in YYYY-MM-DD format
}


// Defines the properties (props) that the LifeInWeeks component accepts.
interface LifeInWeeksProps {
  events?: NotionEvent[]; // An optional array of NotionEvent objects. It's optional and defaults to an empty array.
}

// The LifeInWeeks component visualizes the user's life in weeks and overlays significant events.
const LifeInWeeks: React.FC<LifeInWeeksProps> = ({ events = [] }) => {
  console.log("Events received on client:", events); // Log the events prop on the client side
  // The starting point of the life visualization, typically the user's birthdate.
  const birthdate = new Date('1997-08-01'); // Replace '1997-08-01' with the actual birthdate as needed.
  const today = new Date(); // Represents the current date to calculate how many weeks have been lived.
  const weeksIn80Years = 80 * 52; // Calculates the total number of weeks in 80 years, assuming 52 weeks per year.

  // Generates an array of dates representing each week from the birthdate up to 80 years.
  const generateAllWeekDates = (birthdate: Date, totalWeeks: number) => {
    const weekDates = []; // Initializes an empty array to store each week's start date.
    for (let i = 0; i < totalWeeks; i++) {
      const weekDate = new Date(birthdate.getTime()); // Creates a new date object based on the birthdate.
      weekDate.setDate(birthdate.getDate() + i * 7); // Increments the date by 7 days for each week.
      weekDates.push(weekDate); // Adds the calculated week date to the array.
    }
    return weekDates; // Returns the array of all week dates.
  };

  const allWeekDates = generateAllWeekDates(birthdate, weeksIn80Years); // Stores all calculated week dates in a variable.

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Life in Weeks</h1>
      
      {/* Maps over each week, checking for events that match the week's date and rendering a rectangle for each */}
      <div className="flex flex-wrap justify-start items-start mt-4">
        {allWeekDates.map((weekDate, index) => {
          const keyDate = weekDate.toISOString().split('T')[0]; // Formats each week's start date to YYYY-MM-DD for comparison.
          const isPast = weekDate < today;
          const borderColor = '#D0D7DE';
          const backgroundColor = isPast ? 'transparent' : '#F6F8FA';
      
          // Attempts to find an event that matches the current week's date.
          const event = events.find(event => event.date === keyDate);
          const eventTitle = event ? event.title : ``;

          // Renders a rectangle for the week. If an event matches, its title is displayed
          return (
            <div key={index} 
                 className="h-8 max-h-8 py-0.5 px-2 m-0.5 flex justify-center items-center m-1" 
                 style={{ backgroundColor, borderColor, borderWidth: '1px', borderStyle: 'solid'}}
                 title={event ? event.title : ''}>
              {eventTitle}
            </div>
          );
        })}
      </div>
    </div>
  );

};

export default LifeInWeeks;
