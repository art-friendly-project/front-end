import MemoPadSticker from './MemoPadSticker';
import { type Dispatch, type SetStateAction } from 'react';

interface stickerList {
  stickers: sticker[];
  setStickerComments: Dispatch<SetStateAction<string>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
  setSelectStickerIdx: Dispatch<SetStateAction<number>>;
  userId: number;
}

const MemoPadStickerList = ({
  stickers,
  setStickerComments,
  setIsCommentModal,
  setSelectStickerIdx,
  userId,
}: stickerList) => {
  return (
    <div className="absolute flex h-24 items-end overflow-x-scroll scrollbar-hide bottom-10 left-5 w-91.2">
      {stickers.map((sticker, idx) => (
        <MemoPadSticker
          key={sticker.id}
          stickerUserId={sticker.userId}
          sticker={sticker.sticker}
          comments={sticker.comments}
          setStickerComments={setStickerComments}
          setIsCommentModal={setIsCommentModal}
          idx={idx}
          setSelectStickerIdx={setSelectStickerIdx}
          userId={userId}
        />
      ))}
    </div>
  );
};

export default MemoPadStickerList;
