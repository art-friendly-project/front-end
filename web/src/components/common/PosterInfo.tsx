import { type Dispatch, type SetStateAction } from 'react';
import scheduleDay from 'utils/scheduleDay';

interface posterInfo {
  title: string;
  area?: string;
  startDate: string;
  endDate: string;
  setCalendars?: Dispatch<SetStateAction<calendar[]>>;
}

const PosterInfo = ({
  title,
  area,
  startDate,
  endDate,
  setCalendars,
}: posterInfo) => {
  return (
    <div className="flex flex-col items-start justify-center w-3/5 h-32 ml-4">
      <span
        className="w-full truncate text-Body3 text-start"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {area && <span className="text-Body2-M text-gray-80">{area}</span>}
      <span className="mt-2 mb-2 text-Body2-M">
        {startDate} ~ {endDate}
      </span>
      {setCalendars && (
        <span
          className={`flex items-center justify-center w-16 h-6 mt-2 mb-2 text-white rounded-2xl text-Body1-M ${scheduleDay(startDate, endDate)[1]}`}
        >
          {scheduleDay(startDate, endDate)[0]}
        </span>
      )}
    </div>
  );
};

export default PosterInfo;
