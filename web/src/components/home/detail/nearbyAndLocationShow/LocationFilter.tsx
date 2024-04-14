import { IoIosArrowDown } from 'react-icons/io';

interface locationFilter {
  location: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const LocationFilter = ({ location, setIsModalOpen }: locationFilter) => {
  return (
    <button
      className="flex items-center justify-center w-24 h-8 border rounded-lg border-gray-20"
      onClick={() => {
        setIsModalOpen([true, false, false]);
      }}
    >
      <span className="mr-1 text-Body2-M">{location}</span>
      <IoIosArrowDown />
    </button>
  );
};

export default LocationFilter;
