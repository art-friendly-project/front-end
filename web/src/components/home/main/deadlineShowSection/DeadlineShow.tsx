import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import { useNavigate } from 'react-router-dom';

const DeadlineShow = ({
  id,
  showType,
  name,
  location,
  term,
  image,
  favorite,
  temperature,
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
        <TemperatureIndicator temperature={temperature} />
        <PosterImg
          width="w-24"
          height="h-32"
          bgColor="bg-gray-100"
          image={image}
        />
        <PosterInfo
          showType={showType}
          name={name}
          location={location}
          term={term}
        />
      </button>
      <FavoriteBtn favorite={favorite} />
    </div>
  );
};

export default DeadlineShow;
