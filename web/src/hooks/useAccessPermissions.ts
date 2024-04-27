import { useEffect } from 'react';
import { accessPermissionsActions } from 'store/modules/accessPermissions';
import isApp from 'utils/isApp';
import { useAppDispatch } from 'hooks';

const useAccessPermissions = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isApp()) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({ type: 'ACCESS_PERMISSION' }),
      );

      const accessPermissions = (e: MessageEvent<string>) => {
        const data: {
          permissions: {
            location: string;
            calendar: string;
            images: string;
            notifications: string;
          };
        } = JSON.parse(e.data);

        if (data.permissions !== undefined) {
          dispatch(accessPermissionsActions.current(data.permissions));
        }
      };

      document.addEventListener('message', accessPermissions);

      return () => {
        document.removeEventListener('message', accessPermissions);
      };
    }
  }, []);
};

export default useAccessPermissions;
