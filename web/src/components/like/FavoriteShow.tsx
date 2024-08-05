import { useNavigate } from 'react-router-dom';
import PosterImg from 'components/common/PosterImg';
import ShowInfo from './ShowInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import AddScheduleBtn from './AddScheduleBtn';
import { type Dispatch, type SetStateAction } from 'react';
import calculateRemainDay from 'utils/calculateRemainDay';

interface favoriteShow {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  isLike: boolean;
  area: string;
  setCalendars: Dispatch<SetStateAction<calendar[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setScheduleName: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<string>>;
  setCurrentTerm: Dispatch<SetStateAction<string[]>>;
}

const FavoriteShow = ({
  id,
  title,
  startDate,
  endDate,
  imageUrl,
  isLike,
  area,
  setCalendars,
  setIsModal,
  setScheduleName,
  setLocation,
  setCurrentTerm,
}: favoriteShow) => {
  const navigate = useNavigate();

  const remainDay = calculateRemainDay(endDate);

  return (
    <div className="relative">
      <button
        className="flex w-full mb-6 rounded-lg active:bg-gray-00"
        onClick={() => {
          navigate(`/shows/${id}`);
        }}
      >
        <PosterImg
          width="w-24"
          height="h-28"
          bgColor="bg-gray-100"
          image={imageUrl}
        />
        <ShowInfo title={title} startDate={startDate} endDate={endDate} />
      </button>
      <FavoriteBtn isLike={isLike} id={id} />
      {remainDay < 0 ? null : (
        <AddScheduleBtn
          setCalendars={setCalendars}
          setIsModal={setIsModal}
          title={title}
          setScheduleName={setScheduleName}
          setLocation={setLocation}
          area={area}
          startDate={startDate}
          endDate={endDate}
          setCurrentTerm={setCurrentTerm}
        />
      )}
    </div>
  );
};

export default FavoriteShow;
