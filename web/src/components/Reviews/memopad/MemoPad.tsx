import { type Dispatch, type SetStateAction, useState } from 'react';
import Profile from './Profile';
import Title from './Title';
import Content from './Content';
import MemoPadStickerList from './MemoPadStickerList';
import MemoPadStickerComments from './MemoPadStickerComments';
import DeleteBtn from './DeleteBtn';
import DeleteReviewModal from './DeleteReviewModal';
import DeleteStickerModal from './DeleteStickerModal';

interface memoPad {
  review: review;
  setReview: Dispatch<SetStateAction<review>>;
}

const MemoPad = ({ review, setReview }: memoPad) => {
  const [stickerComments, setStickerComments] = useState('');
  const [isCommentModal, setIsCommentModal] = useState(false);
  const [isReviewDeleteModal, setIsReviewDeleteModal] = useState(false);
  const [isStickerDeleteModal, setIsStickerDeleteModal] = useState(false);
  const [selectStickerIdx, setSelectStickerIdx] = useState(0);

  const id = localStorage.getItem('userId');
  const myId = Number(id);

  return (
    <>
      {isReviewDeleteModal ? (
        <DeleteReviewModal setIsReviewDeleteModal={setIsReviewDeleteModal} />
      ) : null}
      {isStickerDeleteModal ? (
        <DeleteStickerModal
          setIsStickerDeleteModal={setIsStickerDeleteModal}
          setReview={setReview}
          selectStickerIdx={selectStickerIdx}
        />
      ) : null}
      <div className="relative bg-cover w-100 h-140 bg-memo-pad shrink-0">
        {Number(myId) === review.user.id ? (
          <DeleteBtn setIsReviewDeleteModal={setIsReviewDeleteModal} />
        ) : null}
        <div className="absolute flex flex-col overflow-y-scroll left-12 top-20 h-92 w-78 scrollbar-hide">
          <Profile user={review.user} createdAt={review.createdAt} />
          <Title title={review.title} />
          <Content content={review.content} />
        </div>
        <MemoPadStickerList
          stickers={review.stickers}
          setStickerComments={setStickerComments}
          setIsCommentModal={setIsCommentModal}
          setIsStickerDeleteModal={setIsStickerDeleteModal}
          setSelectStickerIdx={setSelectStickerIdx}
          myId={myId}
        />
        {isCommentModal ? (
          <MemoPadStickerComments
            stickerComments={stickerComments}
            setIsCommentModal={setIsCommentModal}
          />
        ) : null}
      </div>
    </>
  );
};

export default MemoPad;
