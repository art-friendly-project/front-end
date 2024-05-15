import ConfirmModal from 'components/common/ConfirmModal';
import CalendarSelectModal from 'components/like/CalendarSelectModal';
import FavoriteShowSection from 'components/like/FavoriteShowSection';
import LikeMenu from 'components/like/LikeMenu';
import SavedReviewSection from 'components/like/SavedReviewSection';
import { useAppSelector } from 'hooks';
import useToastHandler from 'hooks/useToastHandler';
import { likeList } from 'mock/mockData';
import { useEffect, useState } from 'react';
import { selectEndpoint } from 'store/modules/endpoint';
import changeTermToDeadline from 'utils/changeTermToDeadline';
import isApp from 'utils/isApp';

const Like = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(true);
  const [shows, setShows] = useState<favoriteShow[]>([]);
  const [calendars, setCalendars] = useState<calendar[]>([]);
  const [scheduleName, setScheduleName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [location, setLocation] = useState('');
  const [calendarId, setCalendarId] = useState('');

  const toastHandler = useToastHandler(
    false,
    '캘린더에 일정을 등록하였습니다.',
    '',
  );

  const confirmModalFn = () => {
    const deadlineDay = changeTermToDeadline(deadline);

    const data = {
      calendarId,
      scheduleName,
      deadlineDay,
      location,
    };

    if (isApp()) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({ type: 'ADD_SCHEDULE', data }),
      );
    }
  };

  useEffect(() => {
    setShows(likeList);
  }, [likeList]);

  const endpoint = useAppSelector(selectEndpoint);

  useEffect(() => {
    if (endpoint.includes('reviews')) {
      setCurrentMenu(false);
    }
  }, [endpoint]);

  useEffect(() => {
    if (isApp()) {
      const schedule = (e: MessageEvent<string>) => {
        const data: {
          schedule: {
            fulfilled: boolean;
            eventId: string;
          };
        } = JSON.parse(e.data);

        if (data.schedule !== undefined) {
          if (data.schedule.fulfilled) {
            toastHandler();
            setIsModal(false);
          }
        }
      };
      if (window.platform === 'android') {
        document.addEventListener('message', schedule);
      }

      if (window.platform === 'ios') {
        window.addEventListener('message', schedule);
      }

      return () => {
        if (window.platform === 'android') {
          document.removeEventListener('message', schedule);
        }

        if (window.platform === 'ios') {
          window.removeEventListener('message', schedule);
        }
      };
    }
  }, []);

  return (
    <>
      <ConfirmModal
        text={`캘린더에 일정을 추가할까요?\n연동되는 시간이 다소 걸릴 수 있어요\n(약 20초)`}
        fn={confirmModalFn}
      />
      {isModal ? (
        <CalendarSelectModal
          calendars={calendars}
          setIsModal={setIsModal}
          deadline={deadline}
          scheduleName={scheduleName}
          location={location}
          calendarId={calendarId}
          setCalendarId={setCalendarId}
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
