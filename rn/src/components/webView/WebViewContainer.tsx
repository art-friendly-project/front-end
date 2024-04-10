import React, {useEffect, useRef, useState} from 'react';
import {WebView} from 'react-native-webview';
import close from '../../utils/appClose';
import {BackHandler} from 'react-native';

interface navType {
  url: string;
  canGoBack: boolean;
}

const WebViewcontainer = () => {
  const webViewRef = useRef<WebView>(null);
  const [navState, setNavState] = useState({
    url: '',
    canGoBack: false,
  });

  useEffect(() => {
    const handleBackButton = () => {
      if (navState.canGoBack) {
        if (navState.url === 'http://192.168.13.9:3000/home') {
          close();
        } else {
          webViewRef.current?.goBack();
        }
      } else {
        close();
      }

      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [navState]);

  return (
    <WebView
      ref={webViewRef}
      source={{uri: homeIp}}
      onNavigationStateChange={(nav: navType) => {
        setNavState({url: nav.url, canGoBack: nav.canGoBack});
      }}
    />
  );
};

// const businessIp = 'http://192.168.0.80:3000';
const homeIp = 'http://192.168.13.9:3000';
// const publicIp = 'http://192.168.0.30:3000';

export default WebViewcontainer;
