import BtnContainer from 'components/reviews/btnContainer/BtnContainer';
import MemoPad from 'components/reviews/memopad/MemoPad';
import StickerModal from 'components/reviews/stickerModal/StickerModal';
import ConfirmModal from 'components/common/ConfirmModal';
import useToastHandler from 'hooks/useToastHandler';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetReview } from 'hooks/query/useGetReview';
import { useDeleteSticker } from 'hooks/query/useDeleteSticker';

const Reviews = () => {
  const params = useParams();
  const id = Number(params.id);

  const [selectStickerIdx, setSelectStickerIdx] = useState(0);
  const [selectStickerId, setSelectStickerId] = useState(0);
  const [isModal, setIsModal] = useState(false);

  const data = useGetReview(id);
  const mutate = useDeleteSticker(selectStickerId);

  const toastHandler = useToastHandler(true, '', '스티커를 지웠어요');

  if (data === undefined) {
    return <></>;
  }

  return (
    <>
      {
        <ConfirmModal
          text="남긴 스티커를 삭제할까요?"
          fn={() => {
            mutate();
            setSelectStickerIdx(Infinity);
            toastHandler();
          }}
        />
      }
      <div className="flex flex-col items-center w-full h-full mt-[10%]">
        <MemoPad
          review={data}
          selectStickerIdx={selectStickerIdx}
          setSelectStickerIdx={setSelectStickerIdx}
          setSelectStickerId={setSelectStickerId}
        />
        <BtnContainer
          setIsModal={setIsModal}
          id={id}
          isBookmark={data?.isBookmark}
          isSticker={data?.isSticker}
        />
        {isModal ? <StickerModal setIsModal={setIsModal} id={id} /> : null}
      </div>
    </>
  );
};

export default Reviews;
