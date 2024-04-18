import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';

interface suggestTasteShow {
  name: string;
  term: string;
  location: string;
  image: string;
}

const SuggestTasteShow = ({
  name,
  term,
  location,
  image,
}: suggestTasteShow) => {
  return (
    <button className="relative inline-block mr-10">
      <PosterImg
        width="w-64"
        height="h-80"
        bgColor="bg-gray-100"
        image={image}
      />
      <PosterInfo name={name} term={term} location={location} />
    </button>
  );
};

export default SuggestTasteShow;