import {RefObject, useEffect, useRef} from 'react';
import {AppState, Platform} from 'react-native';

const useCancelTerms = (ref: RefObject<any>) => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/active/) && nextAppState === 'background') {
        if (Platform.OS === 'android') {
          ref.current?.postMessage(
            JSON.stringify({
              type: 'CANCEL_TERMS',
            }),
          );
        }

        if (Platform.OS === 'ios') {
        }
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [ref]);
};

export default useCancelTerms;
