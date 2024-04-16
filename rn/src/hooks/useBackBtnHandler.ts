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