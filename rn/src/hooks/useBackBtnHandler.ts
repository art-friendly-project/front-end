import {RefObject, useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import WebView from 'react-native-webview';
import close from '../utils/close';

const useBackBtnHandler = (
  CurrentUrl: string,
  webViewRef: RefObject<WebView>,
) => {
  const [navState, setNavState] = useState({
    url: '',
    canGoBack: false,
  });

  useEffect(() => {
    const handleBackButton = () => {
      if (navState.canGoBack) {
        if (
          navState.url === `${CurrentUrl}/like` ||
          navState.url === `${CurrentUrl}/profile`
        ) {
          webViewRef.current?.postMessage(
            JSON.stringify({
              url: '/like || /profile',
            }),
          );
        } else if (navState.url === `${CurrentUrl}/home`) {
          webViewRef.current?.postMessage(
            JSON.stringify({
              url: '/home',
            }),
          );
        } else if (navState.url === `${CurrentUrl}/home/nearby`) {
          webViewRef.current?.postMessage(
            JSON.stringify({
              url: '/home/nearby',
            }),
          );
        } else if (navState.url === `${CurrentUrl}/shows`) {
          webViewRef.current?.postMessage(
            JSON.stringify({
              url: '/shows',
            }),
          );
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
  }, [navState, webViewRef, CurrentUrl]);

  return setNavState;
};

export default useBackBtnHandler;
