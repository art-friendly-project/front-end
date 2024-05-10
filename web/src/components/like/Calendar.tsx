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
    <div className="relative flex">
      <label className="flex items-center ml-[5%] mb-3 w-9/10" htmlFor={id}>
        <span className="text-Body3-M">{title}</span>
        <MdOutlineCheck className="absolute w-5 h-5 text-white right-[5%] bottom-4" />
      </label>
      <input
        type="radio"
        id={id}
        value={id}
        style={{
          border: `2px solid ${color}`,
          backgroundColor: calendarId === id ? color : '',
        }}
        className="w-5 h-5 ml-auto appearance-none mr-[5%]"
        onChange={(e) => {
          setCalendarId(e.target.value);
        }}
        checked={calendarId === id}
      />
    </div>
  );
};

export default Calendar;
