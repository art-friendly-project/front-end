import BtnAndRightArrow from 'components/common/BtnAndRightArrow';
import review from 'assets/images/etc/review.svg';

const NoReview = () => {
  const btnHandler = () => {};

  return (
    <>
      <img src={review} className="w-9/10" />
      <div className="absolute flex justify-center w-9/10 bottom-8">
        <BtnAndRightArrow
          name="담벼락 남기기"
          disable={false}
          fn={btnHandler}
        />
      </div>
    </>
  );
};

export default NoReview;
