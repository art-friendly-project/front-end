import { type Dispatch, type SetStateAction } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import isApp from 'utils/isApp';

interface addScheduleBtn {
  setCalendars: Dispatch<SetStateAction<calendar[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  term: string;
  setDeadline: Dispatch<SetStateAction<string>>;
}

const AddScheduleBtn = ({
  setCalendars,
  setIsModal,
  term,
  setDeadline,
}: addScheduleBtn) => {
  console.log(term);
  const btnHandler = () => {
    if (isApp()) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({ type: 'REQUEST_CALENDARS' }),
      );

      const geolocation = (e: MessageEvent<string>) => {
        const data: {
          calendars: calendar[];
        } = JSON.parse(e.data);

        if (data.calendars !== undefined) {
          setCalendars(data.calendars);
          setIsModal(true);
        }
      };

      document.addEventListener('message', geolocation);
    }
  };
  return (
    <button
      className="absolute flex items-center bottom-11 right-2"
      onClick={btnHandler}
    >
      <BsFillPlusCircleFill className="text-purple-90" />
      <span className="ml-1 text-Body1 text-gray-110">일정 추가</span>
    </button>
  );
};

export default AddScheduleBtn;
