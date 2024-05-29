import LocationFilter from './LocationFilter';
import PriorityFilter from './PriorityFilter';

interface filterList {
  location: string;
  showType: string;
  priority: string;
  isModalOpen: boolean[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const FilterList = ({
  location,
  showType,
  priority,
  isModalOpen,
  setIsModalOpen,
}: filterList) => {
  return (
    <div className="flex items-center absolute z-10 bg-white w-full h-16 pl-[5%] mt-2 top-16">
      <LocationFilter
        location={location}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {/* <ShowTypeFilter
        showType={showType}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      /> */}
      <PriorityFilter
        priority={priority}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default FilterList;
