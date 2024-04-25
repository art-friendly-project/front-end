import { type Dispatch, type SetStateAction, useState } from 'react';
import Profile from './Profile';
import Title from './Title';
import Content from './Content';
import MemoPadStickerList from './MemoPadStickerList';
import MemoPadStickerComments from './MemoPadStickerComments';
import DeleteBtn from './DeleteBtn';
import DeleteModal from './DeleteModal';

interface memoPad {
  review: review;
  setReview: Dispatch<SetStateAction<review>>;
}

const MemoPad = ({ review, setReview }: memoPad) => {
  const [stickerComments, setStickerComments] = useState('');
  const [stickerIdx, setStickerIdx] = useState(0);
  const [stickerUserId, setStickerUserId] = useState(0);
  const [isCommentModal, setIsCommentModal] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const userId = localStorage.getItem('userId');

  return (
    <>
      {isDeleteModalOpen ? (
        <DeleteModal setIsDeleteModalOpen={setIsDeleteModalOpen} />
      ) : null}
      <div className="relative bg-cover w-100 h-140 bg-memo-pad shrink-0">
        {Number(userId) === review.user.id ? (
          <DeleteBtn setIsDeleteModalOpen={setIsDeleteModalOpen} />
        ) : null}
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
          setStickerUserId={setStickerUserId}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
        {isCommentModal ? (
          <MemoPadStickerComments
            stickerComments={stickerComments}
            setIsCommentModal={setIsCommentModal}
            setReview={setReview}
            stickerIdx={stickerIdx}
            stickerUserId={stickerUserId}
          />
        ) : null}
      </div>
    </>
  );
};

export default MemoPad;
