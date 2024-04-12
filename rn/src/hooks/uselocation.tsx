import {RefObject} from 'react';
import {Linking, PermissionsAndroid, Platform} from 'react-native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';
import {Alert} from 'react-native';

const useLocation = (webViewRef: RefObject<WebView>) => {
  const locationPermit = async (e: WebViewMessageEvent) => {
    const nativeEvent = JSON.parse(e.nativeEvent.data);
    if (Platform.OS === 'android') {
      if (nativeEvent.type === 'LOCATION_PERMISSION_REQUEST') {
        try {
          const garanted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );

          if (garanted === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.watchPosition(
              position => {
                const {latitude, longitude} = position.coords;
                webViewRef.current?.postMessage(
                  JSON.stringify({latitude, longitude}),
                );
              },
              error => {
                console.error(error);
              },
              {
                enableHighAccuracy: true,
              },
            );
          } else {
            Alert.alert(
              '위치 서비스 권한이 필요합니다',
              '앱에서 위치 서비스를 사용하려면 권한을 허용해야합니다.',
              [
                {
                  text: '취소',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: '설정으로 이동', onPress: () => Linking.openSettings()},
              ],
              {cancelable: false},
            );
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
  };

  return locationPermit;
};

export default useLocation;
