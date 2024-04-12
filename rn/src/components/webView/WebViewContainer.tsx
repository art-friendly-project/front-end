import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';
import useBackBtnHandler from '../../hooks/useBackBtnHandler';
import useLocation from '../../hooks/uselocation';

interface navType {
  url: string;
  canGoBack: boolean;
}

const WebViewcontainer = () => {
  const webViewRef = useRef<WebView>(null);
  const setNavState = useBackBtnHandler(businessIp, webViewRef);
  const locationPermit = useLocation(webViewRef);

  return (
    <WebView
      ref={webViewRef}
      source={{uri: businessIp}}
      onNavigationStateChange={(nav: navType) => {
        setNavState({url: nav.url, canGoBack: nav.canGoBack});
      }}
      onMessage={locationPermit}
    />
  );
};

const businessIp = 'http://192.168.0.80:3000';
// const homeIp = 'http://192.168.13.9:3000';
// const publicIp = 'http://192.168.0.30:3000';

export default WebViewcontainer;
