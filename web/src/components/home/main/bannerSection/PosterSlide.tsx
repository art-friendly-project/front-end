import PosterList from './PosterList';

interface posterSlide {
  currentPosterNum: number;
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<number>>;
  posters: poster[];
}

export interface poster {
  id: number;
  term: string;
  name: string;
  place: string;
  location: string;
  image: string;
}

const PosterSlide = ({
  currentPosterNum,
  setCurrentPosterNum,
  posters,
}: posterSlide) => {
  return (
    <div className="w-full overflow-hidden h-80 whitespace-nowrap">
      <PosterList
        posters={posters}
        currentPosterNum={currentPosterNum}
        setCurrentPosterNum={setCurrentPosterNum}
      />
    </div>
  );
};

export default PosterSlide;
