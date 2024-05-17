import { type Dispatch, type SetStateAction } from 'react';
import TimeTitle from './TimeTitle';
import TimeInput from './TimeInput';

interface time {
  selectedTime: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
}

const Time = ({ selectedTime, setSelectedTime }: time) => {
  return (
    <div className="flex items-center h-12 w-9/10">
      <TimeTitle />
      <TimeInput
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </div>
  );
};

export default Time;
