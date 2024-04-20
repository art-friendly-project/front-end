import { useLocation } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import Profile from './Profile';
import Title from './Title';
import Content from './Content';

const MemoPad = () => {
  const location = useLocation();
  const review = location.state.review;

  return (
    <>
      <div className="relative bg-cover w-100 h-140 bg-memo-pad">
        <BsTrash className="absolute w-6 h-6 top-24 right-10" />
        <div className="absolute flex flex-col overflow-y-scroll left-10 top-20 h-108 w-80 scrollbar-hide">
          <Profile user={review.user} createdAt={review.createdAt} />
          <Title title={review.title} />
          <Content content={review.content} />
        </div>
      </div>
    </>
  );
};

export default MemoPad;
