import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import { useNavigate } from 'react-router-dom';

const Show = ({
  id,
  title,
  area,
  startDate,
  endDate,
  temperature,
  isLike,
  imageUrl,
}: show) => {
  const navigate = useNavigate();
  const showBtnHandler = () => {
    navigate(`/shows/${id}`);
  };

  return (
    <div className="relative mb-8 w-9/10" ref={undefined}>
      <button
        className="flex w-full rounded-lg active:bg-gray-00"
        onClick={showBtnHandler}
      >
        <TemperatureIndicator temperature={temperature} />
        <PosterImg
          width="w-24"
          height="h-32"
          bgColor="bg-gray-100"
          image={imageUrl}
        />
        <PosterInfo
          title={title}
          area={area}
          startDate={startDate}
          endDate={endDate}
        />
      </button>
      <FavoriteBtn isLike={isLike} id={id} />
    </div>
  );
};

export default Show;
