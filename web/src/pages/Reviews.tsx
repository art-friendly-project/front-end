import BtnContainer from 'components/Reviews/btnContainer/BtnContainer';
import MemoPad from 'components/Reviews/memopad/MemoPad';
import StickerModal from 'components/Reviews/stickerModal/StickerModal';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Reviews = () => {
  const [review, setReview] = useState<review>({
    id: 0,
    title: '',
    content: '',
    createdAt: '',
    stickers: [],
    user: {
      id: 0,
      nickName: '',
      profileImage: '',
    },
  });

  const location = useLocation();
  const reviewData: review = location.state.review;
  const [isModal, setIsModal] = useState(false);
  const [isStickerOk, setIsStickerOk] = useState(false);

  useEffect(() => {
    setReview(reviewData);
  }, [reviewData]);

  return (
    <>
      <div className="flex flex-col items-center w-full h-full pt-10">
        <MemoPad review={review} setReview={setReview} />
        <BtnContainer
          setIsModal={setIsModal}
          isStickerOk={isStickerOk}
          setIsStickerOk={setIsStickerOk}
        />
        {isModal ? (
          <StickerModal
            setIsModal={setIsModal}
            setIsStickerOk={setIsStickerOk}
            setReview={setReview}
          />
        ) : null}
      </div>
    </>
  );
};

export default Reviews;
