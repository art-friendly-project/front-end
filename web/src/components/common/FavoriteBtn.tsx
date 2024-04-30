import { useEffect, useState } from 'react';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import useToastHandler from 'hooks/useToastHandler';
import { useAppDispatch } from 'hooks';
import { toastTextActions } from 'store/modules/toastText';

interface favoriteBtn {
  favorite: boolean;
}

const FavoriteBtn = ({ favorite }: favoriteBtn) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toastHandler = useToastHandler(isFavorite);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite]);

  const favoriteBtnHandler = () => {
    setIsFavorite((prev) => !prev);
    dispatch(
      toastTextActions.current([
        '좋아요 목록에 추가했어요',
        '좋아요 목록에서 취소했어요',
      ]),
    );
  };

  return (
    <>
      <button
        className="absolute right-0 top-2"
        onClick={() => {
          favoriteBtnHandler();
          toastHandler();
        }}
      >
        {isFavorite ? (
          <IoHeart className="w-6 h-6 text-orange-100" />
        ) : (
          <IoHeartOutline className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default FavoriteBtn;
