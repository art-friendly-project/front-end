import { type Dispatch, type SetStateAction } from 'react';
import Calendar from './Calendar';

interface calendarList {
  calendars: calendar[];
  deadline: string;
  scheduleName: string;
  calendarId: string;
  setCalendarId: Dispatch<SetStateAction<string>>;
}

const CalendarList = ({
  calendars,
  calendarId,
  setCalendarId,
}: calendarList) => {
  return (
    <div className="flex flex-col w-full">
      {calendars.map((calendar) => (
        <Calendar
          key={calendar.id}
          id={calendar.id}
          calendarId={calendarId}
          setCalendarId={setCalendarId}
          title={calendar.title}
          color={calendar.color}
        />
      ))}
    </div>
  );
};

export default CalendarList;
