import { type Dispatch, type SetStateAction } from 'react';
import { PiTrashSimple } from 'react-icons/pi';

interface stickerDeleteBtn {
  setReview: Dispatch<SetStateAction<review>>;
  stickerIdx: number;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
}

const StickerDeleteBtn = ({
  setReview,
  stickerIdx,
  setIsCommentModal,
}: stickerDeleteBtn) => {
  const deleteBtnHandler = () => {
    setReview((prev) => {
      prev.stickers = prev.stickers.filter((_, idx) => idx !== stickerIdx);
      return prev;
    });
    setIsCommentModal(false);
  };
  return (
    <button className="ml-2" onClick={deleteBtnHandler}>
      <PiTrashSimple className="w-5 h-5" />
    </button>
  );
};

export default StickerDeleteBtn;
