import { useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import { selectIsNearby } from 'store/modules/isNearby';
import isApp from 'utils/isApp';

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState({
    longitude: 0,
    latitude: 0,
  });
  const isNearby = useAppSelector(selectIsNearby);

  useEffect(() => {
    if (isNearby) {
      if (isApp()) {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: 'GEOLOCATION' }),
        );

        const geolocation = (e: MessageEvent<string>) => {
          const data: {
            geolocation: {
              longitude: number;
              latitude: number;
            };
          } = JSON.parse(e.data);

          if (data.geolocation !== undefined) {
            setGeolocation(data.geolocation);
          }
        };

        if (window.platform === 'android') {
          document.addEventListener('message', geolocation);
        }

        if (window.platform === 'ios') {
          window.addEventListener('message', geolocation);
        }

        return () => {
          if (window.platform === 'android') {
            document.removeEventListener('message', geolocation);
          }
          if (window.platform === 'ios') {
            window.removeEventListener('message', geolocation);
          }
        };
      }
    }
  }, [isNearby]);

  return geolocation;
};

export default useGeolocation;
