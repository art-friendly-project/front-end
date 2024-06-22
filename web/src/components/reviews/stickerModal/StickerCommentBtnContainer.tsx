import api from 'api';
import useToastHandler from 'hooks/useToastHandler';
import { type Dispatch, type SetStateAction } from 'react';

interface stickerCommentBtnContainer {
  text: string;
  stickerType: string;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  id: number;
  setReview: Dispatch<SetStateAction<reviewDetail>>;
}

const StickerCommentBtnContainer = ({
  text,
  stickerType,
  setIsModal,
  id,
  setReview,
}: stickerCommentBtnContainer) => {
  const userId = localStorage.getItem('myId');
  const toastHandler = useToastHandler(
    false,
    '스티커를 붙이기를 완료했어요',
    '',
  );

  const StickerAndCommentsBtnHandler = async () => {
    const post = {
      dambyeolagId: id,
      stickerType,
      body: text,
    };

    try {
      await api.post('/stickers', post);
      setIsModal(false);
      setReview((prev) => {
        prev.stickerRspDtos.push({
          id: 0,
          stickerType,
          body: text,
          memberId: Number(userId),
          dambyeolagId: id,
        });
        return prev;
      });
      toastHandler();

      setTimeout(() => {
        location.reload();
      }, 500);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center w-full mt-4">
      <button
        disabled={text.length === 0}
        className={`h-12 text-white rounded-lg text-Subhead w-9/10 ${text.length === 0 ? 'bg-orange-50' : 'bg-orange-100'}`}
        onClick={() => {
          void StickerAndCommentsBtnHandler();
        }}
      >
        스티커 붙이기
      </button>
    </div>
  );
};

export default StickerCommentBtnContainer;
