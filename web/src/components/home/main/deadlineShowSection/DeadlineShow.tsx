import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import { useNavigate } from 'react-router-dom';
import DeadlineShowLoading from './DeadlineShowLoading';
import DeadlineShowInfoLoading from './DeadlineShowInfoLoading';

interface deadlineShow extends show {
  loading: boolean;
}

const DeadlineShow = ({
  id,
  title,
  area,
  startDate,
  endDate,
  imageUrl,
  temperature,
  isLike,
  loading,
}: deadlineShow) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full mb-6">
      <button
        className="flex w-full rounded-lg active:bg-gray-00"
        onClick={() => {
          navigate(`/shows/${id}`);
        }}
      >
        {loading ? <TemperatureIndicator temperature={temperature} /> : null}
        {loading ? (
          <PosterImg
            width="w-24"
            height="h-32"
            bgColor="bg-gray-100"
            image={imageUrl}
          />
        ) : (
          <DeadlineShowLoading />
        )}
        {loading ? (
          <PosterInfo
            title={title}
            area={area}
            startDate={startDate}
            endDate={endDate}
          />
        ) : (
          <DeadlineShowInfoLoading />
        )}
      </button>
      {loading ? <FavoriteBtn isLike={isLike} id={id} /> : null}
    </div>
  );
};

export default DeadlineShow;
