import React from 'react';

const LifeInWeeks: React.FC = () => {
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

  const weeksLived = Math.floor((today.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 7));
  const lifeCompletionPercentage = ((weeksLived / weeksIn80Years) * 100).toFixed(2);
  const weeksRemaining = weeksIn80Years - weeksLived;
  const allWeekDates = generateAllWeekDates(birthdate, weeksIn80Years);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Life in Weeks</h1>
      <li>Life completed percentage: {lifeCompletionPercentage}%</li>
      <li>Number of weeks lived: {weeksLived}</li>
      <li>Number of weeks in 80 years (rough average lifespan): {weeksIn80Years}</li>
      <li>Number of weeks remaining: {weeksRemaining}</li>
      <div className="flex flex-wrap justify-start items-start mt-4">
        {allWeekDates.map((weekDate, index) => {
          const keyDate = weekDate.toISOString().split('T')[0];
          const isPast = weekDate < today; // Check if the week has been lived
          const borderColor = '#D0D7DE'; // Border color for all rectangles
          const backgroundColor = isPast ? 'transparent' : '#F6F8FA'; // Background color for future weeks

          return (
            <div 
              key={keyDate} 
              data-date={keyDate} 
              className={`h-8 max-h-8 py-0.5 px-1 m-0.5 text-center overflow-hidden whitespace-nowrap inline-block`}
              style={{ borderColor, backgroundColor, borderWidth: '1px', borderStyle: 'solid' }}>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LifeInWeeks;


