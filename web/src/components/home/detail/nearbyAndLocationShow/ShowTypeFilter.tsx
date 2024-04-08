import { IoIosArrowDown } from 'react-icons/io';

interface showTypeFilter {
  showType: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const ShowTypeFilter = ({ showType, setIsModalOpen }: showTypeFilter) => {
  return (
    <button
      className="flex items-center justify-center w-20 h-8 ml-2 border rounded-lg border-gray-20"
      onClick={() => {
        setIsModalOpen([false, true, false]);
      }}
    >
      <span className="mr-1 text-Body2-M">
        {showType === 'exhibition' ? '전시' : '행사'}
      </span>
      <IoIosArrowDown />
    </button>
  );
};

export default ShowTypeFilter;
