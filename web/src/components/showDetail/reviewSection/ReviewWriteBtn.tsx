import { IoIosArrowForward } from 'react-icons/io';

const ReviewWriteBtn = () => {
  return (
    <button className="absolute flex items-center top-4 text-gray-80 right-4">
      <span>담벼락 남기기</span>
      <IoIosArrowForward />
    </button>
  );
};

export default ReviewWriteBtn;
