import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import DeadlineShowLoading from './DeadlineShowLoading';
import DeadlineShowInfoLoading from './DeadlineShowInfoLoading';
import { type Dispatch, type SetStateAction } from 'react';

interface deadlineShow extends show {
  loading: boolean;
  setShowId: Dispatch<SetStateAction<number>>;
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
  setShowId,
}: deadlineShow) => {
  return (
    <div className="relative w-full mb-6">
      <button
        className="flex w-full rounded-lg active:bg-gray-00"
        onClick={() => {
          setShowId(id);
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
