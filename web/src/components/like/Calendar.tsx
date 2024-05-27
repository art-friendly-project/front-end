import { type Dispatch, type SetStateAction } from 'react';
import { BsCheckLg } from 'react-icons/bs';

interface calendar {
  selectedTitle: string;
  title: string;
  id: string;
  color: string;
  length: number;
  idx: number;
  setCalendarId: Dispatch<SetStateAction<string>>;
  setSelectedTitle: Dispatch<SetStateAction<string>>;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const Calendar = ({
  selectedTitle,
  id,
  title,
  color,
  length,
  idx,
  setCalendarId,
  setSelectedTitle,
  setSelectedColor,
  setIsModal,
}: calendar) => {
  const CalendarBtnHandler = () => {
    setCalendarId(id);
    setSelectedTitle(title);
    setSelectedColor(color);
    setIsModal(false);
  };
  return (
    <button
      className={`relative flex h-10 pr-3 items-center ${length - 1 === idx ? '' : 'border-b border-b-gray-20'}`}
      onClick={CalendarBtnHandler}
    >
      <div className="w-5 mx-1">
        {selectedTitle === title ? (
          <BsCheckLg className="w-5 h-5 text-gray-110" />
        ) : null}
      </div>
      <span className="mr-4 text-Body3-M text-gray-110">{title}</span>
      <div
        className="w-4 h-4 ml-auto rounded-full"
        style={{ backgroundColor: color }}
      />
    </button>
  );
};

export default Calendar;
