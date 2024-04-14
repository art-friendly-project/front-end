import {Dispatch, SetStateAction} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {WebViewMessageEvent} from 'react-native-webview';

const locationPermit = async (
  e: WebViewMessageEvent,
  setGeoLocatonAccess: Dispatch<SetStateAction<boolean>>,
) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);

  if (nativeEvent.type === 'LOCATION_PERMISSION') {
    if (Platform.OS === 'android') {
      try {
        const garanted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (garanted === PermissionsAndroid.RESULTS.GRANTED) {
          setGeoLocatonAccess(true);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
};

export default locationPermit;
