import { type Dispatch, type SetStateAction } from 'react';
import MemoPadCloseBtn from './MemoPadCloseBtn';
import { userid } from './MemoPadSticker';
import StickerDeleteBtn from './StickerDeleteBtn';

interface memoPadStickerComments {
  stickerComments: string;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
  setReview: Dispatch<SetStateAction<review>>;
  stickerIdx: number;
  stickerUserId: number;
}

const MemoPadStickerComments = ({
  stickerComments,
  setIsCommentModal,
  setReview,
  stickerIdx,
  stickerUserId,
}: memoPadStickerComments) => {
  return (
    <div className="absolute flex items-center bg-white border border-orange-100 rounded-full h-18 -bottom-10 w-92 left-4 shadow-custom animate-appear-fast">
      <span className="w-4/5 ml-4 text-Body2-M">{stickerComments}</span>
      {stickerUserId === userid ? (
        <StickerDeleteBtn
          setReview={setReview}
          stickerIdx={stickerIdx}
          setIsCommentModal={setIsCommentModal}
        />
      ) : null}
      <MemoPadCloseBtn setIsCommentModal={setIsCommentModal} />
    </div>
  );
};

export default MemoPadStickerComments;
