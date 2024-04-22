import { type Dispatch, type SetStateAction } from 'react';
import StickerCommentText from './StickerCommentText';
import StickerCommentTitle from './StickerCommentTitle';
import StickerCommentBtnContainer from './StickerCommentBtnContainer';

interface stickerComment {
  sticker: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setIsStickerOk: Dispatch<SetStateAction<boolean>>;
  setReview: Dispatch<SetStateAction<review>>;
}

const StickerComment = ({
  sticker,
  text,
  setText,
  setIsModal,
  setIsStickerOk,
  setReview,
}: stickerComment) => {
  return (
    <div className="flex flex-col items-center w-full">
      <StickerCommentTitle sticker={sticker} />
      <StickerCommentText text={text} setText={setText} />
      <StickerCommentBtnContainer
        text={text}
        sticker={sticker}
        setIsModal={setIsModal}
        setIsStickerOk={setIsStickerOk}
        setReview={setReview}
      />
    </div>
  );
};

export default StickerComment;