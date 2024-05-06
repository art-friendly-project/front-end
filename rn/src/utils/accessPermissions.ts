import {RefObject} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {WebViewMessageEvent} from 'react-native-webview';

const accessPermissions = async (
  e: WebViewMessageEvent,
  ref: RefObject<any>,
) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);

  if (nativeEvent.type === 'ACCESS_PERMISSION') {
    if (Platform.OS === 'android') {
      try {
        const status = await requestMultiple([
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
          PERMISSIONS.ANDROID.WRITE_CALENDAR,
        ]);

        const permissions = {
          location: status[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
          images: status[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES],
          notifications: status[PERMISSIONS.ANDROID.POST_NOTIFICATIONS],
          calendar: status[PERMISSIONS.ANDROID.WRITE_CALENDAR],
        };

        ref.current?.postMessage(JSON.stringify({permissions}));
      } catch (err) {
        console.error(err);
      }
    }
  }
};

export default accessPermissions;