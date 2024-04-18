import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import { useNavigate } from 'react-router-dom';

interface show {
  id: number;
  name: string;
  type: string;
  address: string;
  term: string;
  temperature: string;
  favorite: boolean;
  image: string;
}

const Show = ({
  id,
  name,
  type,
  address,
  term,
  temperature,
  favorite,
  image,
}: show) => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full pl-6 mb-8">
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
        <PosterInfo type={type} name={name} address={address} term={term} />
      </button>
      <FavoriteBtn favorite={favorite} />
    </div>
  );
};

export default Show;
