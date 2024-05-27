import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

interface leftArrowBtn {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

const LeftArrowBtn = ({ setCurrentPage, currentPage }: leftArrowBtn) => {
  return (
    <button
      className={`z-30 flex justify-center items-center absolute w-10 h-10 top-[4rem] left-2 text-white bg-gray-100 ${currentPage === 0 ? 'opacity-20' : 'opacity-60'}`}
      disabled={currentPage === 0}
      onClick={() => {
        setCurrentPage((prev) => prev - 1);
      }}
    >
      <IoIosArrowBack className="w-4 h-4" />
    </button>
  );
};

export default LeftArrowBtn;
