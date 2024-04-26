import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnBasic from 'components/common/BtnBasic';
import ReviewPostContent from '../components/reviewPost/ReviewPostContent';
import ReviewPostTitle from '../components/reviewPost/ReviewPostTitle';
import ConfirmModal from 'components/common/ConfirmModal';
import { useAppDispatch } from 'hooks';
import { isReviewTextActions } from 'store/modules/isReviewText';

const ReviewPost = () => {
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const confirmModalFn = () => {
    navigate(-1);
  };

  const btnHandler = () => {};

  useEffect(() => {
    dispatch(
      isReviewTextActions.setIsReviewText(
        titleText.length === 0 && contentText.length === 0,
      ),
    );
  }, [titleText, contentText]);

  return (
    <>
      <ConfirmModal
        text={'담벼락을 아직 작성 중이에요.\n종료할까요?'}
        fn={confirmModalFn}
      />
      <div className="flex flex-col w-full h-full">
        <ReviewPostTitle titleText={titleText} setTitleText={setTitleText} />
        <ReviewPostContent
          contentText={contentText}
          setContentText={setContentText}
        />
        <BtnBasic
          name="담벼락 등록하기"
          disable={titleText.length === 0 || contentText.length === 0}
          fn={btnHandler}
        />
      </div>
    </>
  );
};

export default ReviewPost;
