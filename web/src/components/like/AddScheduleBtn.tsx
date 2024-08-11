import { useAppSelector } from 'hooks';
import { type Dispatch, type SetStateAction } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { selectAccessPermissions } from 'store/modules/accessPermissions';
import calculateRemainDay from 'utils/calculateRemainDay';
import isApp from 'utils/isApp';

interface addScheduleBtn {
  title: string;
  startDate: string;
  endDate: string;
  area: string | undefined;
  setCalendars: Dispatch<SetStateAction<calendar[]>> | undefined;
  setIsModal: Dispatch<SetStateAction<boolean>> | undefined;
  setScheduleName: Dispatch<SetStateAction<string>> | undefined;
  setLocation: Dispatch<SetStateAction<string>> | undefined;
  setCurrentTerm: Dispatch<SetStateAction<string[]>> | undefined;
}

const AddScheduleBtn = ({
  title,
  startDate,
  endDate,
  area,
  setCalendars,
  setIsModal,
  setScheduleName,
  setLocation,
  setCurrentTerm,
}: addScheduleBtn) => {
  const accessPermissions = useAppSelector(selectAccessPermissions);

  const remainDay = calculateRemainDay(endDate);

  const btnHandler = () => {
    if (isApp()) {
      if (accessPermissions.calendar === 'granted') {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: 'REQUEST_CALENDARS' }),
        );

        const calendar = (e: MessageEvent<string>) => {
          const data: {
            calendars: calendar[];
          } = JSON.parse(e.data);

          if (data.calendars !== undefined) {
            setCalendars && setCalendars(data.calendars);
            setScheduleName && setScheduleName(title);
            area && setLocation && setLocation(area);
            setCurrentTerm && setCurrentTerm([startDate, endDate]);
            setIsModal && setIsModal(true);
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
    <>
      {remainDay < 0 ? null : (
        <button
          className="absolute right-0 flex items-center justify-center w-20 h-8 rounded-lg bottom-8 active:bg-gray-00"
          onClick={btnHandler}
        >
          <BsFillPlusCircleFill className="text-purple-90" />
          <span className="ml-1 text-Body1 text-gray-110">일정 추가</span>
        </button>
      )}
    </>
  );
};

export default AddScheduleBtn;
