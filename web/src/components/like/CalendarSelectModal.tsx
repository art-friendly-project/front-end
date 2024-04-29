import { type Dispatch, type SetStateAction } from 'react';
import CalendarSelectModalTitle from './CalendarSelectModalTitle';
import CalendarList from './CalendarList';

interface calendarSelectModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  calendars: calendar[];
}

const CalendarSelectModal = ({
  setIsModal,
  calendars,
}: calendarSelectModal) => {
  return (
    <>
      <button
        className="absolute top-0 z-10 w-full h-screen bg-black opacity-50"
        onClick={() => {
          setIsModal(false);
        }}
      />
      <div className="absolute bottom-0 z-20 flex flex-col w-full pt-6 pb-6 pl-6 bg-white rounded-t-xl animate-move-top-regular">
        <CalendarSelectModalTitle />
        <CalendarList calendars={calendars} />
      </div>
    </>
  );
};

export default CalendarSelectModal;
