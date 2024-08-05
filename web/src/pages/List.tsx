import FilterList from 'components/home/detail/nearbyAndLocationShow/FilterList';
import FilterSelectModal from 'components/home/detail/nearbyAndLocationShow/FilterSelectModal';
import ShowList from '../components/home/detail/nearbyAndLocationShow/ShowList';
import { useRef, useState } from 'react';
import DurationList from 'components/list/DurationList';
import selectModalInfos from 'assets/data/selectModalInfos';
import api from 'api';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import { useInfiniteQuery } from '@tanstack/react-query';

const List = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const [location, setLocation] = useState('서울');
  const [priority, setPriority] = useState('popular');
  const [duration, setDuration] = useState('inProgress');
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const [totalPages, setTotalPages] = useState(0);

  const setState = [setLocation, setPriority];
  const openModalIndex = isModalOpen.indexOf(true);

  const getShowList = async (
    page: number,
    location: string,
    duration: string,
    priority: string,
  ) => {
    const res: fetchShow = await api.get(
      `/exhibitions/lists?area=${location}&progressStatus=${duration}&sortType=${priority}&page=${page}`,
    );
    setTotalPages(res.data.data.totalPages);
    return res.data.data.content;
  };

  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['shows', 'list', location, duration, priority],
      queryFn: async ({ pageParam }) => {
        return await getShowList(pageParam, location, duration, priority);
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
      <div className="sticky z-10 bg-white -top-0.5">
        <DurationList duration={duration} setDuration={setDuration} />
        <FilterList
          location={location}
          priority={priority}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
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

export default List;
