import { useState, type Dispatch, type SetStateAction } from 'react';
import CalendarListTitle from './CalendarListTitle';
import CalendarDropDown from './CalendarDropDown';
import SelectedCalendar from './SelectedCalendar';

interface calendarList {
  calendars: calendar[];
  setCalendarId: Dispatch<SetStateAction<string>>;
}

const CalendarList = ({ calendars, setCalendarId }: calendarList) => {
  const [selectedTitle, setSelectedTitle] = useState(calendars[0].title);
  const [selectedColor, setSelectedColor] = useState(calendars[0].color);
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="relative flex items-center h-12 w-9/10">
      <CalendarListTitle />
      <SelectedCalendar
        setIsModal={setIsModal}
        selectedTitle={selectedTitle}
        selectedColor={selectedColor}
      />
      {isModal ? (
        <CalendarDropDown
          calendars={calendars}
          setCalendarId={setCalendarId}
          selectedTitle={selectedTitle}
          setSelectedTitle={setSelectedTitle}
          setSelectedColor={setSelectedColor}
          setIsModal={setIsModal}
        />
      ) : null}
    </div>
  );
};

export default CalendarList;
