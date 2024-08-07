import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewPostContent from '../components/reviewPost/ReviewPostContent';
import ReviewPostTitle from '../components/reviewPost/ReviewPostTitle';
import ConfirmModal from 'components/common/ConfirmModal';
import { useAppDispatch, useAppSelector } from 'hooks';
import { isReviewTextActions } from 'store/modules/isReviewText';
import { selectShowId } from 'store/modules/showId';
import BasicBtn from 'components/common/BasicBtn';
import { usePostReview } from 'hooks/query/usePostReview';

const ReviewPost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const exhibitionId = useAppSelector(selectShowId);

  const mutate = usePostReview(exhibitionId, title, body);

  useEffect(() => {
    dispatch(
      isReviewTextActions.setIsReviewText(
        title.length !== 0 || body.length !== 0,
      ),
    );
  }, [title, body]);

  return (
    <>
      <ConfirmModal
        text={'담벼락을 아직 작성 중이에요.\n종료할까요?'}
        fn={() => {
          navigate(-1);
        }}
      />
      <div className="flex flex-col w-full h-full">
        <ReviewPostTitle title={title} setTitle={setTitle} />
        <ReviewPostContent body={body} setBody={setBody} />
        <BasicBtn
          name="담벼락 등록하기"
          disable={title.length === 0 || body.length === 0}
          fn={() => {
            mutate();
            navigate(-1);
          }}
          style="sticky bottom-5 mt-auto"
        />
      </div>
    </>
  );
};

export default ReviewPost;
