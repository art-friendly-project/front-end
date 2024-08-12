import MemoPadSticker from './MemoPadSticker';
import { type Dispatch, type SetStateAction } from 'react';

interface stickerList {
  stickers: reviewDetail['stickerRspDtos'];
  setStickerComments: Dispatch<SetStateAction<string>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
  selectStickerIdx: number;
  setSelectStickerIdx: Dispatch<SetStateAction<number>>;
  setSelectStickerId: Dispatch<SetStateAction<number>>;
  myId: number;
}

const MemoPadStickerList = ({
  stickers,
  setStickerComments,
  setIsCommentModal,
  selectStickerIdx,
  setSelectStickerIdx,
  setSelectStickerId,
  myId,
}: stickerList) => {
  return (
    <div className="flex items-end h-36 mb-[5%] overflow-x-scroll scrollbar-hide">
      {stickers?.map((sticker, idx) => (
        <MemoPadSticker
          key={sticker.id}
          id={sticker.id}
          stickerUserId={sticker.memberId}
          stickerType={sticker.stickerType}
          comments={sticker.body}
          setStickerComments={setStickerComments}
          setIsCommentModal={setIsCommentModal}
          idx={idx}
          selectStickerIdx={selectStickerIdx}
          setSelectStickerIdx={setSelectStickerIdx}
          setSelectStickerId={setSelectStickerId}
          myId={myId}
        />
      ))}
    </div>
  );
};

export default MemoPadStickerList;
