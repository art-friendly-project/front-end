import { type Dispatch, type SetStateAction, useState } from 'react';
import Profile from './Profile';
import Title from './Title';
import Content from './Content';
import MemoPadStickerList from './MemoPadStickerList';
import MemoPadStickerComments from './MemoPadStickerComments';
import EditOrDeleteBtn from './EditOrDeleteBtn';
import EditorDeleteModal from './EditorDeleteModal';
import 'style/memoPad.css';
import MemoPadMarkingSticker from './MemoPadMarkingSticker';

interface memoPad {
  review: reviewDetail;
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
      <div className="relative flex flex-col w-84 h-108 rounded-2xl shadow-custom check">
        <MemoPadMarkingSticker />
        {userId === review.user.id ? (
          <EditOrDeleteBtn setIsEditorDeleteModal={setIsEditorDeleteModal} />
        ) : null}
        <Profile user={review.user} createdAt={review.createdAt} />
        <div className="px-[5%] flex flex-col mt-[10%] h-full overflow-y-scroll scrollbar-hide">
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
