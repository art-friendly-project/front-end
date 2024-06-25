import LocationFilter from './LocationFilter';
import PriorityFilter from './PriorityFilter';

interface filterList {
  location: string;
  priority: string;
  isModalOpen: boolean[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const FilterList = ({
  location,
  priority,
  isModalOpen,
  setIsModalOpen,
}: filterList) => {
  return (
    <div className="flex items-center sticky z-10 bg-white w-full py-2 pl-[5%] top-0">
      <LocationFilter
        location={location}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <PriorityFilter
        priority={priority}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default FilterList;
