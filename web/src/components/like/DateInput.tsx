import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import todayDate from 'utils/todayDate';

interface dateInput {
  currentTerm: string[];
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

const DateInput = ({
  currentTerm,
  selectedDate,
  setSelectedDate,
}: dateInput) => {
  const [minTerm, maxTerm] = currentTerm;

  useEffect(() => {
    setSelectedDate(todayDate());
  }, [todayDate]);

  return (
    <label className="relative flex items-center ml-auto text-Body3-M text-gray-110">
      <input
        className={`flex w-32 h-10 rounded-lg outline-none appearance-none bg-gray-00 ${window.platform === 'android' ? 'pl-2' : 'pr-4'}`}
        type="date"
        min={minTerm}
        max={maxTerm}
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e.target.value);
        }}
      />
      <IoIosArrowDown className="absolute right-2 text-gray-110" />
    </label>
  );
};

export default DateInput;
