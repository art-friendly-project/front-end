import FilterList from 'components/home/detail/searchGallery/FilterList';
import SelectModal from 'components/home/detail/searchGallery/SelectModal';
import { useState } from 'react';

const SearchGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const [firstLocation] = useState('서울');
  const [secondLocation] = useState('강남구');

  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll scrollbar-hide">
      {isModalOpen.includes(true) ? (
        <SelectModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
      <FilterList
        firstLocation={firstLocation}
        secondLocation={secondLocation}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default SearchGallery;
