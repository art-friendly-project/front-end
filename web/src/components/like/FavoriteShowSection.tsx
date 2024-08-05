import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import FavoriteShow from './FavoriteShow';
import LikeEmptyMessage from './LikeEmptyMessage';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import api from 'api';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import { useInfiniteQuery } from '@tanstack/react-query';

interface favoriteShowSection {
  setCalendars: Dispatch<SetStateAction<calendar[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setScheduleName: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<string>>;
  setCurrentTerm: Dispatch<SetStateAction<string[]>>;
}

const FavoriteShowSection = ({
  setCalendars,
  setIsModal,
  setScheduleName,
  setLocation,
  setCurrentTerm,
}: favoriteShowSection) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useAppDispatch();

  const getLikeShows = async (page: number) => {
    const res: fetchShow = await api.get(
      `/exhibitions/lists/interest?page=${page}`,
    );
    setTotalPages(res.data.data.totalPages);
    return res.data.data.content;
  };

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['shows', 'like'],
    queryFn: async ({ pageParam }) => {
      return await getLikeShows(pageParam);
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

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      void fetchNextPage();
    }
  });

  useEffect(() => {
    const observeBottomRef = () => {
      if (bottomRef.current !== null) observer.observe(bottomRef.current);
    };

    const timeoutId = setTimeout(observeBottomRef, 500);

    return () => {
      clearTimeout(timeoutId);
      if (bottomRef.current !== null) observer.unobserve(bottomRef.current);
    };
  }, []);

  useEffect(() => {
    dispatch(endpointActions.current('/like'));
  }, []);

  const likeShows = data?.pages.reduce((prev, next) => {
    return prev.concat(next);
  });

  if (isLoading || likeShows === undefined) {
    return <PageLoadingSpineer style="mt-20" />;
  }

  return (
    <div className="w-full px-[5%] flex flex-col">
      {likeShows.length === 0 ? (
        <LikeEmptyMessage text="아직 관심 목록이 없어요." />
      ) : (
        likeShows.map((show) => (
          <FavoriteShow
            key={show.id}
            id={show.id}
            title={show.title}
            startDate={show.startDate}
            endDate={show.endDate}
            imageUrl={show.imageUrl}
            isLike={show.isLike}
            area={show.area}
            setCalendars={setCalendars}
            setIsModal={setIsModal}
            setScheduleName={setScheduleName}
            setLocation={setLocation}
            setCurrentTerm={setCurrentTerm}
          />
        ))
      )}

      <div className="h-2" ref={bottomRef} />
    </div>
  );
};

export default FavoriteShowSection;
