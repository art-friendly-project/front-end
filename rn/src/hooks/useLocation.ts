import {RefObject, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';

const useLocation = (Ref: RefObject<WebView>) => {
  const [location, setLocation] = useState({latitude: 0, longitude: 0});

  const locationPermit = async (e: WebViewMessageEvent) => {
    const nativeEvent = JSON.parse(e.nativeEvent.data);
    if (Platform.OS === 'android') {
      if (nativeEvent.type === 'LOCATION_PERMISSION') {
        try {
          const garanted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );

          if (garanted === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.watchPosition(
              position => {
                const {latitude, longitude} = position.coords;
                setLocation({latitude, longitude});
              },
              error => {
                console.error(error);
              },
              {
                enableHighAccuracy: true,
              },
            );
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
  };

  Ref.current?.postMessage(JSON.stringify(location));

  return locationPermit;
};

export default useLocation;
