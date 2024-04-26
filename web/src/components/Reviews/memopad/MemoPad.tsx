import { type Dispatch, type SetStateAction, useState } from 'react';
import Profile from './Profile';
import Title from './Title';
import Content from './Content';
import MemoPadStickerList from './MemoPadStickerList';
import MemoPadStickerComments from './MemoPadStickerComments';
import DeleteBtn from './DeleteBtn';

interface memoPad {
  review: review;
  setSelectStickerIdx: Dispatch<SetStateAction<number>>;
}

const MemoPad = ({ review, setSelectStickerIdx }: memoPad) => {
  const [stickerComments, setStickerComments] = useState('');
  const [isCommentModal, setIsCommentModal] = useState(false);

  const id = sessionStorage.getItem('userId');
  const myId = Number(id);

  return (
    <>
      <div className="relative bg-cover w-100 h-140 bg-memo-pad shrink-0">
        {Number(myId) === review.user.id ? <DeleteBtn /> : null}
        <div className="absolute flex flex-col overflow-y-scroll left-12 top-20 h-92 w-78 scrollbar-hide">
          <Profile user={review.user} createdAt={review.createdAt} />
          <Title title={review.title} />
          <Content content={review.content} />
        </div>
        <MemoPadStickerList
          stickers={review.stickers}
          setStickerComments={setStickerComments}
          setIsCommentModal={setIsCommentModal}
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
