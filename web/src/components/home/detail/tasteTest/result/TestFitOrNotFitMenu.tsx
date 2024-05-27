import { type Dispatch, type SetStateAction } from 'react';

interface testFitOrNotFitMenu {
  active: boolean[];
  setActive: Dispatch<SetStateAction<boolean[]>>;
}

const TestFitOrNotFitMenu = ({ active, setActive }: testFitOrNotFitMenu) => {
  return (
    <div className="flex w-full px-6 mt-8 text-Body3">
      <button
        className={`w-1/2 h-10 pb-4 text-center border-b-4 ${active[0] ? 'border-b-orange-100' : 'border-b-gray-30 text-gray-70'} `}
        onClick={() => {
          setActive([true, false]);
        }}
      >
        잘 맞는 유형
      </button>
      <button
        className={`w-1/2 h-10 pb-4 text-center border-b-4 ${active[1] ? 'border-b-orange-100' : 'border-b-gray-30 text-gray-70'} `}
        onClick={() => {
          setActive([false, true]);
        }}
      >
        잘 맞지 않는 유형
      </button>
    </div>
  );
};

export default TestFitOrNotFitMenu;
