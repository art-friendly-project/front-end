import { useEffect, useRef, useState } from 'react';
import FilterList from '../components/home/detail/nearbyAndLocationShow/FilterList';
import ShowList from '../components/home/detail/nearbyAndLocationShow/ShowList';
import FilterSelectModal from '../components/home/detail/nearbyAndLocationShow/FilterSelectModal';
import selectModalInfos from 'assets/data/selectModalInfos';
import api from 'api';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import isApp from 'utils/isApp';
import { useNavigate } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useAppSelector } from 'hooks';
import { selectShowsLocation } from 'store/modules/showsLocation';

const NearbyAndLocationShow = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const [showId, setShowId] = useState(0);
  const [location, setLocation] = useState('서울');
  const [priority, setPriority] = useState('popular');
  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const [totalPages, setTotalPages] = useState(0);

  const setState = [setLocation, setPriority];
  const openModalIndex = isModalOpen.indexOf(true);

  const getShowList = async (
    page: number,
    location: string,
    priority: string,
  ) => {
    const res: fetchShow = await api.get(
      `/exhibitions/lists?area=${location}&progressStatus=inProgress&sortType=${priority}&page=${page}`,
    );
    setTotalPages(res.data.data.totalPages);
    return res.data.data.content;
  };

  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['showList', location, priority],
      queryFn: async ({ pageParam }) => {
        return await getShowList(pageParam, location, priority);
      },
      getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
        const nextPage = lastPageParam + 1;
        if (nextPage < totalPages) {
          return nextPage;
        }
      },
      initialPageParam: 0,
      staleTime: 5 * 60 * 1000,
    });

  useEffect(() => {
    if (isApp()) {
      const modalColse = (e: MessageEvent<string>) => {
        const data: {
          url: string;
        } = JSON.parse(e.data);

        if (data.url === '/home/nearby') {
          if (showId === 0) {
            navigate('/home');
            return;
          }

          if (showId !== 0) {
            setShowId(0);
          }
        }
      };

      if (window.platform === 'android') {
        document.addEventListener('message', modalColse);
      }

      if (window.platform === 'ios') {
        window.addEventListener('message', modalColse);
      }

      return () => {
        if (window.platform === 'android') {
          document.removeEventListener('message', modalColse);
        }

        if (window.platform === 'ios') {
          window.removeEventListener('message', modalColse);
        }
      };
    }
  }, [showId]);

  const selectLocation = useAppSelector(selectShowsLocation);

  useEffect(() => {
    setLocation(selectLocation);
  }, [selectLocation]);

  if (isLoading) {
    return <PageLoadingSpineer />;
  }

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
          setIsModalOpen={setIsModalOpen}
          setState={setState[openModalIndex]}
        />
      ) : null}
      <FilterList
        location={location}
        priority={priority}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {data?.pages.map((shows, idx) => (
        <ShowList
          key={idx}
          shows={shows}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      ))}
    </div>
  );
};

export default NearbyAndLocationShow;
