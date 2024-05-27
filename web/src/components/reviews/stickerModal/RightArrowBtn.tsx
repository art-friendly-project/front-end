import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface rightArrowBtn {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  MAX_PAGE: number;
}

const RightArrowBtn = ({
  setCurrentPage,
  currentPage,
  MAX_PAGE,
}: rightArrowBtn) => {
  return (
    <button
      className={`z-10 flex justify-center items-center absolute w-10 h-10 top-[4rem] right-2 text-white bg-gray-100 ${currentPage + 1 === MAX_PAGE ? 'opacity-20' : 'opacity-60'}`}
      disabled={currentPage + 1 === MAX_PAGE}
      onClick={() => {
        setCurrentPage((prev) => prev + 1);
      }}
    >
      <IoIosArrowForward className="w-4 h-4" />
    </button>
  );
};

export default RightArrowBtn;
