import CalendarSelectModal from 'components/like/CalendarSelectModal';
import FavoriteShowSection from 'components/like/FavoriteShowSection';
import LikeMenu from 'components/like/LikeMenu';
import SavedReviewSection from 'components/like/SavedReviewSection';
import { useAppSelector } from 'hooks';
import { likeList } from 'mock/mockData';
import { useEffect, useState } from 'react';
import { selectEndpoint } from 'store/modules/endpoint';

const Like = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(true);
  const [shows, setShows] = useState<favoriteShow[]>([]);
  const [calendars, setCalendars] = useState<calendar[]>([]);
  const [scheduleName, setScheduleName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    setShows(likeList);
  }, [likeList]);

  const endpoint = useAppSelector(selectEndpoint);

  useEffect(() => {
    if (endpoint.includes('reviews')) {
      setCurrentMenu(false);
    }
  }, [endpoint]);

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
      <div className="flex flex-col w-full h-full">
        <LikeMenu currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
        {currentMenu ? (
          <FavoriteShowSection
            shows={shows}
            setCalendars={setCalendars}
            setIsModal={setIsModal}
            setDeadline={setDeadline}
            setScheduleName={setScheduleName}
            setLocation={setLocation}
          />
        ) : (
          <SavedReviewSection />
        )}
      </div>
    </>
  );
};

export default Like;
