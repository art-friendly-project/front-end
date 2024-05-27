import { type Dispatch, type SetStateAction } from 'react';

interface memoPadStickerComments {
  stickerComments: string;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
}

const MemoPadStickerComments = ({
  stickerComments,
}: memoPadStickerComments) => {
  return (
    <div className="absolute left-0 z-10 flex items-center bg-white border border-orange-100 rounded-full h-18 -bottom-16 w-84 shadow-custom animate-appear-fast">
      <span className="w-4/5 ml-4 text-Body2-M">{stickerComments}</span>
    </div>
  );
};

export default MemoPadStickerComments;
