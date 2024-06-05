import calculateRemainDay from 'utils/calculateRemainDay';

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
  const remainDay = calculateRemainDay(endDate);
  return (
    <div className="absolute z-20 flex flex-col w-4/5 text-white top-32 left-6">
      <span className="text-Body3">{realmName}</span>
      <span className="flex items-center w-full h-16 leading-tight line-clamp-2 text-Headline">
        {title}
      </span>
      <div className="flex">
        <span className="text-Subhead-M">
          {startDate} ~ {endDate}
        </span>
        {remainDay >= 0 ? (
          <span className="flex items-center justify-center h-6 mt-0.5 ml-2 bg-orange-100 rounded-2xl px-2 text-Body1-M">{`${remainDay}일 남음`}</span>
        ) : (
          <span className="flex items-center justify-center h-6 mt-0.5 ml-2 bg-purple-90 rounded-2xl px-2 text-Body1-M">
            종료
          </span>
        )}
      </div>
    </div>
  );
};

export default ShowDetailTitle;
