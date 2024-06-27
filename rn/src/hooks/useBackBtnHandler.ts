import {RefObject, useEffect, useState} from 'react';
import close from '../utils/appClose';
import {BackHandler} from 'react-native';
import WebView from 'react-native-webview';

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
        if (navState.url === `${CurrentUrl}/home`) {
          close();
        } else if (
          navState.url === `${CurrentUrl}/home/nearby` ||
          navState.url === `${CurrentUrl}/shows`
        ) {
          webViewRef.current?.postMessage(
            JSON.stringify({
              showDetail: false,
            }),
          );
        } else if (
          navState.url === `${CurrentUrl}/shows` ||
          navState.url === `${CurrentUrl}/like` ||
          navState.url === `${CurrentUrl}/profile`
        ) {
          webViewRef.current?.postMessage(
            JSON.stringify({
              navigate: '/home',
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
