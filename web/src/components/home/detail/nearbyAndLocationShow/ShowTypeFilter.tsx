import { IoIosArrowDown } from 'react-icons/io';

interface showTypeFilter {
  showType: string;
  isModalOpen: boolean[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const ShowTypeFilter = ({
  showType,
  isModalOpen,
  setIsModalOpen,
}: showTypeFilter) => {
  return (
    <button
      className={`flex items-center justify-center w-20 h-8 ml-2 border rounded-lg border-gray-20 ${isModalOpen[1] ? 'bg-orange-100' : ''}`}
      onClick={() => {
        setIsModalOpen([false, true, false]);
      }}
    >
      <span
        className={`mr-1 text-Body2-M ${isModalOpen[1] ? 'text-white' : ''}`}
      >
        {showType === 'exhibition' ? '전시' : '행사'}
      </span>
      <IoIosArrowDown className={isModalOpen[1] ? 'text-white' : ''} />
    </button>
  );
};

export default ShowTypeFilter;
