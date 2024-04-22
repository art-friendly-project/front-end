import MemoPadSticker from './MemoPadSticker';
import { type Dispatch, type SetStateAction } from 'react';

interface stickerList {
  stickers: sticker[];
  setStickerComments: Dispatch<SetStateAction<string>>;
  setStickerIdx: Dispatch<SetStateAction<number>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
}

const MemoPadStickerList = ({
  stickers,
  setStickerComments,
  setStickerIdx,
  setIsCommentModal,
}: stickerList) => {
  return (
    <div className="absolute flex h-16 overflow-x-scroll scrollbar-hide bottom-10 left-5 w-91.2">
      {stickers.map((sticker, idx) => (
        <MemoPadSticker
          key={sticker.id}
          idx={idx}
          sticker={sticker.sticker}
          comments={sticker.comments}
          setStickerComments={setStickerComments}
          setStickerIdx={setStickerIdx}
          setIsCommentModal={setIsCommentModal}
        />
      ))}
    </div>
  );
};

export default MemoPadStickerList;
