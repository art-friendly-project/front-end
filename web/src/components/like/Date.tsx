import { type Dispatch, type SetStateAction } from 'react';
import DateInput from './DateInput';
import DateTitle from './DateTitle';

interface date {
  currentTerm: string;
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

const Date = ({ currentTerm, selectedDate, setSelectedDate }: date) => {
  return (
    <div className="flex items-center h-12 w-9/10">
      <DateTitle />
      <DateInput
        currentTerm={currentTerm}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default Date;
