import { IoIosArrowBack } from 'react-icons/io';

interface leftArrowBtn {
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<number>>;
  posterLength: number;
}

const LeftArrowBtn = ({ setCurrentPosterNum, posterLength }: leftArrowBtn) => {
  return (
    <button
      onClick={() => {
        setCurrentPosterNum((prev) => (prev - 1 + posterLength) % posterLength);
      }}
      className="absolute top-[8.5rem] z-10"
    >
      <IoIosArrowBack className="w-10 h-10 text-white opacity-50" />
    </button>
  );
};

export default LeftArrowBtn;
