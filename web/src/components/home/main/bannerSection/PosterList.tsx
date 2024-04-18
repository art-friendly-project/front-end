import Poster from './Poster';
import { type poster } from './PosterSlide';

interface posterList {
  posters: poster[];
  currentPosterNum: number;
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<number>>;
}

const PosterList = ({
  posters,
  currentPosterNum,
  setCurrentPosterNum,
}: posterList) => {
  return (
    <ul
      className="w-full h-full duration-500"
      style={{ transform: `translateX(-${currentPosterNum}00%)` }}
    >
      {posters.map((poster) => (
        <Poster
          key={poster.id}
          id={poster.id}
          image={poster.image}
          term={poster.term}
          name={poster.name}
          place={poster.place}
          location={poster.location}
          posterLength={posters.length}
          setCurrentPosterNum={setCurrentPosterNum}
        />
      ))}
    </ul>
  );
};

export default PosterList;
