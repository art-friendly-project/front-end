import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnBasic from 'components/common/BtnBasic';
import ReviewPostContent from '../components/reviewPost/ReviewPostContent';
import ReviewPostTitle from '../components/reviewPost/ReviewPostTitle';
import ConfirmModal from 'components/common/ConfirmModal';
import { useAppDispatch, useAppSelector } from 'hooks';
import { isReviewTextActions } from 'store/modules/isReviewText';
import { selectShowId } from 'store/modules/showId';
import api from 'api';

const ReviewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useAppDispatch();
  const exhibitionId = useAppSelector(selectShowId);

  const navigate = useNavigate();

  const confirmModalFn = () => {
    navigate(-1);
  };

  const btnHandler = async () => {
    const post = {
      title,
      body,
      exhibitionId,
    };

    try {
      await api.post('/dambyeolags', post);
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

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
        fn={confirmModalFn}
      />
      <div className="flex flex-col w-full h-full">
        <ReviewPostTitle title={title} setTitle={setTitle} />
        <ReviewPostContent body={body} setBody={setBody} />
        <BtnBasic
          name="담벼락 등록하기"
          disable={title.length === 0 || body.length === 0}
          fn={() => {
            void btnHandler();
          }}
          style="sticky bottom-5 mt-auto"
        />
      </div>
    </>
  );
};

export default ReviewPost;
