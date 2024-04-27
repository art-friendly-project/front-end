import {Platform} from 'react-native';
import {WebViewMessageEvent} from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';
import {useState} from 'react';

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState({latitude: 0, longitude: 0});

  const findGeolocation = (e: WebViewMessageEvent) => {
    const nativeEvent = JSON.parse(e.nativeEvent.data);

    if (nativeEvent.type === 'GEOLOCATION') {
      if (Platform.OS === 'android') {
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
    }
  };

  return {findGeolocation, geolocation};
};

export default useGeolocation;
