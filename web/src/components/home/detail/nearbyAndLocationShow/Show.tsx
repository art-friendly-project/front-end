import DegreeIndicator from 'components/common/DegreeIndicator';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';

interface show {
  name: string;
  type: string;
  address: string;
  term: string;
  degree: string;
  favorite: boolean;
  image: string;
}

const Show = ({ name, type, address, term, degree, favorite, image }: show) => {
  return (
    <div className="relative w-full pl-6 mb-8">
      <button className="flex">
        <DegreeIndicator degree={degree} />
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
