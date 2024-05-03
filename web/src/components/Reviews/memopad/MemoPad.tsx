import { type Dispatch, type SetStateAction, useState } from 'react';
import Profile from './Profile';
import Title from './Title';
import Content from './Content';
import MemoPadStickerList from './MemoPadStickerList';
import MemoPadStickerComments from './MemoPadStickerComments';
import EditOrDeleteBtn from './EditOrDeleteBtn';
import EditorDeleteModal from './EditorDeleteModal';

interface memoPad {
  review: review;
  selectStickerIdx: number;
  setSelectStickerIdx: Dispatch<SetStateAction<number>>;
  setSelectedToast: Dispatch<SetStateAction<number>>;
}

const MemoPad = ({
  review,
  selectStickerIdx,
  setSelectStickerIdx,
  setSelectedToast,
}: memoPad) => {
  const [stickerComments, setStickerComments] = useState('');
  const [isCommentModal, setIsCommentModal] = useState(false);
  const [isEditorDeleteModal, setIsEditorDeleteModal] = useState(false);

  const userId = Number(sessionStorage.getItem('userId'));

  return (
    <>
      <div className="relative bg-cover w-100 h-140 bg-memo-pad shrink-0">
        {userId === review.user.id ? (
          <EditOrDeleteBtn setIsEditorDeleteModal={setIsEditorDeleteModal} />
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
          selectStickerIdx={selectStickerIdx}
          setSelectStickerIdx={setSelectStickerIdx}
          userId={userId}
          setSelectedToast={setSelectedToast}
        />
        {isCommentModal ? (
          <MemoPadStickerComments
            stickerComments={stickerComments}
            setIsCommentModal={setIsCommentModal}
          />
        ) : null}
      </div>
      {isEditorDeleteModal ? (
        <EditorDeleteModal setIsEditorDeleteModal={setIsEditorDeleteModal} />
      ) : null}
    </>
  );
};

export default MemoPad;
