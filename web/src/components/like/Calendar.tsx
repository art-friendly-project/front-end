import { type Dispatch, type SetStateAction } from 'react';
import { MdOutlineCheck } from 'react-icons/md';

interface calendar {
  setCalendarId: Dispatch<SetStateAction<string>>;
  title: string;
  calendarId: string;
  id: string;
  color: string;
}

const Calendar = ({
  calendarId,
  setCalendarId,
  id,
  title,
  color,
}: calendar) => {
  return (
    <label className="relative flex items-center pl-[5%] mb-3">
      <input
        type="radio"
        value={id}
        style={{
          border: `2px solid ${color}`,
          backgroundColor: calendarId === id ? color : '',
        }}
        className="w-5 h-5 appearance-none"
        onChange={(e) => {
          setCalendarId(e.target.value);
        }}
        checked={calendarId === id}
      />
      <MdOutlineCheck className="absolute w-5 h-5 text-white" />
      <span className="ml-3 text-Body3-M">{title}</span>
    </label>
  );
};

export default Calendar;
