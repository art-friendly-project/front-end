import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { type review } from './ReviewContainer';

interface leftArrowBtn {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setReviewsBox: Dispatch<SetStateAction<review[][]>>;
  currentPage: number;
}

const LeftArrowBtn = ({
  setCurrentPage,
  setReviewsBox,
  currentPage,
}: leftArrowBtn) => {
  return (
    <button
      className={`z-10 flex justify-center items-center absolute w-10 h-10 left-2 top-[19.25rem] text-white bg-gray-100 ${currentPage === 0 ? 'opacity-20' : 'opacity-60'}`}
      disabled={currentPage === 0}
      onClick={() => {
        setCurrentPage((prev) => prev - 1);
        setTimeout(() => {
          setReviewsBox((prev) => prev.slice(0, prev.length - 1));
        }, 500);
      }}
    >
      <IoIosArrowBack className="w-4 h-4" />
    </button>
  );
};

export default LeftArrowBtn;
