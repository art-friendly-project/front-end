import { type Dispatch, type SetStateAction } from 'react';
import Calendar from './Calendar';

interface calendarDropDown {
  calendars: calendar[];
  selectedTitle: string;
  setCalendarId: Dispatch<SetStateAction<string>>;
  setSelectedTitle: Dispatch<SetStateAction<string>>;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const CalendarDropDown = ({
  calendars,
  selectedTitle,
  setCalendarId,
  setSelectedTitle,
  setSelectedColor,
  setIsModal,
}: calendarDropDown) => {
  return (
    <div className="absolute right-0 z-10 flex flex-col rounded-lg top-1 bg-gray-00">
      {calendars.map((calendar, idx) => (
        <Calendar
          key={calendar.id}
          id={calendar.id}
          title={calendar.title}
          color={calendar.color}
          selectedTitle={selectedTitle}
          length={calendars.length}
          idx={idx}
          setCalendarId={setCalendarId}
          setSelectedTitle={setSelectedTitle}
          setSelectedColor={setSelectedColor}
          setIsModal={setIsModal}
        />
      ))}
    </div>
  );
};

export default CalendarDropDown;
