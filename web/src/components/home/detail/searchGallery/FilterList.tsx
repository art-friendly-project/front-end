import { type Dispatch, type SetStateAction } from 'react';
import FirstLocationFilter from './FirstLocationFilter';
import SecondLocationFilter from './SecondLocationFilter';

interface filterList {
  firstLocation: string;
  secondLocation: string;
  isModalOpen: boolean[];
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
}

const FilterList = ({
  firstLocation,
  secondLocation,
  isModalOpen,
  setIsModalOpen,
}: filterList) => {
  return (
    <div className="flex items-center sticky z-10 bg-white w-full py-2 pl-[5%] top-0 mb-4">
      <FirstLocationFilter
        firstLocation={firstLocation}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <SecondLocationFilter
        secondLocation={secondLocation}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default FilterList;
