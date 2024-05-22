import { useEffect, useState } from 'react';
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
  const [shows, setShows] = useState<show[]>([]);

  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const [showType, setShowType] = useState('exhibition');
  const [priority, setPriority] = useState('popular');

  const [page] = useState(0);
  const [, setTotalPages] = useState(0);

  const location = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();

  const setState = [dispatch, setShowType, setPriority];

  const openModalIndex = isModalOpen.indexOf(true);

  const geolocation = useGeolocation();
  void reverseLocation(geolocation);

  const fetchShows = async () => {
    try {
      const result: fetchShow = await api.get(
        `/exhibitions/lists?area=${location}&progressStatus=${'inProgress'}&sortType=${priority}&page=${page}`,
      );
      setShows(result.data.data.content);
      setTotalPages(result.data.data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchShows();
  }, [location, priority, page]);

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
      <FilterList
        location={location}
        priority={priority}
        showType={showType}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ShowList shows={shows} />
    </div>
  );
};

export default NearbyAndLocationShow;
