import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import api from 'api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface detailShowFavoriteBtn {
  isLike: boolean;
  id: number;
}

const DetailShowFavoriteBtn = ({ isLike, id }: detailShowFavoriteBtn) => {
  const queryClient = useQueryClient();

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
      await queryClient.invalidateQueries({ queryKey: ['show', 'detail'] });
      await queryClient.invalidateQueries({ queryKey: ['shows'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const favoriteBtnHandler = async () => {
    mutate();
  };

  return (
    <button
      onClick={() => {
        void favoriteBtnHandler();
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
