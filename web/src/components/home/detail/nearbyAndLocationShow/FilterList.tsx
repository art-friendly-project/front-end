import LocationFilter from './LocationFilter';
import PriorityFilter from './PriorityFilter';
import ShowTypeFilter from './ShowTypeFilter';

const FilterList = () => {
  return (
    <div className="flex w-full h-16 pl-4 mt-2">
      <LocationFilter />
      <ShowTypeFilter />
      <PriorityFilter />
    </div>
  );
};

export default FilterList;
