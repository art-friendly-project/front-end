import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { toastActions } from 'store/modules/toast';

interface detailShowFavoriteBtn {
  favorite: boolean;
}

const DetailShowFavoriteBtn = ({ favorite }: detailShowFavoriteBtn) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsFavorite(favorite);
  }, []);

  const favoriteBtnHandler = () => {
    setIsFavorite((prev) => !prev);
    dispatch(toastActions.isCheckOrCancel(isFavorite));
    dispatch(toastActions.active(true));

    setTimeout(() => {
      dispatch(toastActions.active(false));
    }, 2000);
  };

  return (
    <button onClick={favoriteBtnHandler}>
      {isFavorite ? (
        <IoHeart className="w-8 h-8 text-orange-100" />
      ) : (
        <IoHeartOutline className="w-8 h-8 text-white" />
      )}
    </button>
  );
};

export default DetailShowFavoriteBtn;
