import { type Dispatch, type SetStateAction } from 'react';
import CalendarList from './CalendarList';
import Date from './Date';
import Time from './Time';

interface schedule {
  calendars: calendar[];
  scheduleName: string;
  setCalendarId: Dispatch<SetStateAction<string>>;
  currentTerm: string[];
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  setSelectedTime: Dispatch<SetStateAction<string>>;
  selectedTime: string;
}

const Schedule = ({
  calendars,
  setCalendarId,
  currentTerm,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: schedule) => {
  return (
    <div className="flex flex-col items-center w-full h-48">
      <CalendarList calendars={calendars} setCalendarId={setCalendarId} />
      <Date
        currentTerm={currentTerm}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Time selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
    </div>
  );
};

export default Schedule;
