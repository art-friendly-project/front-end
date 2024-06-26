import scheduleDay from 'utils/scheduleDay';

interface showDetailTitle {
  realmName: string;
  title: string;
  startDate: string;
  endDate: string;
}

const ShowDetailTitle = ({
  realmName,
  title,
  startDate,
  endDate,
}: showDetailTitle) => {
  return (
    <div className="absolute z-20 flex flex-col w-4/5 text-white bottom-4 left-6">
      <span className="text-Body3-M">{realmName}</span>
      <span
        className="flex items-center my-1 leading-tight w-[95%] line-clamp-2 text-Headline"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="flex">
        <span className="text-Body3-M text-gray-40">
          {startDate} ~ {endDate}
        </span>
        <span
          className={`flex items-center justify-center h-5 px-2 mt-0.5 ml-2 rounded-2xl text-Body1-M ${scheduleDay(startDate, endDate)[1]}`}
        >
          {scheduleDay(startDate, endDate)[0]}
        </span>
      </div>
    </div>
  );
};

export default ShowDetailTitle;
