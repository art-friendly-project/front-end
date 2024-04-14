import {Dispatch, SetStateAction} from 'react';
import Geolocation from 'react-native-geolocation-service';

const findLocation = (
  setGeoLocation: Dispatch<
    SetStateAction<{latitude: number; longitude: number}>
  >,
) => {
  Geolocation.watchPosition(
    position => {
      const {latitude, longitude} = position.coords;
      setGeoLocation({latitude, longitude});
    },
    err => {
      console.error(err);
    },
    {
      enableHighAccuracy: true,
    },
  );
};

export default findLocation;
