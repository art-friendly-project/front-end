import { useEffect, useState } from 'react';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import useToastHandler from 'hooks/useToastHandler';
import api from 'api';

interface favoriteBtn {
  isLike: boolean;
  id: number;
  fn?: () => void;
}

const FavoriteBtn = ({ isLike, id, fn }: favoriteBtn) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toastHandler = useToastHandler(
    isFavorite,
    '관심 목록에 추가했어요',
    '관심 목록에서 취소했어요',
  );

  useEffect(() => {
    setIsFavorite(isLike);
  }, [isLike]);

  const favoriteBtnHandler = async () => {
    try {
      if (!isFavorite) {
        await api.post(`/exhibitions/likes?exhibitionId=${id}`);
      }

      if (isFavorite) {
        await api.delete(`/exhibitions/likes?exhibitionId=${id}`);
        if (fn !== undefined) fn();
      }
      setIsFavorite((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button
        className="absolute right-0 flex items-center justify-center rounded-lg top-1 active:bg-gray-00 w-7 h-7"
        onClick={() => {
          void favoriteBtnHandler();
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
