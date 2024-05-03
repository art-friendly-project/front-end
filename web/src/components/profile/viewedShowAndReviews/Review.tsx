import { useNavigate } from 'react-router-dom';

interface review {
  image: string;
  showId: number;
  id: number;
  idx: number;
}

const Review = ({ image, showId, id, idx }: review) => {
  const navigate = useNavigate();

  return (
    <button
      className={`mb-[5%] w-[30%] h-32 ${idx % 3 === 0 ? 'mr-[5%]' : ''} ${(idx - 1) % 3 === 0 ? 'mr-[5%]' : ''}`}
      onClick={() => {
        navigate(`/shows/${showId}/reviews/${id}`);
      }}
    >
      <img src={image} className="w-full h-full bg-cover rounded-2xl" />
    </button>
  );
};

export default Review;
