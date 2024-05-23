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
  setSelectStickerId: Dispatch<SetStateAction<number>>;
  setSelectedToast: Dispatch<SetStateAction<number>>;
}

const MemoPad = ({
  review,
  selectStickerIdx,
  setSelectStickerIdx,
  setSelectStickerId,
  setSelectedToast,
}: memoPad) => {
  const [stickerComments, setStickerComments] = useState('');
  const [isCommentModal, setIsCommentModal] = useState(false);
  const [isEditorDeleteModal, setIsEditorDeleteModal] = useState(false);

  const userId = Number(localStorage.getItem('myId'));

  return (
    <>
      <div className="relative flex flex-col w-84 h-108 rounded-2xl shadow-custom check">
        <MemoPadMarkingSticker />
        {userId === review.memberResponseDto.id ? (
          <EditOrDeleteBtn setIsEditorDeleteModal={setIsEditorDeleteModal} />
        ) : null}
        <Profile
          user={review.memberResponseDto}
          lastModifiedTime={review.lastModifiedTime}
        />
        <div className="px-[5%] flex flex-col mt-[10%] h-full overflow-y-scroll scrollbar-hide">
          <Title title={review.title} />
          <Content body={review.body} />
        </div>
        <MemoPadStickerList
          stickers={review.stickerRspDtos}
          setStickerComments={setStickerComments}
          setIsCommentModal={setIsCommentModal}
          selectStickerIdx={selectStickerIdx}
          setSelectStickerIdx={setSelectStickerIdx}
          setSelectStickerId={setSelectStickerId}
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
