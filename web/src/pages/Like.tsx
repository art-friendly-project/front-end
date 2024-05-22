import { useEffect, useState } from 'react';
import ConfirmModal from 'components/common/ConfirmModal';
import AddScheduleModal from 'components/like/AddScheduleModal';
import FavoriteShowSection from 'components/like/FavoriteShowSection';
import LikeMenu from 'components/like/LikeMenu';
import SavedReviewSection from 'components/like/SavedReviewSection';
import { useAppSelector } from 'hooks';
import useToastHandler from 'hooks/useToastHandler';
import { likeList } from 'mock/mockData';
import { selectEndpoint } from 'store/modules/endpoint';
import addOneHour from 'utils/addOneHour';
import isApp from 'utils/isApp';

const Like = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(true);
  const [shows, setShows] = useState<favoriteShow[]>([]);
  const [calendars, setCalendars] = useState<calendar[]>([]);
  const [scheduleName, setScheduleName] = useState('');
  const [location, setLocation] = useState('');
  const [calendarId, setCalendarId] = useState('');
  const [currentTerm, setCurrentTerm] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('2024-01-01');
  const [selectedTime, setSelectedTime] = useState('12:00');

  useEffect(() => {
    if (calendars.length > 0) setCalendarId(calendars[0].id);
  }, [calendars]);

  const toastHandler = useToastHandler(
    false,
    '캘린더에 일정을 등록하였습니다.',
    '',
  );

  const confirmModalFn = () => {
    const startDate = new Date(`${selectedDate}T${selectedTime}`).toISOString();
    const endDate = new Date(
      `${selectedDate}T${addOneHour(selectedTime)}`,
    ).toISOString();

    const data = {
      calendarId,
      scheduleName,
      startDate,
      endDate,
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
        <AddScheduleModal
          calendars={calendars}
          setIsModal={setIsModal}
          scheduleName={scheduleName}
          location={location}
          setCalendarId={setCalendarId}
          currentTerm={currentTerm}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      ) : null}
      <div className="flex flex-col w-full h-full">
        <LikeMenu currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
        {currentMenu ? (
          <FavoriteShowSection
            shows={shows}
            setCalendars={setCalendars}
            setIsModal={setIsModal}
            setScheduleName={setScheduleName}
            setLocation={setLocation}
            setCurrentTerm={setCurrentTerm}
          />
        ) : (
          <SavedReviewSection />
        )}
      </div>
    </>
  );
};

export default Like;
