import FilterList from 'components/home/detail/nearbyAndLocationShow/FilterList';
import FilterSelectModal from 'components/home/detail/nearbyAndLocationShow/FilterSelectModal';
import ShowList from '../components/home/detail/nearbyAndLocationShow/ShowList';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { selectLocation } from 'store/modules/location';
import DurationList from 'components/list/DurationList';
import selectModalInfos from 'assets/data/selectModalInfos';
import api from 'api';

const List = () => {
  const [shows, setShows] = useState<show[]>([]);

  const [page, setPage] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const [duration, setDuration] = useState('inProgress');
  const [showType, setShowType] = useState('exhibition');
  const [priority, setPriority] = useState('popular');

  const location = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();

  const setState = [dispatch, setShowType, setPriority];

  const openModalIndex = isModalOpen.indexOf(true);

  const fetchShows = async () => {
    try {
      const result: fetchShow = await api.get(
        `/exhibitions/lists?area=${location}&progressStatus=${duration}&sortType=${priority}&page=${page}`,
      );
      setShows((prev) => [...prev, ...result.data.data.content]);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchShows();
  }, [location, duration, priority, page]);

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
        <ShowList shows={shows} setPage={setPage} />
      </div>
    </div>
  );
};

export default List;
