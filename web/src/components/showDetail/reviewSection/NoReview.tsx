import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { showIdActions } from 'store/modules/showId';
import RightArrowBtn from 'components/common/RightArrowBtn';
import review from 'assets/images/etc/review.svg';

interface noReview {
  id: number;
}

const NoReview = ({ id }: noReview) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const btnHandler = () => {
    dispatch(showIdActions.current(id));
    navigate('/review-post');
  };

  return (
    <>
      <img src={review} className="w-9/10" />
      <div className="absolute flex justify-center w-9/10 bottom-8">
        <RightArrowBtn name="담벼락 남기기" fn={btnHandler} />
      </div>
    </>
  );
};

export default NoReview;
