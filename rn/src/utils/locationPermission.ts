import {Alert, Linking, Platform} from 'react-native';
import {WebViewMessageEvent} from 'react-native-webview';

const locationPermission = async (e: WebViewMessageEvent) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);
  if (Platform.OS === 'android') {
    if (nativeEvent.type === 'LOCATION_PERMISSION') {
      Alert.alert(
        '위치 액세스 권한이 필요합니다.',
        '권한 허용 후 이용해 주시기 바랍니다.',
        [
          {
            text: '취소',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: '설정으로 이동',
            onPress: () => Linking.openSettings(),
          },
        ],
        {cancelable: false},
      );
    }
  }
};

export default locationPermission;
