import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { usePostOrDeleteFavorite } from 'hooks/query/usePostOrDeleteFavorite';

interface detailShowFavoriteBtn {
  isLike: boolean;
  id: number;
}

const DetailShowFavoriteBtn = ({ isLike, id }: detailShowFavoriteBtn) => {
  const mutate = usePostOrDeleteFavorite(isLike, id);

  return (
    <button
      onClick={() => {
        mutate();
      }}
    >
      {isLike ? (
        <IoHeart className="w-8 h-8 text-orange-100" />
      ) : (
        <IoHeartOutline className="w-8 h-8 text-white" />
      )}
    </button>
  );
};

export default DetailShowFavoriteBtn;
