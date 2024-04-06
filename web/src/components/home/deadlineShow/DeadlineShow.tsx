import FavoriteBtn from './FavoriteBtn';
import DegreeIndicator from './DegreeIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';

interface deadlineShow {
  sort: string;
  name: string;
  address: string;
  term: string;
  image: string;
  favorite: boolean;
  degree: string;
}

const DeadlineShow = ({
  sort,
  name,
  address,
  term,
  image,
  favorite,
  degree,
}: deadlineShow) => {
  return (
    <div className="relative w-full pl-6 mb-6">
      <button className="flex text-Body1-M">
        <DegreeIndicator degree={degree} />
        <PosterImg width="24" height="32" bgColor="gray-100" image={image} />
        <PosterInfo sort={sort} name={name} address={address} term={term} />
      </button>
      <FavoriteBtn favorite={favorite} />
    </div>
  );
};

export default DeadlineShow;
