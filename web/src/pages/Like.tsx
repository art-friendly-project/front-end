import CalendarSelectModal from 'components/like/CalendarSelectModal';
import FavoriteShow from 'components/like/FavoriteShow';
import LikeEmptyMessage from 'components/like/LikeEmptyMessage';
import { likeList } from 'mock/mockData';
import { useEffect, useState } from 'react';

const Like = () => {
  const [isModal, setIsModal] = useState(false);
  const [shows, setShows] = useState<favoriteShow[]>([]);
  const [calendars, setCalendars] = useState<calendar[]>([]);
  const [scheduleName, setScheduleName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [location, setLocation] = useState('');

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
          scheduleName={scheduleName}
          location={location}
        />
      ) : null}
      <div className="flex flex-col px-[5%] w-full h-full">
        {shows.length === 0 ? (
          <LikeEmptyMessage />
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
    </>
  );
};

export default Like;
