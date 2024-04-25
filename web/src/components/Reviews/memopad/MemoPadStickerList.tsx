import MemoPadSticker from './MemoPadSticker';
import { type Dispatch, type SetStateAction } from 'react';

interface stickerList {
  stickers: sticker[];
  setStickerComments: Dispatch<SetStateAction<string>>;
  setStickerIdx: Dispatch<SetStateAction<number>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
  setStickerUserId: Dispatch<SetStateAction<number>>;
  setIsDeleteModalOpen: Dispatch<SetStateAction<boolean>>;
}

const MemoPadStickerList = ({
  stickers,
  setStickerComments,
  setStickerIdx,
  setIsCommentModal,
  setStickerUserId,
  setIsDeleteModalOpen,
}: stickerList) => {
  return (
    <div className="absolute flex h-18 items-end overflow-x-scroll scrollbar-hide bottom-10 left-5 w-91.2">
      {stickers.map((sticker, idx) => (
        <MemoPadSticker
          key={sticker.id}
          userId={sticker.userId}
          idx={idx}
          sticker={sticker.sticker}
          comments={sticker.comments}
          setStickerComments={setStickerComments}
          setStickerIdx={setStickerIdx}
          setStickerUserId={setStickerUserId}
          setIsCommentModal={setIsCommentModal}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      ))}
    </div>
  );
};

export default MemoPadStickerList;
