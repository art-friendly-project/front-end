import { useEffect } from 'react';
import { accessPermissionsActions } from 'store/modules/accessPermissions';
import isApp from 'utils/isApp';
import { useAppDispatch } from 'hooks';

const useAccessPermissions = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isApp()) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({ type: 'ACCESS_PERMISSION_CHECK' }),
      );

      const accessPermissions = (e: MessageEvent<string>) => {
        const data: {
          permissions: {
            // location: string;
            calendar: string;
            images: string;
            notifications: string;
          };
          platform: string;
        } = JSON.parse(e.data);

        if (data.permissions !== undefined) {
          dispatch(accessPermissionsActions.current(data.permissions));
        }
      };

      if (window.platform === 'android') {
        document.addEventListener('message', accessPermissions);
      }

      if (window.platform === 'ios') {
        window.addEventListener('message', accessPermissions);
      }

      return () => {
        if (window.platform === 'android') {
          document.removeEventListener('message', accessPermissions);
        }

        if (window.platform === 'ios') {
          window.removeEventListener('message', accessPermissions);
        }
      };
    }
  }, []);
};

export default useAccessPermissions;
