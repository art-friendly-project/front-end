import { type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import TemperatureIndicator from './TemperatureIndicator';
import PosterImg from './PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from './FavoriteBtn';
import AddScheduleBtn from 'components/like/AddScheduleBtn';

interface showItem {
  id: number;
  title: string;
  area?: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  isLike: boolean;
  temperature?: number;
  itemStyle?: string;
  posterStyle: string;
  buttonStyle?: string;
  setCalendars?: Dispatch<SetStateAction<calendar[]>>;
  setIsModal?: Dispatch<SetStateAction<boolean>>;
  setScheduleName?: Dispatch<SetStateAction<string>>;
  setLocation?: Dispatch<SetStateAction<string>>;
  setCurrentTerm?: Dispatch<SetStateAction<string[]>>;
}

const ShowItem = ({
  id,
  title,
  area,
  startDate,
  endDate,
  imageUrl,
  isLike,
  temperature,
  setCalendars,
  setIsModal,
  setScheduleName,
  setLocation,
  setCurrentTerm,
  itemStyle,
  posterStyle,
  buttonStyle,
}: showItem) => {
  const navigate = useNavigate();

  const btnHandler = () => {
    navigate(`/shows/${id}`);
  };

  return (
    <div className={`relative ${itemStyle}`}>
      <button
        className={`flex w-full rounded-lg active:bg-gray-00 ${buttonStyle}`}
        onClick={btnHandler}
      >
        {temperature !== undefined ? (
          <TemperatureIndicator temperature={temperature} />
        ) : null}
        <PosterImg image={imageUrl} posterStyle={posterStyle} />
        <PosterInfo
          title={title}
          area={area}
          startDate={startDate}
          endDate={endDate}
          setCalendars={setCalendars}
        />
      </button>
      <FavoriteBtn isLike={isLike} id={id} />
      {setCalendars && (
        <AddScheduleBtn
          title={title}
          endDate={endDate}
          startDate={startDate}
          area={area}
          setCalendars={setCalendars}
          setIsModal={setIsModal}
          setScheduleName={setScheduleName}
          setLocation={setLocation}
          setCurrentTerm={setCurrentTerm}
        />
      )}
    </div>
  );
};

export default ShowItem;
