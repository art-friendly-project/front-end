import { IoIosArrowDown } from 'react-icons/io';

const LocationFilter = () => {
  return (
    <button className="flex items-center justify-center w-24 h-8 border rounded-lg border-gray-20">
      <span className="mr-1 text-Body2-M">서울</span>
      <IoIosArrowDown />
    </button>
  );
};

export default LocationFilter;
