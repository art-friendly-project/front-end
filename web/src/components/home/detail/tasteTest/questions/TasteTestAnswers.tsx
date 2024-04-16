import { type SetStateAction, type Dispatch } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

interface tasteTestAnswers {
  answer1: string;
  answer2: string;
  checked: boolean[];
  setChecked: Dispatch<SetStateAction<boolean[]>>;
  setAnswer: Dispatch<SetStateAction<number>>;
}

const TasteTestAnswers = ({
  answer1,
  answer2,
  checked,
  setChecked,
  setAnswer,
}: tasteTestAnswers) => {
  const firstBtnHandler = () => {
    setChecked([true, false]);
    setAnswer(0);
  };

  const secondBtnHandler = () => {
    setChecked([false, true]);
    setAnswer(1);
  };

  return (
    <div className="flex flex-col items-center mt-28">
      <button
        className={`relative flex items-center h-32 w-9/10 rounded-xl ${checked[0] ? 'bg-orange-10' : 'bg-gray-00 '}`}
        onClick={firstBtnHandler}
      >
        <span className="ml-4 text-left whitespace-pre-wrap w-7/10 text-Body3-M">
          {answer1}
        </span>
        <IoIosArrowDropdownCircle
          className={`absolute w-10 h-10 text-gray-20 right-4 ${checked[0] ? 'text-orange-100' : 'text-gray-20'}`}
        />
      </button>
      <button
        className={`relative flex items-center h-32 w-9/10 mt-6 rounded-xl ${checked[1] ? 'bg-orange-10' : 'bg-gray-00 '}`}
        onClick={secondBtnHandler}
      >
        <span className="ml-4 text-left whitespace-pre-wrap w-7/10 text-Body3-M">
          {answer2}
        </span>
        <IoIosArrowDropdownCircle
          className={`absolute w-10 h-10 text-gray-20 right-4 ${checked[1] ? 'text-orange-100' : 'text-gray-20'}`}
        />
      </button>
    </div>
  );
};

export default TasteTestAnswers;
