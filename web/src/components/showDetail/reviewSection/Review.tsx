import tape from 'assets/images/etc/tape.svg';
import ReviewTitle from './ReviewTitle';
import ReviewContent from './ReviewContent';
import { useNavigate } from 'react-router-dom';

interface review {
  title: string;
  content: string;
}

const Review = ({ title, content }: review) => {
  const navigate = useNavigate();
  return (
    <button
      className="relative flex flex-col items-center justify-center mb-8 mr-6 h-44 w-43/100 shadow-custom3 rounded-xl"
      onClick={() => {
        navigate('reviews');
      }}
    >
      <img src={tape} className="absolute -top-3" />
      <ReviewTitle title={title} />
      <ReviewContent content={content} />
    </button>
  );
};

export default Review;
