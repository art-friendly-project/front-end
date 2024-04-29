import { useState } from 'react';
import Calendar from './Calendar';

interface calendarList {
  calendars: calendar[];
}

const CalendarList = ({ calendars }: calendarList) => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className="flex flex-col">
      {calendars.map((calendar) => (
        <Calendar
          key={calendar.id}
          id={calendar.id}
          value={value}
          setValue={setValue}
          title={calendar.title}
          color={calendar.color}
        />
      ))}
    </div>
  );
};

export default CalendarList;
