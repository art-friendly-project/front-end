interface posterInfo {
  title: string;
  area: string;
  startDate: string;
  endDate: string;
}

const PosterInfo = ({ title, area, startDate, endDate }: posterInfo) => {
  return (
    <div className="flex flex-col items-start justify-center h-32 ml-4 w-7/10">
      <span className="w-full truncate text-Body3 text-start">{title}</span>
      <span className="text-Body2-M text-gray-80">{area}</span>
      <span className="mt-2 text-Body2-M">
        {startDate} ~ {endDate}
      </span>
    </div>
  );
};

export default PosterInfo;
