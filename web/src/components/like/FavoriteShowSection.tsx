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

interface favoriteShowSection {
  shows: favoriteShow[];
  setShows: Dispatch<SetStateAction<show[]>>;
  setCalendars: Dispatch<SetStateAction<calendar[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setScheduleName: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<string>>;
  setCurrentTerm: Dispatch<SetStateAction<string[]>>;
}

const FavoriteShowSection = ({
  shows,
  setShows,
  setCalendars,
  setIsModal,
  setScheduleName,
  setLocation,
  setCurrentTerm,
}: favoriteShowSection) => {
  const [page, setPage] = useState(0);

  const dispatch = useAppDispatch();

  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchShows = async () => {
    try {
      const result: fetchShow = await api.get(
        `/exhibitions/lists/interest?page=${page}`,
      );
      setShows((prev) => [...prev, ...result.data.data.content]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchShows();
  }, [page]);

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

  useEffect(() => {
    setShows([]);
    dispatch(endpointActions.current('/like'));
  }, []);

  return (
    <div className="w-full px-[5%] flex flex-col">
      {shows.length === 0 ? (
        <LikeEmptyMessage text="아직 관심 목록이 없어요." />
      ) : (
        shows.map((show) => (
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
