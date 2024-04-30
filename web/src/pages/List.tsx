import FilterList from 'components/home/detail/nearbyAndLocationShow/FilterList';
import FilterSelectModal from 'components/home/detail/nearbyAndLocationShow/FilterSelectModal';
import ShowList from '../components/home/detail/nearbyAndLocationShow/ShowList';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useState } from 'react';
import { selectLocation } from 'store/modules/location';
import { nearbyShows } from 'mock/mockData';
import DurationList from 'components/list/DurationList';
import selectModalInfos from 'assets/data/selectModalInfos';

const List = () => {
  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const [duration, setDuration] = useState('ongoing');
  const [showType, setShowType] = useState('exhibition');
  const [priority, setPriority] = useState('popularity');

  const location = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();

  console.log(location);

  const setState = [dispatch, setShowType, setPriority];

  const openModalIndex = isModalOpen.indexOf(true);

  return (
    <div className="flex flex-col w-full h-full">
      {isModalOpen.includes(true) ? (
        <FilterSelectModal
          title1={selectModalInfos[openModalIndex].title1}
          title2={selectModalInfos[openModalIndex].title2}
          selects={selectModalInfos[openModalIndex].selects}
          setState={setState[openModalIndex]}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
      <DurationList duration={duration} setDuration={setDuration} />
      <div className="absolute w-full top-[1.8rem]">
        <FilterList
          location={location}
          priority={priority}
          showType={showType}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <div className="mt-8">
        <ShowList nearbyShows={nearbyShows} />
      </div>
    </div>
  );
};

export default List;
