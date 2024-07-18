import { type Dispatch, type SetStateAction } from 'react';

interface term {
  title: string;
  idx: number;
  setIsModal: Dispatch<SetStateAction<boolean[]>>;
}

const Term = ({ title, idx, setIsModal }: term) => {
  const termBtnHandler = () => {
    setIsModal((prev) => {
      return prev.map((_, i) => {
        if (i === idx) return true;
        else return false;
      });
    });
  };
  return (
    <button
      className={`text-Body1-M ${idx < 1 ? 'border-r border-r-gray-40 pr-2 mr-2' : ''}`}
      onClick={termBtnHandler}
    >
      {title}
    </button>
  );
};

export default Term;
