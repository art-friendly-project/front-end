import MemoPadSticker from './MemoPadSticker';
import { type Dispatch, type SetStateAction } from 'react';

interface stickerList {
  stickers: sticker[];
  setStickerComments: Dispatch<SetStateAction<string>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
  selectStickerIdx: number;
  setSelectStickerIdx: Dispatch<SetStateAction<number>>;
  userId: number;
  setSelectedToast: Dispatch<SetStateAction<number>>;
}

const MemoPadStickerList = ({
  stickers,
  setStickerComments,
  setIsCommentModal,
  selectStickerIdx,
  setSelectStickerIdx,
  userId,
  setSelectedToast,
}: stickerList) => {
  return (
    <div className="flex items-end h-36 mb-[5%] overflow-x-scroll scrollbar-hide">
      {stickers.map((sticker, idx) => (
        <MemoPadSticker
          key={sticker.id}
          stickerUserId={sticker.userId}
          sticker={sticker.sticker}
          comments={sticker.comments}
          setStickerComments={setStickerComments}
          setIsCommentModal={setIsCommentModal}
          idx={idx}
          selectStickerIdx={selectStickerIdx}
          setSelectStickerIdx={setSelectStickerIdx}
          userId={userId}
          setSelectedToast={setSelectedToast}
        />
      ))}
    </div>
  );
};

export default MemoPadStickerList;
