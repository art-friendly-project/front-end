import React, {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import useBackBtnHandler from '../../hooks/useBackBtnHandler';
import findLocation from '../../utils/findLocation';
import locationPermit from '../../utils/locationPermit';
import locationPermitRetry from '../../utils/locationPermitRetry';

interface navType {
  url: string;
  canGoBack: boolean;
}

const WebViewcontainer = () => {
  const webViewRef = useRef<WebView>(null);
  const appState = useRef(AppState.currentState);
  const [geoLocation, setGeoLocation] = useState({latitude: 0, longitude: 0});
  const [geoLocationAccess, setGeoLocatonAccess] = useState(false);
  const [geoLcationReAccess, setGeoLcationReAccess] = useState(false);

  webViewRef.current?.postMessage(JSON.stringify(geoLocation));
  const setNavState = useBackBtnHandler(homeIp, webViewRef);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/background/) && nextAppState === 'active') {
        if (geoLcationReAccess) {
          setGeoLocatonAccess(true);
        }

        if (geoLocationAccess) {
          findLocation(setGeoLocation);
        }
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [geoLocationAccess, geoLcationReAccess]);

  useEffect(() => {
    if (geoLocationAccess) {
      findLocation(setGeoLocation);
    }
  }, [geoLocationAccess]);

  return (
    <WebView
      ref={webViewRef}
      source={{uri: homeIp}}
      mixedContentMode="always"
      onNavigationStateChange={(nav: navType) => {
        setNavState({url: nav.url, canGoBack: nav.canGoBack});
      }}
      onMessage={(e: WebViewMessageEvent) => {
        locationPermit(e, setGeoLocatonAccess);
        locationPermitRetry(e, setGeoLcationReAccess, geoLocationAccess);
      }}
    />
  );
};

// const businessIp = 'http://192.168.0.80:3000';
const homeIp = 'http://192.168.13.9:3000';
// const publicIp = 'http://192.168.0.30:3000';

export default WebViewcontainer;
