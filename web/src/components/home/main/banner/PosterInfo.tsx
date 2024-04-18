import { useNavigate } from 'react-router-dom';

interface posterInfo {
  id: number;
  term: string;
  name: string;
  place: string;
  location: string;
}

const PosterInfo = ({ id, term, name, place, location }: posterInfo) => {
  const navigate = useNavigate();
  return (
    <button
      className="absolute z-20 flex flex-col ml-4 text-white bottom-6"
      onClick={() => {
        navigate(`/shows/${id}`);
      }}
    >
      <span className="text-Body2-M">{term}</span>
      <span className="text-Display2">{name}</span>
      <span className="mt-2 text-Subhead">{`${place} / ${location}`}</span>
    </button>
  );
};

export default PosterInfo;
