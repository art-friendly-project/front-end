import { IoIosArrowForward } from 'react-icons/io';

interface rightArrowBtn {
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<number>>;
  posterLength: number;
}

const RightArrowBtn = ({
  setCurrentPosterNum,
  posterLength,
}: rightArrowBtn) => {
  return (
    <button
      onClick={() => {
        setCurrentPosterNum((prev) => (prev + 1 + posterLength) % posterLength);
      }}
      className="absolute top-[8.5rem] right-1 z-10"
    >
      <IoIosArrowForward className="w-10 h-10 text-white opacity-50" />
    </button>
  );
};

export default RightArrowBtn;
