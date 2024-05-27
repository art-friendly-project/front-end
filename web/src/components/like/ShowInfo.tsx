import calculateRemainDay from 'utils/calculateRemainDay';

interface showInfo {
  title: string;
  startDate: string;
  endDate: string;
}

const ShowInfo = ({ title, startDate, endDate }: showInfo) => {
  const remainDay = calculateRemainDay(endDate);

  return (
    <div className="flex flex-col items-start w-4/5 mt-2 ml-4">
      <span className="w-4/5 truncate text-Body3 text-gray-110 text-start">
        {title}
      </span>
      <span className="text-Body2-M text-gray-80">
        {startDate} ~ {endDate}
      </span>
      <span
        className={`flex items-center justify-center w-16 h-6 mt-4 text-white rounded-2xl text-Body1-M ${remainDay >= 0 ? 'bg-orange-100' : 'bg-purple-90'}`}
      >
        {remainDay >= 0 ? `${remainDay}일 남음` : '종료'}
      </span>
    </div>
  );
};

export default ShowInfo;
