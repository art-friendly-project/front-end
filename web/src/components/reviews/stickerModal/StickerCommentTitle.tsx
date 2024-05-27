import { type Dispatch, type SetStateAction } from 'react';
import { IoIosClose } from 'react-icons/io';

interface stickerCommentTitle {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const StickerCommentTitle = ({ setIsModal }: stickerCommentTitle) => {
  return (
    <div className="relative flex flex-col w-full pl-[5%] mt-14">
      <span className="text-gray-110 text-Headline">댓글 남기기</span>
      <span className="mt-2 text-gray-100 text-Body3-M">
        담벼락에 댓글을 남겨보세요!
      </span>
      <button
        className="absolute -top-2 right-[5%] active:bg-gray-00"
        onClick={() => {
          setIsModal(false);
        }}
      >
        <IoIosClose className="w-12 h-12" />
      </button>
    </div>
  );
};

export default StickerCommentTitle;
