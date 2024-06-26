import scheduleDay from 'utils/scheduleDay';

interface showInfo {
  title: string;
  startDate: string;
  endDate: string;
}

const ShowInfo = ({ title, startDate, endDate }: showInfo) => {
  return (
    <div className="flex flex-col items-start mt-2 ml-4 w-7/10">
      <span
        className="w-4/5 truncate text-Body3 text-gray-110 text-start"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span className="text-Body2-M text-gray-80">
        {startDate} ~ {endDate}
      </span>
      <span
        className={`flex items-center justify-center w-16 h-6 mt-6 text-white rounded-2xl text-Body1-M ${scheduleDay(startDate, endDate)[1]}`}
      >
        {scheduleDay(startDate, endDate)[0]}
      </span>
    </div>
  );
};

export default ShowInfo;
