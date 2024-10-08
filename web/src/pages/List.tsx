import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterList from 'components/home/detail/nearbyAndLocationShow/FilterList';
import ShowList from '../components/home/detail/nearbyAndLocationShow/ShowList';
import FilterSelectModal from 'components/home/detail/nearbyAndLocationShow/FilterSelectModal';
import selectModalInfos from 'assets/data/selectModalInfos';
import DurationList from 'components/list/DurationList';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import useNavigateHome from 'hooks/useNavigateHome';
import { useAppSelector } from 'hooks';
import { useGetShowList } from 'hooks/query/useGetShowList';
import { selectLocation } from 'store/modules/location';

const List = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const location = useAppSelector(selectLocation);
  const [priority, setPriority] = useState('popular');
  const [duration, setDuration] = useState('inProgress');
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const openModalIndex = isModalOpen.indexOf(true);

  const { data, isLoading, isFetchingNextPage, fetchNextPage } = useGetShowList(
    location,
    duration,
    priority,
  );

  useNavigateHome(navigate);

  const setState = [null, setPriority];

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
        {pathname === '/shows' ? (
          <DurationList duration={duration} setDuration={setDuration} />
        ) : null}
        <FilterList
          location={location}
          priority={priority}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      {isLoading ? (
        <PageLoadingSpineer />
      ) : (
        data?.pages.map((shows, idx) => (
          <ShowList
            key={idx}
            shows={shows}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        ))
      )}
    </div>
  );
};

export default List;
