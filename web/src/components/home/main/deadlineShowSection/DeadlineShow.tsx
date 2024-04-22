import DegreeIndicator from '../../../common/TemperatureIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import { useNavigate } from 'react-router-dom';

interface deadlineShow {
  id: number;
  showType: string;
  name: string;
  location: string;
  term: string;
  image: string;
  favorite: boolean;
  temperature: string;
}

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
        className="flex"
        onClick={() => {
          navigate(`/shows/${id}`);
        }}
      >
        <DegreeIndicator temperature={temperature} />
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
