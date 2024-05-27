import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';
import Show from './Show';
import ShowEmptyMessage from './ShowEmptyMessage';

interface showList {
  shows: show[];
  setPage: Dispatch<SetStateAction<number>>;
}

const ShowList = ({ shows, setPage }: showList) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setPage((prev) => prev + 1);
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

  return (
    <div className="flex flex-col items-center mt-20">
      {shows.length === 0 ? (
        <ShowEmptyMessage />
      ) : (
        shows.map((show) => (
          <Show
            id={show.id}
            key={show.id}
            title={show.title}
            area={show.area}
            startDate={show.startDate}
            endDate={show.endDate}
            temperature={show.temperature}
            isLike={show.isLike}
            imageUrl={show.imageUrl}
          />
        ))
      )}
      <div className="h-2" ref={bottomRef} />
    </div>
  );
};

export default ShowList;
