import { useEffect, useState } from 'react';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import api from 'api';

interface detailShowFavoriteBtn {
  isLike: boolean;
  id: number;
}

const DetailShowFavoriteBtn = ({ isLike, id }: detailShowFavoriteBtn) => {
  const [isFavorite, setIsFavorite] = useState(false);

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
      }
      setIsFavorite((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={() => {
        void favoriteBtnHandler();
      }}
    >
      {isFavorite ? (
        <IoHeart className="w-8 h-8 text-orange-100" />
      ) : (
        <IoHeartOutline className="w-8 h-8 text-white" />
      )}
    </button>
  );
};

export default DetailShowFavoriteBtn;
