import React, {useEffect, useRef} from 'react';
// import {AppState} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import useBackBtnHandler from '../../hooks/useBackBtnHandler';
import accessPermissions from '../../utils/accessPermissions';
import useGeolocation from '../../hooks/useGeolocation';

interface navType {
  url: string;
  canGoBack: boolean;
}

const WebViewcontainer = () => {
  const webViewRef = useRef<WebView>(null);
  const setNavState = useBackBtnHandler(currentIp, webViewRef);

  const {findGeolocation, geolocation} = useGeolocation();

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
        findGeolocation(e);
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

// ?
// const currentIp = 'http://192.168.0.30:3000';

export default WebViewcontainer;

// const appState = useRef(AppState.currentState);

// useEffect(() => {
//   const subscription = AppState.addEventListener('change', nextAppState => {
//     if (appState.current.match(/background/) && nextAppState === 'active') {
//       if (geoLcationReAccess) {
//         setGeoLocatonAccess(true);
//       }

//       if (geoLocationAccess) {
//         findLocation(setGeoLocation);
//       }
//     }

//     appState.current = nextAppState;
//   });

//   return () => {
//     subscription.remove();
//   };
// }, [geoLocationAccess, geoLcationReAccess]);
