import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';
import LikeEmptyMessage from './LikeEmptyMessage';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import ShowItem from 'components/common/ShowItem';
import { useGetLikeShows } from 'hooks/query/useGetLikeShows';

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
  const dispatch = useAppDispatch();

  const bottomRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, fetchNextPage } = useGetLikeShows();

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
          <ShowItem
            key={show.id}
            id={show.id}
            title={show.title}
            startDate={show.startDate}
            endDate={show.endDate}
            imageUrl={show.imageUrl}
            isLike={show.isLike}
            posterStyle="w-24 h-28"
            buttonStyle="mb-6"
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
