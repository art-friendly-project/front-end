import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import { type Dispatch, type SetStateAction } from 'react';

interface showProps extends show {
  setShowId: Dispatch<SetStateAction<number>>;
}

const Show = ({
  id,
  title,
  area,
  startDate,
  endDate,
  temperature,
  isLike,
  imageUrl,
  setShowId,
}: showProps) => {
  const showBtnHandler = () => {
    setShowId(id);
  };

  return (
    <div className="relative mb-8 w-9/10">
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
