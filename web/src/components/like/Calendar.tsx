import { type Dispatch, type SetStateAction } from 'react';
import { MdOutlineCheck } from 'react-icons/md';

interface calendar {
  setValue: Dispatch<SetStateAction<string>>;
  title: string;
  value: string;
  id: string;
  color: string;
}

const Calendar = ({ value, setValue, id, title, color }: calendar) => {
  return (
    <label className="relative flex items-center mb-2">
      <input
        type="radio"
        value={id}
        style={{
          border: `2px solid ${color}`,
          backgroundColor: value === id ? color : '',
        }}
        className="w-5 h-5 appearance-none"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        checked={value === id}
      />
      <MdOutlineCheck className="absolute w-5 h-5 text-white" />
      <span className="ml-3 text-Body3-M">{title}</span>
    </label>
  );
};

export default Calendar;
