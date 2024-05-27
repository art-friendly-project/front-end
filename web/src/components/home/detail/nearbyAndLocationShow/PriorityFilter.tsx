import { IoIosArrowDown } from 'react-icons/io';

interface priorityFilter {
  priority: string;
  isModalOpen: boolean[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const PriorityFilter = ({
  priority,
  isModalOpen,
  setIsModalOpen,
}: priorityFilter) => {
  return (
    <button
      className={`flex active:bg-gray-00 items-center justify-center w-20 h-8 ml-2 border rounded-lg border-gray-20 ${isModalOpen[2] ? 'bg-orange-100' : ''}`}
      onClick={() => {
        setIsModalOpen([false, false, true]);
      }}
    >
      <span
        className={`mr-1 text-Body2-M ${isModalOpen[2] ? 'text-white' : ''}`}
      >
        {priority === 'popular' ? '인기순' : '최신순'}
      </span>
      <IoIosArrowDown className={isModalOpen[2] ? 'text-white' : ''} />
    </button>
  );
};

export default PriorityFilter;
