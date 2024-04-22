import { type Dispatch, type SetStateAction } from 'react';

interface memoPadSticker {
  idx: number;
  sticker: string;
  comments: string;
  setStickerComments: Dispatch<SetStateAction<string>>;
  setStickerIdx: Dispatch<SetStateAction<number>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
}

const MemoPadSticker = ({
  idx,
  sticker,
  comments,
  setStickerComments,
  setStickerIdx,
  setIsCommentModal,
}: memoPadSticker) => {
  const btnHandler = () => {
    setStickerComments(comments);
    setStickerIdx(idx);
    setIsCommentModal((prev) => !prev);
  };

  return (
    <button className="mr-2 shrink-0" onClick={btnHandler}>
      <img src={sticker} className={`w-14 h-14`} />
    </button>
  );
};

export default MemoPadSticker;
