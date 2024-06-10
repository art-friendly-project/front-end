import { useNavigate } from 'react-router-dom';

interface posterInfo {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  place: string;
  location: string;
}

const PosterInfo = ({
  id,
  startDate,
  endDate,
  title,
  place,
  location,
}: posterInfo) => {
  const navigate = useNavigate();
  return (
    <button
      className="absolute z-20 flex flex-col w-full ml-4 text-white bottom-6"
      onClick={() => {
        navigate(`/shows/${id}`);
      }}
    >
      <span className="text-Body2-M">
        {startDate} ~ {endDate}
      </span>
      <span
        className="truncate w-9/10 text-Display2 text-start"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span className="mb-2 text-Subhead">{`${place} / ${location}`}</span>
    </button>
  );
};

export default PosterInfo;
