const CalendarEmptyMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-24">
      <span className="text-gray-110 text-Body3">
        동기화된 캘린더가 없어요.
      </span>
    </div>
  );
};

export default CalendarEmptyMessage;
