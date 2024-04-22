import { type Dispatch, type SetStateAction, useState } from 'react';
import { PiTrashSimple } from 'react-icons/pi';
import Profile from './Profile';
import Title from './Title';
import Content from './Content';
import MemoPadStickerList from './MemoPadStickerList';
import MemoPadStickerComments from './MemoPadStickerComments';

interface memoPad {
  review: review;
  setReview: Dispatch<SetStateAction<review>>;
}

const MemoPad = ({ review, setReview }: memoPad) => {
  const [stickerComments, setStickerComments] = useState('');
  const [stickerIdx, setStickerIdx] = useState(0);
  const [isCommentModal, setIsCommentModal] = useState(false);

  return (
    <>
      <div className="relative bg-cover w-100 h-140 bg-memo-pad">
        <PiTrashSimple className="absolute w-6 h-6 top-24 right-10" />
        <div className="absolute flex flex-col overflow-y-scroll left-12 top-20 h-92 w-78 scrollbar-hide">
          <Profile user={review.user} createdAt={review.createdAt} />
          <Title title={review.title} />
          <Content content={review.content} />
        </div>
        <MemoPadStickerList
          stickers={review.stickers}
          setStickerComments={setStickerComments}
          setStickerIdx={setStickerIdx}
          setIsCommentModal={setIsCommentModal}
        />
        {isCommentModal ? (
          <MemoPadStickerComments
            stickerComments={stickerComments}
            setIsCommentModal={setIsCommentModal}
            setReview={setReview}
            stickerIdx={stickerIdx}
          />
        ) : null}
      </div>
    </>
  );
};

export default MemoPad;
