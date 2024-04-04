import convertDegreeToColor from 'utils/convertDegreeToColor';
import FavoriteBtn from './FavoriteBtn';

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
  const degreeColor = convertDegreeToColor(degree);

  return (
    <div className="relative w-full pl-6 mb-6">
      <button className="flex text-Body1-M">
        <span
          className={`absolute bottom-0 flex items-center justify-center h-6 w-14 rounded-2xl opacity-90 ${degreeColor}`}
        >
          {degree}
        </span>
        <img
          src={image}
          className="object-contain w-24 h-32 bg-gray-100 rounded-xl"
        />
        <div className="flex flex-col items-start justify-center w-full h-32 ml-4">
          <span className="text-Body1-M">{sort}</span>
          <span className="text-Body3">{name}</span>
          <span className="text-Body2-M text-gray-80">{address}</span>
          <span className="mt-2 text-Body2-M">{term}</span>
        </div>
      </button>
      <FavoriteBtn favorite={favorite} />
    </div>
  );
};

export default DeadlineShow;
