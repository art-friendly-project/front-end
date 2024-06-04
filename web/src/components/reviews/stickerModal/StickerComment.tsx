import { type Dispatch, type SetStateAction } from 'react';
import StickerCommentText from './StickerCommentText';
import StickerCommentTitle from './StickerCommentTitle';
import StickerCommentBtnContainer from './StickerCommentBtnContainer';

interface stickerComment {
  text: string;
  stickerType: string;
  setText: Dispatch<SetStateAction<string>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  id: number;
  setReview: Dispatch<SetStateAction<reviewDetail>>;
}

const StickerComment = ({
  text,
  stickerType,
  setText,
  setIsModal,
  id,
  setReview,
}: stickerComment) => {
  return (
    <div className="absolute bottom-0 z-30 flex w-full pb-[5%] bg-white rounded-t-2xl animate-move-top-regular">
      <div className="flex flex-col items-center w-full">
        <StickerCommentTitle setIsModal={setIsModal} />
        <StickerCommentText text={text} setText={setText} />
        <StickerCommentBtnContainer
          text={text}
          stickerType={stickerType}
          setIsModal={setIsModal}
          id={id}
          setReview={setReview}
        />
      </div>
    </div>
  );
};

export default StickerComment;
