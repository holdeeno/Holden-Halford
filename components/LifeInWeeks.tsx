import React from 'react';

// Define a type for the structure of the events
interface NotionEvent {
  title: string;
  date: string;
}

// Define props for the LifeInWeeks component
interface LifeInWeeksProps {
  events?: NotionEvent[]; // Array of events, now optional with a default value set in the component
}

const LifeInWeeks: React.FC<LifeInWeeksProps> = ({ events = [] }) => {
  console.log("Events received on client:", events); // Log the events prop on the client side
  const birthdate = new Date('1997-08-01'); // Replace with your actual birthdate
  const today = new Date();
  const weeksIn80Years = 80 * 52;

  const generateAllWeekDates = (birthdate: Date, totalWeeks: number) => {
    const weekDates = [];
    for (let i = 0; i < totalWeeks; i++) {
      const weekDate = new Date(birthdate.getTime());
      weekDate.setDate(birthdate.getDate() + i * 7);
      weekDates.push(weekDate);
    }
    return weekDates;
  };

  const allWeekDates = generateAllWeekDates(birthdate, weeksIn80Years);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Life in Weeks</h1>
      <div className="flex flex-wrap justify-start items-start mt-4">
        {allWeekDates.map((weekDate, index) => {
          const keyDate = weekDate.toISOString().split('T')[0];
          const isPast = weekDate < today;
          const borderColor = '#D0D7DE';
          const backgroundColor = isPast ? 'transparent' : '#F6F8FA';
          const event = events.find(event => event.date === keyDate);
          const eventTitle = event ? event.title : ``;

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
