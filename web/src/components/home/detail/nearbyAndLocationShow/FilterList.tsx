import LocationFilter from './LocationFilter';
import PriorityFilter from './PriorityFilter';
import ShowTypeFilter from './ShowTypeFilter';

interface filterList {
  location: string;
  showType: string;
  priority: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const FilterList = ({
  location,
  showType,
  priority,
  setIsModalOpen,
}: filterList) => {
  return (
    <div className="flex w-full h-16 pl-4 mt-2">
      <LocationFilter location={location} setIsModalOpen={setIsModalOpen} />
      <ShowTypeFilter showType={showType} setIsModalOpen={setIsModalOpen} />
      <PriorityFilter priority={priority} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default FilterList;
