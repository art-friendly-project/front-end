import {RefObject, useEffect, useRef} from 'react';
import {AppState, Platform} from 'react-native';
import {PERMISSIONS, check} from 'react-native-permissions';

const useAccessPermissions = (ref: RefObject<any>) => {
  const appState = useRef(AppState.currentState);
  const GRANTED = 'granted';
  const BLOCKED = 'blocked';

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/background/) && nextAppState === 'active') {
        if (Platform.OS === 'android') {
          check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
            if (result === GRANTED) {
              ref.current?.postMessage(
                JSON.stringify({
                  permissions: {
                    location: GRANTED,
                  },
                }),
              );
            }

            if (result === BLOCKED) {
              ref.current?.postMessage(
                JSON.stringify({
                  permissions: {
                    location: BLOCKED,
                  },
                }),
              );
            }
          });

          check(PERMISSIONS.ANDROID.WRITE_CALENDAR).then(result => {
            if (result === GRANTED) {
              ref.current?.postMessage(
                JSON.stringify({
                  permissions: {
                    calendar: GRANTED,
                  },
                }),
              );
            }

            if (result === BLOCKED) {
              ref.current?.postMessage(
                JSON.stringify({
                  permissions: {
                    calendar: BLOCKED,
                  },
                }),
              );
            }
          });
        }

        if (Platform.OS === 'ios') {
          check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
            if (result === GRANTED) {
              ref.current?.postMessage(
                JSON.stringify({
                  permissions: {
                    location: GRANTED,
                  },
                }),
              );
            }

            if (result === BLOCKED) {
              ref.current?.postMessage(
                JSON.stringify({
                  permissions: {
                    location: BLOCKED,
                  },
                }),
              );
            }
          });

          check(PERMISSIONS.IOS.CALENDARS).then(result => {
            if (result === GRANTED) {
              ref.current?.postMessage(
                JSON.stringify({
                  permissions: {
                    calendar: GRANTED,
                  },
                }),
              );
            }

            if (result === BLOCKED) {
              ref.current?.postMessage(
                JSON.stringify({
                  permissions: {
                    calendar: BLOCKED,
                  },
                }),
              );
            }
          });
        }
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [ref]);
};

export default useAccessPermissions;
