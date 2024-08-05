import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import useToastHandler from 'hooks/useToastHandler';
import api from 'api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface favoriteBtn {
  isLike: boolean;
  id: number;
}

const FavoriteBtn = ({ isLike, id }: favoriteBtn) => {
  const queryClient = useQueryClient();

  const toastHandler = useToastHandler(
    isLike,
    '관심 목록에 추가했어요',
    '관심 목록에서 취소했어요',
  );

  const postOrDeleteFavorite = async () => {
    if (!isLike) {
      await api.post(`/exhibitions/likes?exhibitionId=${id}`);
    }

    if (isLike) {
      await api.delete(`/exhibitions/likes?exhibitionId=${id}`);
    }
  };

  const { mutate } = useMutation({
    mutationFn: postOrDeleteFavorite,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['shows'] });
    },
  });

  return (
    <>
      <button
        className="absolute right-0 flex items-center justify-center rounded-lg top-1 active:bg-gray-00 w-7 h-7"
        onClick={() => {
          mutate();
          toastHandler();
        }}
      >
        {isLike ? (
          <IoHeart className="w-6 h-6 text-orange-100" />
        ) : (
          <IoHeartOutline className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default FavoriteBtn;
