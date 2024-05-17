import {WebViewMessageEvent} from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';
import {Dispatch, SetStateAction} from 'react';

const findGeolocation = (
  e: WebViewMessageEvent,
  setGeolocation: Dispatch<
    SetStateAction<{latitude: number; longitude: number}>
  >,
) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);
  if (nativeEvent.type === 'GEOLOCATION') {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;

        setGeolocation({latitude, longitude});
      },
      err => {
        console.error(err);
      },
      {
        enableHighAccuracy: true,
      },
    );
  }
};

export default findGeolocation;
