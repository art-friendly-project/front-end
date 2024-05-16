import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface timeInput {
  selectedTime: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
}

const TimeInput = ({ selectedTime, setSelectedTime }: timeInput) => {
  return (
    <label className="relative flex items-center ml-auto text-Body3-M text-gray-110">
      <input
        type="time"
        className={`flex h-10 rounded-lg outline-none appearance-none bg-gray-00 ${window.platform === 'android' ? 'pl-2 w-28' : 'w-20 pr-4'}`}
        value={selectedTime}
        onChange={(e) => {
          setSelectedTime(e.target.value);
        }}
      />
      <IoIosArrowDown className="absolute right-2 text-gray-110" />
    </label>
  );
};

export default TimeInput;
