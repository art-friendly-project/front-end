import BtnContainer from 'components/Reviews/BtnContainer';
import MemoPad from 'components/Reviews/MemoPad';

const Reviews = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full pt-10">
      <MemoPad />
      <BtnContainer />
    </div>
  );
};

export default Reviews;
