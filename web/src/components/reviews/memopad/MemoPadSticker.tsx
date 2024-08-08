import { type Dispatch, type SetStateAction } from 'react';
import purpleStar from 'assets/images/sticker/purpleStar.svg';
import { useLongPress } from 'use-long-press';
import { useAppDispatch } from 'hooks';
import { isModalActions } from 'store/modules/isModal';
import { stickerImgs } from 'assets/data/stickers';

interface memoPadSticker {
  id: number;
  stickerUserId: number;
  stickerType: string;
  comments: string;
  setStickerComments: Dispatch<SetStateAction<string>>;
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
  idx: number;
  selectStickerIdx: number;
  setSelectStickerIdx: Dispatch<SetStateAction<number>>;
  setSelectStickerId: Dispatch<SetStateAction<number>>;
  myId: number;
}

const MemoPadSticker = ({
  id,
  stickerUserId,
  stickerType,
  comments,
  setStickerComments,
  setIsCommentModal,
  idx,
  selectStickerIdx,
  setSelectStickerIdx,
  setSelectStickerId,
  myId,
}: memoPadSticker) => {
  const dispatch = useAppDispatch();

  const onPressHandler = useLongPress(
    myId === stickerUserId
      ? () => {
          setSelectStickerIdx(idx);
          setSelectStickerId(id);
          dispatch(isModalActions.setIsModal(true));
        }
      : null,
    {
      threshold: 500,
    },
  );

  const btnHandler = () => {
    setIsCommentModal((prev) => !prev);
    setStickerComments(comments);
  };

  const sticker = stickerImgs[stickerType];

  return (
    <button
      className={`relative mr-2 duration-500 shrink-0 ${stickerUserId === myId ? 'active:scale-110' : ''} ${selectStickerIdx === idx ? 'z-30' : ''}`}
      {...onPressHandler()}
      onClick={btnHandler}
    >
      {stickerUserId === myId ? (
        <img
          src={purpleStar}
          className="absolute w-3 h-3 -top-3 left-[1.1rem]"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      ) : null}
      <img src={sticker} className="w-12 h-12" />
    </button>
  );
};

export default MemoPadSticker;
