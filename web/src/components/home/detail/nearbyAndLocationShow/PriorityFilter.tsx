import { IoIosArrowDown } from 'react-icons/io';

interface priorityFilter {
  priority: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const PriorityFilter = ({ priority, setIsModalOpen }: priorityFilter) => {
  return (
    <button
      className="flex items-center justify-center w-20 h-8 ml-2 border rounded-lg border-gray-20"
      onClick={() => {
        setIsModalOpen([false, false, true]);
      }}
    >
      <span className="mr-1 text-Body2-M">
        {priority === 'popularity' ? '인기순' : '최신순'}
      </span>
      <IoIosArrowDown />
    </button>
  );
};

export default PriorityFilter;
