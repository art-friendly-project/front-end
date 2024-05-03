import TemperatureIndicator from 'components/common/TemperatureIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';

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
