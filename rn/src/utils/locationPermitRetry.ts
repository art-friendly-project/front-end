import {Dispatch, SetStateAction} from 'react';
import {Alert, Linking, Platform} from 'react-native';
import {WebViewMessageEvent} from 'react-native-webview';

const locationPermitRetry = async (
  e: WebViewMessageEvent,
  setGeoLcationReAccess: Dispatch<SetStateAction<boolean>>,
  geoLocationAccess: boolean,
) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);
  if (Platform.OS === 'android') {
    if (nativeEvent.type === 'LOCATION_PERMISSION_RETRY') {
      if (geoLocationAccess) {
        Alert.alert(
          '위치 정보를 가져오는 중입니다.',
          '잠시 후 다시 시도해 주세요',
        );
        return;
      }

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
            onPress: () =>
              Linking.openSettings().then(() => setGeoLcationReAccess(true)),
          },
        ],
        {cancelable: false},
      );
    }
  }
};

export default locationPermitRetry;
