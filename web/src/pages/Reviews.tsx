import BtnContainer from 'components/Reviews/btnContainer/BtnContainer';
import MemoPad from 'components/Reviews/memopad/MemoPad';
import StickerModal from 'components/Reviews/stickerModal/StickerModal';
import { reviewDatas } from 'mock/mockData';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

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
  const pathname = location.pathname;
  const showId = Number(pathname.slice(7)[0]);

  const params = useParams();
  const id = Number(params.id);

  const reviewData = reviewDatas[showId][id - 1];
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
