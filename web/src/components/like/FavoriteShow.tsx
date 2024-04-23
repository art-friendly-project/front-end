import { useNavigate } from 'react-router-dom';
import PosterImg from 'components/common/PosterImg';
import ShowInfo from './ShowInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import AddScheduleBtn from './AddScheduleBtn';

interface favoriteShow {
  id: number;
  name: string;
  term: string;
  image: string;
  favorite: boolean;
}

const FavoriteShow = ({ id, name, term, image, favorite }: favoriteShow) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <button
        className="flex mb-6"
        onClick={() => {
          navigate(`/shows/${id}`);
        }}
      >
        <PosterImg
          width="w-24"
          height="h-28"
          bgColor="bg-gray-100"
          image={image}
        />
        <ShowInfo name={name} term={term} />
      </button>
      <FavoriteBtn favorite={favorite} />
      <AddScheduleBtn />
    </div>
  );
};

export default FavoriteShow;
