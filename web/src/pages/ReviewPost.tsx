import BtnBasic from 'components/common/BtnBasic';
import ReviewPostContent from '../components/reviewPost/ReviewPostContent';
import ReviewPostTitle from '../components/reviewPost/ReviewPostTitle';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks';
import { isPostEmptyActions } from 'store/modules/isPostEmpty';

const ReviewPost = () => {
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      isPostEmptyActions.check(
        titleText.length === 0 && contentText.length === 0,
      ),
    );
  }, [titleText, contentText]);

  const btnHandler = () => {};
  return (
    <>
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
    </>
  );
};

export default ReviewPost;
