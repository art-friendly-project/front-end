import { useEffect, useRef, useState } from 'react';
import FilterList from '../components/home/detail/nearbyAndLocationShow/FilterList';
import ShowList from '../components/home/detail/nearbyAndLocationShow/ShowList';
import FilterSelectModal from '../components/home/detail/nearbyAndLocationShow/FilterSelectModal';
import selectModalInfos from 'assets/data/selectModalInfos';
import { useAppSelector } from 'hooks';
import api from 'api';
import useGeolocation from 'hooks/useGeolocation';
import reverseLocation from 'utils/reverseLocation';
import { selectShowsLocation } from 'store/modules/showsLocation';
import ShowDetail from './ShowDetail';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import LoadingSpineer from 'components/common/LoadingSpineer';

const NearbyAndLocationShow = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const [shows, setShows] = useState<show[]>([]);
  const [showId, setShowId] = useState(0);

  const [priority, setPriority] = useState('popular');
  const location = useAppSelector(selectShowsLocation);

  const [page, setPage] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);

  const openModalIndex = isModalOpen.indexOf(true);

  const geolocation = useGeolocation();
  void reverseLocation(geolocation);

  const fetchShows = async () => {
    setLoading(false);

    try {
      const result: fetchShow = await api.get(
        `/exhibitions/lists?area=${location}&progressStatus=${'inProgress'}&sortType=${priority}&page=${0}`,
      );
      setLoading(true);
      if (listRef.current !== null) listRef.current.scrollTop = 0;
      setShows(result.data.data.content);
      setPage(0);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchShowsPage = async () => {
    setPageLoading(false);
    try {
      const result: fetchShow = await api.get(
        `/exhibitions/lists?area=${location}&progressStatus=${'inProgress'}&sortType=${priority}&page=${page}`,
      );
      setPageLoading(true);
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
      {showId !== 0 ? (
        <ShowDetail showId={showId} setShowId={setShowId} />
      ) : null}
      {isModalOpen.includes(true) ? (
        <FilterSelectModal
          type={selectModalInfos[openModalIndex].type}
          title1={selectModalInfos[openModalIndex].title1}
          title2={selectModalInfos[openModalIndex].title2}
          selects={selectModalInfos[openModalIndex].selects}
          setIsModalOpen={setIsModalOpen}
          setPriority={setPriority}
        />
      ) : null}
      <FilterList
        location={location}
        priority={priority}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {loading ? (
        <>
          <ShowList shows={shows} setPage={setPage} setShowId={setShowId} />
          {pageLoading ? null : <PageLoadingSpineer />}
        </>
      ) : (
        <LoadingSpineer />
      )}
    </div>
  );
};

export default NearbyAndLocationShow;
