import { IoIosArrowDown } from 'react-icons/io';

const ShowTypeFilter = () => {
  return (
    <button className="flex items-center justify-center w-16 h-8 ml-2 border rounded-lg border-gray-20">
      <span className="mr-1 text-Body2-M">전시</span>
      <IoIosArrowDown />
    </button>
  );
};

export default ShowTypeFilter;
