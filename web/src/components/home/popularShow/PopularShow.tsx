import upIcon from '../../../assets/etc/upIcon.svg';
import downIcon from '../../../assets/etc/downIcon.svg';

interface popularShow {
  id: string;
  name: string;
  image: string;
  upAndDown: string;
}

const PopularShow = ({ name, image, upAndDown, id }: popularShow) => {
  return (
    <button className="relative flex items-center px-4 py-2 mb-4 rounded-xl shadow-custom2 w-9/10">
      <img
        src={image}
        className="w-16 h-16 mr-2 bg-gray-100 rounded-md object-fit"
      />
      <span className="text-Headline">{`0${id}`}</span>
      <span className="ml-2 text-Body3-120">{name}</span>
      <div className="absolute flex right-5">
        <img src={upAndDown[0] === '+' ? upIcon : downIcon} />
        <span className="ml-1 text-Body2-M">{upAndDown[1]}</span>
      </div>
    </button>
  );
};

export default PopularShow;
