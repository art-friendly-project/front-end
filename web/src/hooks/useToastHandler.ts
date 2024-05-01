import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { toastActions } from 'store/modules/toast';
import { toastTextActions } from 'store/modules/toastText';

const useToastHandler = (
  isFavorite: boolean,
  CheckText: string,
  CancelText: string,
) => {
  const [isNotTimeout, setIsNotTimeout] = useState(true);
  const dispatch = useAppDispatch();

  const toastHandler = () => {
    dispatch(toastActions.active(true));
    dispatch(toastActions.isCheckOrCancel(isFavorite));
    dispatch(toastTextActions.current([CheckText, CancelText]));

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
