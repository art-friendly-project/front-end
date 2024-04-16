import { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

interface tasteTestAnswers {
  answer1: string;
  answer2: string;
}

const TasteTestAnswers = ({ answer1, answer2 }: tasteTestAnswers) => {
  const [checked, setChecked] = useState([false, false]);

  const firstBtnHandler = () => {
    setChecked([true, false]);
  };

  const secondBtnHandler = () => {
    setChecked([false, true]);
  };

  return (
    <div className="flex flex-col items-center mt-28">
      <button
        className={`relative flex items-center h-32 w-9/10 rounded-xl ${checked[0] ? 'bg-orange-10' : 'bg-gray-00 '}`}
        onClick={firstBtnHandler}
      >
        <span className="ml-4 w-19/25">{answer1}</span>
        <IoIosArrowDropdownCircle
          className={`absolute w-10 h-10 text-gray-20 right-4 ${checked[0] ? 'text-orange-100' : 'text-gray-20'}`}
        />
      </button>
      <button
        className={`relative flex items-center h-32 w-9/10 mt-6 rounded-xl ${checked[1] ? 'bg-orange-10' : 'bg-gray-00 '}`}
        onClick={secondBtnHandler}
      >
        <span className="ml-4 w-19/25">{answer2}</span>
        <IoIosArrowDropdownCircle
          className={`absolute w-10 h-10 text-gray-20 right-4 ${checked[1] ? 'text-orange-100' : 'text-gray-20'}`}
        />
      </button>
    </div>
  );
};

export default TasteTestAnswers;
