import ShowDetailImg from './ShowDetailImg';
import ShowDetailTitle from './ShowDetailTitle';
import Thermometer from './Thermometer';
import FavoriteAndShareBtn from 'components/showDetail/FavoriteAndShareBtn';

interface posterSection {
  show: show;
}

export interface show {
  id: number;
  term: string;
  name: string;
  showType: string;
  place: string;
  location: string;
  phone: string;
  site: string;
  image: string;
  favorite: boolean;
  temperature: string;
  upAndDown: string;
}

const PosterSection = ({ show }: posterSection) => {
  return (
    <>
      <FavoriteAndShareBtn favorite={show.favorite} />
      <ShowDetailImg image={show.image} />
      <ShowDetailTitle
        showType={show.showType}
        name={show.name}
        term={show.term}
      />
      <Thermometer temperature={show.temperature} />
    </>
  );
};

export default PosterSection;