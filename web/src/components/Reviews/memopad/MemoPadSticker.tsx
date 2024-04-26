import { type Dispatch, type SetStateAction } from 'react';
import purpleStar from 'assets/images/sticker/purpleStar.svg';
import { useLongPress } from 'use-long-press';
import { useAppDispatch } from 'hooks';
import { isModalActions } from 'store/modules/isModal';

interface memoPadSticker {
  stickerUserId: number;
  sticker: string;
  comments: string;
  setStickerComments: Dispatch<SetStateAction<string>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
  idx: number;
  setSelectStickerIdx: Dispatch<SetStateAction<number>>;
  userId: number;
}

const MemoPadSticker = ({
  stickerUserId,
  sticker,
  comments,
  setStickerComments,
  setIsCommentModal,
  idx,
  setSelectStickerIdx,
  userId,
}: memoPadSticker) => {
  const dispatch = useAppDispatch();

  const btnHandler = () => {
    setStickerComments(comments);
    setIsCommentModal((prev) => !prev);
  };

  const onPressHandler = useLongPress(
    userId === stickerUserId
      ? () => {
          setSelectStickerIdx(idx);
          dispatch(isModalActions.setIsModal(true));
        }
      : null,
    {
      threshold: 500,
    },
  );

  return (
    <button
      className={`relative mr-2 duration-500 shrink-0 ${stickerUserId === userId ? 'active:scale-110' : ''} `}
      {...onPressHandler()}
      onClick={btnHandler}
    >
      {stickerUserId === userId ? (
        <img
          src={purpleStar}
          className="absolute w-4 h-4 -top-4 left-[1.3rem]"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      ) : null}
      <img src={sticker} className="w-14 h-14" />
    </button>
  );
};

export default MemoPadSticker;
