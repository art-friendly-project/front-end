import tape from 'assets/images/etc/tape.svg';
import ReviewTitle from './ReviewTitle';
import ReviewContent from './ReviewContent';
import { useNavigate } from 'react-router-dom';

interface reviewProps {
  review: review;
}

const Review = ({ review }: reviewProps) => {
  const navigate = useNavigate();

  return (
    <button
      className="relative flex flex-col items-center justify-center w-full h-full active:bg-gray-00 shadow-custom3 rounded-xl"
      onClick={() => {
        navigate(`reviews/${review.id}`);
      }}
    >
      <img src={tape} className="absolute -top-3" />
      <ReviewTitle title={review.title} />
      <ReviewContent body={review.body} />
    </button>
  );
};

export default Review;
