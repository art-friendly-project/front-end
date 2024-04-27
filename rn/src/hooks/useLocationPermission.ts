import {RefObject, useEffect, useRef} from 'react';
import {AppState} from 'react-native';
import {PERMISSIONS, check} from 'react-native-permissions';

const useLocationPermission = (ref: RefObject<any>) => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/background/) && nextAppState === 'active') {
        check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
          if (result === 'granted') {
            ref.current?.postMessage(
              JSON.stringify({
                permissions: {
                  location: 'granted',
                },
              }),
            );
          }
        });
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [ref]);
};

export default useLocationPermission;
