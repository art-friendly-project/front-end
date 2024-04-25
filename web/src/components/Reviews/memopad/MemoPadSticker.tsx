import { type Dispatch, type SetStateAction } from 'react';
import purpleStar from 'assets/images/sticker/purpleStar.svg';
import { useLongPress } from 'use-long-press';

interface memoPadSticker {
  userId: number;
  sticker: string;
  comments: string;
  setStickerComments: Dispatch<SetStateAction<string>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
  setIsStickerDeleteModal: Dispatch<SetStateAction<boolean>>;
  idx: number;
  setSelectStickerIdx: Dispatch<SetStateAction<number>>;
  myId: number;
}

const MemoPadSticker = ({
  userId,
  sticker,
  comments,
  setStickerComments,
  setIsCommentModal,
  setIsStickerDeleteModal,
  idx,
  setSelectStickerIdx,
  myId,
}: memoPadSticker) => {
  const btnHandler = () => {
    setStickerComments(comments);
    setIsCommentModal((prev) => !prev);
  };

  const onPressHandler = useLongPress(
    userId === myId
      ? () => {
          setIsStickerDeleteModal(true);
          setSelectStickerIdx(idx);
        }
      : null,
    {
      threshold: 500,
    },
  );

  return (
    <button
      className={`relative mr-2 duration-700 shrink-0 ${userId === myId ? 'active:scale-125' : ''} `}
      {...onPressHandler()}
      onClick={btnHandler}
    >
      {userId === myId ? (
        <img
          src={purpleStar}
          className="absolute w-4 h-4 -top-4 left-[1.3rem]"
        />
      ) : null}
      <img src={sticker} className="w-14 h-14" />
    </button>
  );
};

export default MemoPadSticker;
