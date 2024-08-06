import { useAppSelector } from 'hooks';
import { type Dispatch, type SetStateAction } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { selectAccessPermissions } from 'store/modules/accessPermissions';
import isApp from 'utils/isApp';

interface addScheduleBtn {
  setCalendars: Dispatch<SetStateAction<calendar[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  setScheduleName: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<string>>;
  area: string;
  startDate: string;
  endDate: string;
  setCurrentTerm: Dispatch<SetStateAction<string[]>>;
}

const AddScheduleBtn = ({
  setCalendars,
  setIsModal,
  title,
  setScheduleName,
  setLocation,
  area,
  startDate,
  endDate,
  setCurrentTerm,
}: addScheduleBtn) => {
  const accessPermissions = useAppSelector(selectAccessPermissions);

  const btnHandler = () => {
    if (isApp()) {
      if (accessPermissions.calendar === 'granted') {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: 'REQUEST_CALENDARS' }),
        );

        const calendar = (e: MessageEvent<string>) => {
          if (e.origin !== '') return;

          const data: {
            calendars: calendar[];
          } = JSON.parse(e.data);

          if (data.calendars !== undefined) {
            setCalendars(data.calendars);
            setScheduleName(title);
            setLocation(area);
            setCurrentTerm([startDate, endDate]);
            setIsModal(true);
          }
        };
        if (window.platform === 'android') {
          document.addEventListener('message', calendar);
        }

        if (window.platform === 'ios') {
          window.addEventListener('message', calendar);
        }
      }

      if (accessPermissions.calendar !== 'granted') {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: 'CALENDAR_PERMISSON' }),
        );
      }
    }
  };

  return (
    <button
      className="absolute right-0 flex items-center justify-center w-20 h-8 rounded-lg bottom-8 active:bg-gray-00"
      onClick={btnHandler}
    >
      <BsFillPlusCircleFill className="text-purple-90" />
      <span className="ml-1 text-Body1 text-gray-110">일정 추가</span>
    </button>
  );
};

export default AddScheduleBtn;
