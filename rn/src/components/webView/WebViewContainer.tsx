import React, {useRef} from 'react';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import useBackBtnHandler from '../../hooks/useBackBtnHandler';
import accessPermissions from '../../utils/accessPermissions';
import accessPermissionTry from '../../utils/accessPermissionTry';
import useAccessPermissions from '../../hooks/useAccessPermissions';
import requestCalendars from '../../utils/requestCalendars';
import addSchedule from '../../utils/addSchedule';
import accessPermissionsCheck from '../../utils/accessPermissionsCheck';
import {Platform} from 'react-native';

interface navType {
  url: string;
  canGoBack: boolean;
}

const WebViewcontainer = () => {
  // const [geolocation, setGeolocation] = useState({latitude: 0, longitude: 0});

  const platform = Platform.OS === 'android' ? 'android' : 'ios';
  const injectedJS = `window.platform = '${platform}'; true;`;

  const webViewRef = useRef<WebView>(null);
  const setNavState = useBackBtnHandler(
    'https://front-end-seven-eta.vercel.app',
    webViewRef,
  );

  useAccessPermissions(webViewRef);

  // useEffect(() => {
  //   webViewRef.current?.postMessage(JSON.stringify({geolocation}));
  // }, [geolocation]);

  return (
    <WebView
      ref={webViewRef}
      source={{uri: 'https://front-end-seven-eta.vercel.app'}}
      mixedContentMode="always"
      onNavigationStateChange={(nav: navType) => {
        setNavState({url: nav.url, canGoBack: nav.canGoBack});
      }}
      injectedJavaScript={injectedJS}
      onMessage={(e: WebViewMessageEvent) => {
        accessPermissions(e, webViewRef);
        accessPermissionsCheck(e, webViewRef);
        // findGeolocation(e, setGeolocation);
        accessPermissionTry(e);
        requestCalendars(e, webViewRef);
        addSchedule(e, webViewRef);
      }}
    />
  );
};

export default WebViewcontainer;
