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
    if (isApp()) {
      if (isNearby) {
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

        document.addEventListener('message', geolocation);

        return () => {
          document.removeEventListener('message', geolocation);
        };
      }
    }
  }, [isNearby]);

  return geolocation;
};

export default useGeolocation;
