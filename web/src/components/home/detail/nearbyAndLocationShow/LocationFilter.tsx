import { IoIosArrowDown } from 'react-icons/io';

interface locationFilter {
  location: string;
  isModalOpen: boolean[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const LocationFilter = ({
  location,
  isModalOpen,
  setIsModalOpen,
}: locationFilter) => {
  return (
    <button
      className={`flex items-center justify-center w-24 h-8 border rounded-lg border-gray-20 ${isModalOpen[0] ? 'bg-orange-100' : ''}`}
      onClick={() => {
        setIsModalOpen([true, false, false]);
      }}
    >
      <span
        className={`mr-1 text-Body2-M ${isModalOpen[0] ? 'text-white' : ''}`}
      >
        {location}
      </span>
      <IoIosArrowDown className={isModalOpen[0] ? 'text-white' : ''} />
    </button>
  );
};

export default LocationFilter;
