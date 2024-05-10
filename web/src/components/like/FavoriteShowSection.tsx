import { useEffect, type Dispatch, type SetStateAction } from 'react';
import FavoriteShow from './FavoriteShow';
import LikeEmptyMessage from './LikeEmptyMessage';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';

interface favoriteShowSection {
  shows: favoriteShow[];
  setCalendars: Dispatch<SetStateAction<calendar[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setDeadline: Dispatch<SetStateAction<string>>;
  setScheduleName: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<string>>;
}

const FavoriteShowSection = ({
  shows,
  setCalendars,
  setIsModal,
  setDeadline,
  setScheduleName,
  setLocation,
}: favoriteShowSection) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
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
            name={show.name}
            term={show.term}
            image={show.image}
            favorite={show.favorite}
            location={show.location}
            setCalendars={setCalendars}
            setIsModal={setIsModal}
            setDeadline={setDeadline}
            setScheduleName={setScheduleName}
            setLocation={setLocation}
          />
        ))
      )}
    </div>
  );
};

export default FavoriteShowSection;
