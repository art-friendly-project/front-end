import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';

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
  const dispatch = useAppDispatch();

  return (
    <div className="relative mb-8 w-9/10">
      <button
        className="flex w-full rounded-lg active:bg-gray-00"
        onClick={() => {
          dispatch(endpointActions.current('/home/nearby'));
          navigate(`/shows/${id}`);
        }}
      >
        <TemperatureIndicator temperature={temperature} />
        <PosterImg
          width="w-1/5"
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
