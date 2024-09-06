import { type Gallery, gallerys } from 'assets/data/gallerys';
import { firstSelect, secondSelect } from 'assets/data/gallerySelects';
import FilterList from 'components/home/detail/searchGallery/FilterList';
import GalleryList from 'components/home/detail/searchGallery/GalleryList';
import SelectModal from 'components/home/detail/searchGallery/SelectModal';
import { useEffect, useState } from 'react';

const SearchGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const [firstLocation, setFirstLocation] = useState('서울특별시');
  const [secondLocation, setSecondLocation] = useState('강남구');
  const [galleryList, setGalleryList] = useState<Gallery[]>([]);

  const openModalIndex = isModalOpen.indexOf(true);

  const selects = [
    firstSelect,
    firstLocation === '서울특별시' ? secondSelect[0] : secondSelect[1],
  ];

  const setState = [setFirstLocation, setSecondLocation];

  useEffect(() => {
    if (firstLocation === '서울특별시') {
      setSecondLocation('강남구');
    } else {
      setSecondLocation('가평군');
    }
  }, [firstLocation]);

  useEffect(() => {
    const selectedGallery = gallerys[firstLocation][secondLocation];
    setGalleryList(selectedGallery);
  }, [firstLocation, secondLocation]);

  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll scrollbar-hide">
      {isModalOpen.includes(true) ? (
        <SelectModal
          firstLocation={firstLocation}
          setIsModalOpen={setIsModalOpen}
          selects={selects[openModalIndex]}
          setState={setState[openModalIndex]}
        />
      ) : null}
      <FilterList
        firstLocation={firstLocation}
        secondLocation={secondLocation}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {galleryList?.map((gallery) => (
        <GalleryList
          key={gallery.id}
          id={gallery.id}
          imgUrl={gallery.imgUrl}
          name={gallery.name}
          location={gallery.location}
          firstLocation={firstLocation}
          secondLocation={secondLocation}
        />
      ))}
    </div>
  );
};

export default SearchGallery;
