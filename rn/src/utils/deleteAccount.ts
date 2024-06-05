import {Alert} from 'react-native';
import {WebViewMessageEvent} from 'react-native-webview';

const deleteAccount = async (e: WebViewMessageEvent) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);

  if (nativeEvent.type === 'DELETE_ACCOUNT') {
    Alert.alert('탈퇴한 사용자 입니다.');
  }
};

export default deleteAccount;
