import { useState } from 'react';
import Calendar from './Calendar';
import BtnBasic from 'components/common/BtnBasic';

interface calendarList {
  calendars: calendar[];
}

const CalendarList = ({ calendars }: calendarList) => {
  const [value, setValue] = useState('');
  console.log(value);
  const btnHandler = () => {};

  return (
    <div className="flex flex-col w-full">
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
      <div className="mt-5">
        <BtnBasic
          name="일정추가"
          fn={btnHandler}
          disable={value.length === 0}
        />
      </div>
    </div>
  );
};

export default CalendarList;
