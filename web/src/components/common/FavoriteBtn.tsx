import { useAppDispatch } from 'hooks';
import { useEffect, useState } from 'react';

import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { toastActions } from 'store/modules/toast';

interface favoriteBtn {
  favorite: boolean;
}

const FavoriteBtn = ({ favorite }: favoriteBtn) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isNotTimeout, setIsNotTimeout] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite]);

  const favoriteBtnHandler = () => {
    if (isNotTimeout) {
      setTimeout(() => {
        dispatch(toastActions.active(false));
        setIsNotTimeout(true);
      }, 2000);
    }

    setIsFavorite((prev) => !prev);
    dispatch(toastActions.isFavorite(isFavorite));
    dispatch(toastActions.active(true));
    setIsNotTimeout(false);
  };

  return (
    <>
      <button className="absolute right-6 top-2" onClick={favoriteBtnHandler}>
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
