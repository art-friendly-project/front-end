import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { toastActions } from 'store/modules/toast';

const useToastHandler = (isFavorite: boolean) => {
  const [isNotTimeout, setIsNotTimeout] = useState(true);
  const dispatch = useAppDispatch();

  const toastHandler = () => {
    dispatch(toastActions.active(true));
    dispatch(toastActions.isCheckOrCancel(isFavorite));

    if (isNotTimeout) {
      setTimeout(() => {
        dispatch(toastActions.active(false));
        setIsNotTimeout(true);
      }, 2000);
    }

    setIsNotTimeout(false);
  };

  return toastHandler;
};

export default useToastHandler;
