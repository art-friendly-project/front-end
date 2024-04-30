import CalendarSelectModal from 'components/like/CalendarSelectModal';
import FavoriteShow from 'components/like/FavoriteShow';
import { likeList } from 'mock/mockData';
import { useEffect, useState } from 'react';

const Like = () => {
  const [isModal, setIsModal] = useState(false);
  const [shows, setShows] = useState<favoriteShow[]>([]);
  const [calendars, setCalendars] = useState<calendar[]>([]);
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    setShows(likeList);
  }, [likeList]);

  return (
    <>
      {isModal ? (
        <CalendarSelectModal
          calendars={calendars}
          setIsModal={setIsModal}
          deadline={deadline}
        />
      ) : null}
      <div className="flex flex-col px-[5%] w-full h-full">
        {shows.map((show) => (
          <FavoriteShow
            key={show.id}
            id={show.id}
            name={show.name}
            term={show.term}
            image={show.image}
            favorite={show.favorite}
            setCalendars={setCalendars}
            setIsModal={setIsModal}
            setDeadline={setDeadline}
          />
        ))}
      </div>
    </>
  );
};

export default Like;
