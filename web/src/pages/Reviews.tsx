import BtnContainer from 'components/reviews/btnContainer/BtnContainer';
import MemoPad from 'components/reviews/memopad/MemoPad';
import StickerModal from 'components/reviews/stickerModal/StickerModal';
import ConfirmModal from 'components/common/ConfirmModal';
import useToastHandler from 'hooks/useToastHandler';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'api';

const Reviews = () => {
  const [selectStickerIdx, setSelectStickerIdx] = useState(0);
  const [selectStickerId, setSelectStickerId] = useState(0);
  const [selectedToast, setSelectedToast] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [review, setReview] = useState<reviewDetail>({
    id: 0,
    title: '',
    body: '',
    lastModifiedTime: '',
    memberResponseDto: {
      id: 0,
      email: '',
      imageUrl: '',
      nickName: '',
    },
    isBookmark: false,
    stickerRspDtos: [],
  });

  const toastHandler = useToastHandler(true, '', '스티커를 지웠어요');

  const params = useParams();
  const id = Number(params.id);

  const confirmModalFn = async () => {
    try {
      await api.delete(`/stickers?stickerId=${selectStickerId}`);
      setReview((prev) => {
        prev.stickerRspDtos = prev.stickerRspDtos.filter(
          (sticker) => sticker.id !== selectStickerId,
        );

        return prev;
      });
      setSelectStickerIdx(Infinity);
      toastHandler();
    } catch (err) {
      console.error(err);
    }
  };

  const fetchReviewDetail = async () => {
    try {
      const result: fetchReviewDetail = await api.get(
        `/dambyeolags?dambyeolagId=${id}`,
      );
      setReview(result.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchReviewDetail();
  }, [id]);

  return (
    <>
      {
        <ConfirmModal
          text="남긴 스티커를 삭제할까요?"
          fn={() => {
            void confirmModalFn();
          }}
        />
      }
      <div className="flex flex-col items-center w-full h-full mt-[10%]">
        <MemoPad
          review={review}
          selectStickerIdx={selectStickerIdx}
          setSelectStickerIdx={setSelectStickerIdx}
          setSelectStickerId={setSelectStickerId}
          setSelectedToast={setSelectedToast}
        />
        <BtnContainer
          setIsModal={setIsModal}
          selectedToast={selectedToast}
          setSelectedToast={setSelectedToast}
        />
        {isModal ? (
          <StickerModal setIsModal={setIsModal} setReview={setReview} id={id} />
        ) : null}
      </div>
    </>
  );
};

export default Reviews;
