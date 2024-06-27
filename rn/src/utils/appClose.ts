import {WebViewMessageEvent} from 'react-native-webview';
import close from './close';

const appClose = async (e: WebViewMessageEvent) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);
  if (nativeEvent.type === 'APP_CLOSE') {
    close();
  }
};

export default appClose;
