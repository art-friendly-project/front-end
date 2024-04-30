import { useAppDispatch } from 'hooks';
import useToastHandler from 'hooks/useToastHandler';
import { type Dispatch, type SetStateAction } from 'react';
import { toastTextActions } from 'store/modules/toastText';

interface stickerCommentBtnContainer {
  text: string;
  sticker: string;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setReview: Dispatch<SetStateAction<review>>;
}

const StickerCommentBtnContainer = ({
  text,
  sticker,
  setIsModal,
  setReview,
}: stickerCommentBtnContainer) => {
  const toastHandler = useToastHandler(false);
  const userId = Number(sessionStorage.getItem('userId'));

  const dispatch = useAppDispatch();

  const StickerAndCommentsBtnHandler = () => {
    setReview((prev) => {
      prev.stickers.push({
        id: prev.stickers.length + 1,
        sticker,
        userId,
        comments: text,
      });

      return prev;
    });

    setIsModal(false);
    dispatch(toastTextActions.current(['스티커를 붙이기를 완료했어요', '']));
  };
  return (
    <div className="flex justify-center w-full mt-4">
      <button
        disabled={text.length === 0}
        className={`h-12 text-white rounded-lg text-Subhead w-9/10 ${text.length === 0 ? 'bg-orange-50' : 'bg-orange-100'}`}
        onClick={() => {
          StickerAndCommentsBtnHandler();
          toastHandler();
        }}
      >
        스티커 붙이기
      </button>
    </div>
  );
};

export default StickerCommentBtnContainer;
