import PosterImg from './PosterImg';
import { type poster } from './PosterImgSlide';

interface posterImgList {
  posters: poster[];
  currentPosterNum: string;
}

const PosterImgList = ({ posters, currentPosterNum }: posterImgList) => {
  const currentPosterSlide = (num: string) => {
    return { transform: `translateX(-${num}00%)` };
  };

  return (
    <ul
      className="w-full h-full duration-500"
      style={currentPosterSlide(currentPosterNum)}
    >
      {posters.map((poster, idx) => (
        <PosterImg
          key={poster.id}
          idx={idx}
          image={poster.image}
          term={poster.term}
          name={poster.name}
          place={poster.place}
          location={poster.location}
          posterLength={posters.length}
        />
      ))}
    </ul>
  );
};

export default PosterImgList;
