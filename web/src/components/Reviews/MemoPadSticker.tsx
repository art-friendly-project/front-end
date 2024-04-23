import { type Dispatch, type SetStateAction } from 'react';
import purpleStar from 'assets/images/sticker/purpleStar.svg';

interface memoPadSticker {
  idx: number;
  userId: number;
  sticker: string;
  comments: string;
  setStickerComments: Dispatch<SetStateAction<string>>;
  setStickerIdx: Dispatch<SetStateAction<number>>;
  setStickerUserId: Dispatch<SetStateAction<number>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
}

const MemoPadSticker = ({
  idx,
  userId,
  sticker,
  comments,
  setStickerComments,
  setStickerIdx,
  setStickerUserId,
  setIsCommentModal,
}: memoPadSticker) => {
  const btnHandler = () => {
    setStickerComments(comments);
    setStickerUserId(userId);
    setStickerIdx(idx);
    setIsCommentModal((prev) => !prev);
  };

  return (
    <button className="relative mr-2 shrink-0" onClick={btnHandler}>
      {userid === userId ? (
        <img
          src={purpleStar}
          className="absolute w-4 h-4 -top-4 left-[1.3rem]"
        />
      ) : null}
      <img src={sticker} className={`w-14 h-14`} />
    </button>
  );
};

export const userid = 1;

export default MemoPadSticker;
