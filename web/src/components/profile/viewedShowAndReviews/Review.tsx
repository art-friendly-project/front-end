import { useNavigate } from 'react-router-dom';

interface review {
  imageUrl: string;
  id: number;
  idx: number;
}

const Review = ({ imageUrl, id, idx }: review) => {
  const navigate = useNavigate();

  return (
    <button
      className={`mb-[5%] w-[30%] h-32 ${idx % 3 === 0 ? 'mr-[5%]' : ''} ${(idx - 1) % 3 === 0 ? 'mr-[5%]' : ''}`}
      onClick={() => {
        navigate(`/reviews/${id}`);
      }}
    >
      <img src={imageUrl} className="w-full h-full bg-cover rounded-2xl" />
    </button>
  );
};

export default Review;
