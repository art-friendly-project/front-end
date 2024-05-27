import { useLocation, useNavigate } from 'react-router-dom';
import FavoriteBtn from 'components/common/FavoriteBtn';
import PosterImg from 'components/common/PosterImg';
import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterInfo from 'components/home/main/deadlineShowSection/PosterInfo';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';

const Show = ({
  id,
  title,
  area,
  startDate,
  endDate,
  imageUrl,
  isLike,
  temperature,
}: show) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="relative mb-6 w-9/10">
      <button
        className="flex w-full rounded-lg active:bg-gray-00"
        onClick={() => {
          dispatch(endpointActions.current(pathname));
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
