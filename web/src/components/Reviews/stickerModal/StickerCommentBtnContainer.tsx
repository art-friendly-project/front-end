import { type Dispatch, type SetStateAction } from 'react';
import { userid } from '../memopad/MemoPadSticker';

interface stickerCommentBtnContainer {
  text: string;
  sticker: string;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setIsStickerOk: Dispatch<SetStateAction<boolean>>;
  setReview: Dispatch<SetStateAction<review>>;
}

const StickerCommentBtnContainer = ({
  text,
  sticker,
  setIsModal,
  setIsStickerOk,
  setReview,
}: stickerCommentBtnContainer) => {
  const StickerAndCommentsBtnHandler = () => {
    setIsModal(false);
    setIsStickerOk(true);

    setReview((prev) => {
      prev.stickers.push({
        id: prev.stickers.length + 1,
        sticker,
        userId: userid,
        comments: text,
      });

      return prev;
    });
  };
  return (
    <div className="flex justify-center w-full mt-4">
      <button
        disabled={text.length === 0}
        className={`h-12 text-white rounded-lg text-Subhead w-9/10 ${text.length === 0 ? 'bg-orange-50' : 'bg-orange-100'}`}
        onClick={StickerAndCommentsBtnHandler}
      >
        댓글 남기기
      </button>
    </div>
  );
};

export default StickerCommentBtnContainer;
