import { type Dispatch, type SetStateAction } from 'react';
import AddScheduleModalTitle from './AddScheduleModalTitle';
import BtnBasic from 'components/common/BtnBasic';
import CloseBtn from './CloseBtn';
import { useAppDispatch } from 'hooks';
import { isModalActions } from 'store/modules/isModal';
import CalendarEmptyMessage from './CalendarEmptyMessage';
import ModalBackground from 'components/common/ModalBackground';
import Schedule from './Schedule';

interface addScheduleModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  calendars: calendar[];
  scheduleName: string;
  location: string;
  setCalendarId: Dispatch<SetStateAction<string>>;
  currentTerm: string;
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  selectedTime: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
}

const AddScheduleModal = ({
  setIsModal,
  calendars,
  scheduleName,
  setCalendarId,
  currentTerm,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: addScheduleModal) => {
  const dispatch = useAppDispatch();

  const btnHandler = () => {
    dispatch(isModalActions.setIsModal(true));
  };

  return (
    <>
      <ModalBackground setIsModal={setIsModal} />
      <div className="absolute bottom-0 z-20 flex flex-col w-full py-6 bg-white rounded-t-xl animate-move-top-regular">
        <CloseBtn setIsModal={setIsModal} />
        <AddScheduleModalTitle />
        {calendars.length === 0 ? (
          <CalendarEmptyMessage />
        ) : (
          <Schedule
            calendars={calendars}
            scheduleName={scheduleName}
            setCalendarId={setCalendarId}
            currentTerm={currentTerm}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        )}
        <BtnBasic name="일정추가" fn={btnHandler} disable={false} />
      </div>
    </>
  );
};

export default AddScheduleModal;
