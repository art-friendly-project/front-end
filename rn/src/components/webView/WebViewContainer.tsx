import React, {useEffect, useRef, useState} from 'react';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import useBackBtnHandler from '../../hooks/useBackBtnHandler';
import accessPermissions from '../../utils/accessPermissions';
import findGeolocation from '../../utils/findGeolocation';
import accessPermissionTry from '../../utils/accessPermissionTry';
import useAccessPermission from '../../hooks/useAccessPermission';
import requestCalendars from '../../utils/requestCalendars';
import addSchedule from '../../utils/addSchedule';
import accessPermissionsCheck from '../../utils/accessPermissionsCheck';

interface navType {
  url: string;
  canGoBack: boolean;
}

const WebViewcontainer = () => {
  const [geolocation, setGeolocation] = useState({latitude: 0, longitude: 0});

  const webViewRef = useRef<WebView>(null);
  const setNavState = useBackBtnHandler(currentIp, webViewRef);

  useAccessPermission(webViewRef);

  useEffect(() => {
    webViewRef.current?.postMessage(JSON.stringify({geolocation}));
  }, [geolocation]);

  return (
    <WebView
      ref={webViewRef}
      source={{uri: currentIp}}
      mixedContentMode="always"
      onNavigationStateChange={(nav: navType) => {
        setNavState({url: nav.url, canGoBack: nav.canGoBack});
      }}
      onMessage={(e: WebViewMessageEvent) => {
        accessPermissions(e, webViewRef);
        accessPermissionsCheck(e, webViewRef);
        findGeolocation(e, setGeolocation);
        accessPermissionTry(e);
        requestCalendars(e, webViewRef);
        addSchedule(e, webViewRef);
      }}
    />
  );
};
// home
const currentIp = 'http://192.168.13.9:3000';

// business
// const currentIp = 'http://192.168.0.80:3000';

// twosome
// const currentIp = 'http://192.168.0.15:3000';

export default WebViewcontainer;
