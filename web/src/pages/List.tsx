import FilterList from 'components/home/detail/nearbyAndLocationShow/FilterList';
import FilterSelectModal from 'components/home/detail/nearbyAndLocationShow/FilterSelectModal';
import ShowList from '../components/home/detail/nearbyAndLocationShow/ShowList';
import { useAppSelector } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { selectShowsLocation } from 'store/modules/showsLocation';
import DurationList from 'components/list/DurationList';
import selectModalInfos from 'assets/data/selectModalInfos';
import api from 'api';
import ShowDetail from './ShowDetail';
import LoadingSpineer from 'components/common/LoadingSpineer';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';

const List = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const [shows, setShows] = useState<show[]>([]);
  const [showId, setShowId] = useState(0);
  const [page, setPage] = useState(0);
  const [priority, setPriority] = useState('popular');
  const [duration, setDuration] = useState('inProgress');
  const location = useAppSelector(selectShowsLocation);

  const [isModalOpen, setIsModalOpen] = useState([false, false]);

  const openModalIndex = isModalOpen.indexOf(true);

  const fetchShow = async () => {
    setLoading(false);
    try {
      const result: fetchShow = await api.get(
        `/exhibitions/lists?area=${location}&progressStatus=${duration}&sortType=${priority}&page=${0}`,
      );
      if (listRef.current !== null) listRef.current.scrollTop = 0;

      setLoading(true);
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
        `/exhibitions/lists?area=${location}&progressStatus=${duration}&sortType=${priority}&page=${page}`,
      );
      setPageLoading(true);
      setShows([...shows, ...result.data.data.content]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (page > 0) void fetchShowsPage();
  }, [page]);

  useEffect(() => {
    void fetchShow();
  }, [location, duration, priority]);

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
      <div className="sticky top-0 z-10 bg-white">
        <DurationList duration={duration} setDuration={setDuration} />
        <FilterList
          location={location}
          priority={priority}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
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

export default List;
