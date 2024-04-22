import { type Dispatch, type SetStateAction } from 'react';

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
  const onlyStickerBtnHandler = () => {
    setIsModal(false);
    setIsStickerOk(true);

    setReview((prev) => {
      prev.stickers.push({
        id: prev.stickers.length + 1,
        sticker,
        comments: '',
      });

      return prev;
    });
  };

  const StickerAndCommentsBtnHandler = () => {
    setIsModal(false);
    setIsStickerOk(true);

    setReview((prev) => {
      prev.stickers.push({
        id: prev.stickers.length + 1,
        sticker,
        comments: text,
      });

      return prev;
    });
  };
  return (
    <div className="flex justify-center w-full mt-4">
      <button
        className="h-12 border-2 border-orange-100 rounded-lg text-Subhead text-gray-110 w-44"
        onClick={onlyStickerBtnHandler}
      >
        스티커만 붙이기
      </button>
      <button
        disabled={text.length === 0}
        className={`h-12 ml-5 text-white rounded-lg text-Subhead w-44 ${text.length === 0 ? 'bg-orange-50' : 'bg-orange-100'}`}
        onClick={StickerAndCommentsBtnHandler}
      >
        댓글 남기기
      </button>
    </div>
  );
};

export default StickerCommentBtnContainer;
