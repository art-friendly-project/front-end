import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import CalendarSelectModalTitle from './CalendarSelectModalTitle';
import CalendarList from './CalendarList';
import isApp from 'utils/isApp';
import changeTermToDeadline from 'utils/changeTermToDeadline';
import BtnBasic from 'components/common/BtnBasic';
import useToastHandler from 'hooks/useToastHandler';

interface calendarSelectModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  calendars: calendar[];
  deadline: string;
  scheduleName: string;
  location: string;
}

const CalendarSelectModal = ({
  setIsModal,
  calendars,
  deadline,
  scheduleName,
  location,
}: calendarSelectModal) => {
  const [calendarId, setCalendarId] = useState('');

  const toastHandler = useToastHandler(
    false,
    '캘린더에 일정을 등록하였습니다.',
    '',
  );

  const btnHandler = () => {
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

      document.addEventListener('message', schedule);

      return () => {
        document.removeEventListener('message', schedule);
      };
    }
  }, []);

  return (
    <>
      <button
        className="absolute top-0 z-10 w-full h-screen bg-black opacity-50"
        onClick={() => {
          setIsModal(false);
        }}
      />
      <div className="absolute bottom-0 z-20 flex flex-col w-full py-6 bg-white rounded-t-xl animate-move-top-regular">
        <CalendarSelectModalTitle />
        <CalendarList
          calendars={calendars}
          deadline={deadline}
          scheduleName={scheduleName}
          calendarId={calendarId}
          setCalendarId={setCalendarId}
        />
        <div className="mt-5">
          <BtnBasic
            name="일정추가"
            fn={btnHandler}
            disable={calendarId.length === 0}
          />
        </div>
      </div>
    </>
  );
};

export default CalendarSelectModal;
