import { type Dispatch, type SetStateAction } from 'react';
import CalendarSelectModalTitle from './CalendarSelectModalTitle';
import CalendarList from './CalendarList';
import BtnBasic from 'components/common/BtnBasic';
import CloseBtn from './CloseBtn';
import { useAppDispatch } from 'hooks';
import { isModalActions } from 'store/modules/isModal';

interface calendarSelectModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  calendars: calendar[];
  deadline: string;
  scheduleName: string;
  location: string;
  calendarId: string;
  setCalendarId: Dispatch<SetStateAction<string>>;
}

const CalendarSelectModal = ({
  setIsModal,
  calendars,
  deadline,
  scheduleName,
  calendarId,
  setCalendarId,
}: calendarSelectModal) => {
  const dispatch = useAppDispatch();

  const btnHandler = () => {
    dispatch(isModalActions.setIsModal(true));
  };

  return (
    <>
      <button
        className="absolute top-0 z-10 w-full h-screen bg-black opacity-50"
        onClick={() => {
          setIsModal(false);
        }}
      />
      <div className="absolute bottom-0 z-20 flex flex-col w-full py-6 bg-white rounded-t-xl animate-move-top-regular">
        <CloseBtn setIsModal={setIsModal} />
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
