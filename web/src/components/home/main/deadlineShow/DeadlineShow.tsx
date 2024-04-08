import DegreeIndicator from '../../../common/DegreeIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';

interface deadlineShow {
  showType: string;
  name: string;
  location: string;
  term: string;
  image: string;
  favorite: boolean;
  degree: string;
}

const DeadlineShow = ({
  showType,
  name,
  location,
  term,
  image,
  favorite,
  degree,
}: deadlineShow) => {
  return (
    <div className="relative w-full pl-6 mb-6">
      <button className="flex">
        <DegreeIndicator degree={degree} />
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
