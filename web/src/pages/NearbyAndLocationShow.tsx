import { useEffect, useRef, useState } from 'react';
import FilterList from '../components/home/detail/nearbyAndLocationShow/FilterList';
import ShowList from '../components/home/detail/nearbyAndLocationShow/ShowList';
import FilterSelectModal from '../components/home/detail/nearbyAndLocationShow/FilterSelectModal';
import selectModalInfos from 'assets/data/selectModalInfos';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectLocation } from 'store/modules/location';
import useGeolocation from 'hooks/useGeolocation';
import reverseLocation from 'utils/reverseLocation';
import api from 'api';

const NearbyAndLocationShow = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const [shows, setShows] = useState<show[]>([]);
  const [page, setPage] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const [showType, setShowType] = useState('exhibition');
  const [priority, setPriority] = useState('popular');

  const location = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();

  const setState = [dispatch, setShowType, setPriority];

  const openModalIndex = isModalOpen.indexOf(true);

  const geolocation = useGeolocation();
  void reverseLocation(geolocation);

  const fetchShows = async () => {
    try {
      const result: fetchShow = await api.get(
        `/exhibitions/lists?area=${location}&progressStatus=${'inProgress'}&sortType=${priority}&page=${0}`,
      );
      if (listRef.current !== null) listRef.current.scrollTop = 0;
      setShows(result.data.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchShowsPage = async () => {
    try {
      const result: fetchShow = await api.get(
        `/exhibitions/lists?area=${location}&progressStatus=${'inProgress'}&sortType=${priority}&page=${page}`,
      );
      setShows((prev) => [...prev, ...result.data.data.content]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchShows();
  }, [location, priority]);

  useEffect(() => {
    if (page > 0) void fetchShowsPage();
  }, [page]);

  return (
    <div
      className="flex flex-col w-full h-full overflow-y-scroll scrollbar-hide"
      ref={listRef}
    >
      {isModalOpen.includes(true) ? (
        <FilterSelectModal
          title1={selectModalInfos[openModalIndex].title1}
          title2={selectModalInfos[openModalIndex].title2}
          selects={selectModalInfos[openModalIndex].selects}
          setState={setState[openModalIndex]}
          setIsModalOpen={setIsModalOpen}
          setShows={setShows}
          setPage={setPage}
        />
      ) : null}
      <FilterList
        location={location}
        priority={priority}
        showType={showType}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ShowList shows={shows} setPage={setPage} />
    </div>
  );
};

export default NearbyAndLocationShow;
