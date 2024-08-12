import { useEffect, useRef } from 'react';
import ShowEmptyMessage from './ShowEmptyMessage';
import {
  type FetchNextPageOptions,
  type InfiniteData,
  type InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import ShowItem from 'components/common/ShowItem';

interface showList {
  shows: show[];
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
  isFetchingNextPage: boolean;
}

const ShowList = ({ shows, fetchNextPage, isFetchingNextPage }: showList) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        void fetchNextPage();
      }
    },
    { threshold: 0.5 },
  );

  useEffect(() => {
    const observeBottomRef = () => {
      if (bottomRef.current !== null) observer.observe(bottomRef.current);
    };

    const timeoutId = setTimeout(observeBottomRef, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (bottomRef.current !== null) observer.unobserve(bottomRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      {shows.length === 0 ? (
        <ShowEmptyMessage />
      ) : (
        shows.map((show) => (
          <ShowItem
            id={show.id}
            key={show.id}
            title={show.title}
            area={show.area}
            startDate={show.startDate}
            endDate={show.endDate}
            temperature={show.temperature}
            isLike={show.isLike}
            imageUrl={show.imageUrl}
            itemStyle="mb-8 w-9/10"
            posterStyle="w-24 h-32"
          />
        ))
      )}
      {isFetchingNextPage ? (
        <PageLoadingSpineer />
      ) : (
        <div className="h-0.5" ref={bottomRef} />
      )}
    </div>
  );
};

export default ShowList;
