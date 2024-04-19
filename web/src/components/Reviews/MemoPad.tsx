import { useLocation } from 'react-router-dom';
import memoPad from 'assets/images/etc/memoPad.svg';
import Profile from './Profile';
import Title from './Title';
import Content from './Content';

const MemoPad = () => {
  const location = useLocation();
  const review = location.state.review;

  return (
    <div className="relative flex justify-center w-full mt-12">
      <img src={memoPad} className="w-full" />
      <div className="absolute flex flex-col overflow-y-scroll top-20 h-108 w-7/10 scrollbar-hide">
        <Profile user={review.user} createdAt={review.createdAt} />
        <Title title={review.title} />
        <Content content={review.content} />
      </div>
    </div>
  );
};

export default MemoPad;
