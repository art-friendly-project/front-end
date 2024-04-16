import { useEffect, useState } from 'react';
import isApp from 'utils/isApp';

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [geolocationAccess, setGeolocationAccess] = useState(false);

  useEffect(() => {
    if (isApp()) {
      const location = (e: MessageEvent<string>) => {
        const data: { latitude: number; longitude: number } = JSON.parse(
          e.data,
        );

        if (data.latitude !== 0 && data.longitude !== 0) {
          setGeolocation(data);
          setGeolocationAccess(true);
        }
      };

      document.addEventListener('message', location);

      return () => {
        document.removeEventListener('message', location);
      };
    }

    if (!isApp()) {
      const handleSuccess = (pos: GeolocationPosition) => {
        const { latitude, longitude } = pos.coords;

        setGeolocation({
          latitude,
          longitude,
        });
        setGeolocationAccess(true);
      };

      const handleError = (err: GeolocationPositionError) => {
        console.error(err);
      };

      const { geolocation } = navigator;

      if (geolocation === undefined) {
        return;
      }

      geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, []);

  return { geolocation, geolocationAccess };
};

export default useGeolocation;