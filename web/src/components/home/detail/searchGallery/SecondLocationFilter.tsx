import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface secondLocationFilter {
  secondLocation: string;
  isModalOpen: boolean[];
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
}

const SecondLocationFilter = ({
  secondLocation,
  isModalOpen,
  setIsModalOpen,
}: secondLocationFilter) => {
  return (
    <button
      className={`flex items-center active:bg-gray-00 ml-2 justify-center w-24 h-8 border rounded-lg border-gray-20 ${isModalOpen[1] ? 'bg-orange-100' : ''}`}
      onClick={() => {
        setIsModalOpen([false, true]);
      }}
    >
      <span
        className={`ml-2 text-Body2-M ${isModalOpen[1] ? 'text-white' : ''}`}
      >
        {secondLocation}
      </span>
      <IoIosArrowDown
        className={`ml-auto mr-1 ${isModalOpen[1] ? 'text-white' : ''}`}
      />
    </button>
  );
};

export default SecondLocationFilter;
