import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';

interface popularShow {
  id: number;
  name: string;
  image: string;
  upAndDown: string;
}

const PopularShow = ({ name, image, upAndDown, id }: popularShow) => {
  return (
    <button className="relative flex items-center px-4 py-2 mb-4 rounded-xl shadow-custom2 w-9/10">
      <PosterImg width="16" height="16" bgColor="gray-100" image={image} />
      <PosterInfo id={id} name={name} upAndDown={upAndDown} />
    </button>
  );
};

export default PopularShow;
