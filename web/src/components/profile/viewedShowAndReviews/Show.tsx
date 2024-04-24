import { useNavigate } from 'react-router-dom';
import FavoriteBtn from 'components/common/FavoriteBtn';
import PosterImg from 'components/common/PosterImg';
import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterInfo from 'components/home/main/deadlineShowSection/PosterInfo';

const Show = ({
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
    <div className="relative mb-6 w-9/10">
      <button
        className="flex"
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

export default Show;
