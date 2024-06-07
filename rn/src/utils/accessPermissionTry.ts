import {Alert, Linking} from 'react-native';
import {WebViewMessageEvent} from 'react-native-webview';

const accessPermissionTry = async (e: WebViewMessageEvent) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);
  const type = nativeEvent.type;

  const permissions: {[key: string]: string} = {
    LOCATION_PERMISSION: '위치 액세스 권한이 필요합니다.',
    CALENDAR_PERMISSON: '캘린더 액세스 권한이 필요합니다.',
  };

  if (permissions[type] !== undefined) {
    Alert.alert(
      permissions[type],
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
};

export default accessPermissionTry;
