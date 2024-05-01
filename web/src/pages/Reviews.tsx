import BtnContainer from 'components/Reviews/btnContainer/BtnContainer';
import MemoPad from 'components/Reviews/memopad/MemoPad';
import StickerModal from 'components/Reviews/stickerModal/StickerModal';
import ConfirmModal from 'components/common/ConfirmModal';
import useToastHandler from 'hooks/useToastHandler';
import { reviewDatas } from 'mock/mockData';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Reviews = () => {
  const [selectStickerIdx, setSelectStickerIdx] = useState(0);
  const [selectedToast, setSelectedToast] = useState(0);
  const [isModal, setIsModal] = useState(false);
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

  const toastHandler = useToastHandler(true, '', '스티커를 지웠어요');

  const location = useLocation();
  const pathname = location.pathname;
  const showId = Number(pathname.slice(7)[0]);

  const params = useParams();
  const id = Number(params.id);

  const reviewData = reviewDatas[showId][id - 1];

  const confirmModalFn = () => {
    setReview((prev) => {
      return {
        id: prev.id,
        title: prev.title,
        content: prev.content,
        createdAt: prev.createdAt,
        stickers: prev.stickers.filter((_, i) => i !== selectStickerIdx),
        user: prev.user,
      };
    });
    setSelectStickerIdx(Infinity);
    toastHandler();
  };

  useEffect(() => {
    setReview(reviewData);
  }, [reviewData]);

  return (
    <>
      {<ConfirmModal text="남긴 스티커를 삭제할까요?" fn={confirmModalFn} />}
      <div className="flex flex-col items-center w-full h-full pt-10">
        <MemoPad
          review={review}
          setSelectStickerIdx={setSelectStickerIdx}
          setSelectedToast={setSelectedToast}
        />
        <BtnContainer
          setIsModal={setIsModal}
          selectedToast={selectedToast}
          setSelectedToast={setSelectedToast}
        />
        {isModal ? (
          <StickerModal setIsModal={setIsModal} setReview={setReview} />
        ) : null}
      </div>
    </>
  );
};

export default Reviews;
