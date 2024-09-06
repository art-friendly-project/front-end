import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface firstLocationFilter {
  firstLocation: string;
  isModalOpen: boolean[];
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
}

const FirstLocationFilter = ({
  firstLocation,
  isModalOpen,
  setIsModalOpen,
}: firstLocationFilter) => {
  return (
    <button
      className={`flex items-center active:bg-gray-00 justify-center w-24 h-8 border rounded-lg border-gray-20 ${isModalOpen[0] ? 'bg-orange-100' : ''}`}
      onClick={() => {
        setIsModalOpen([true, false]);
      }}
    >
      <span
        className={`ml-2 text-Body2-M ${isModalOpen[0] ? 'text-white' : ''}`}
      >
        {firstLocation}
      </span>
      <IoIosArrowDown
        className={`ml-auto mr-1 ${isModalOpen[0] ? 'text-white' : ''}`}
      />
    </button>
  );
};

export default FirstLocationFilter;
