import {RefObject} from 'react';
import {Platform} from 'react-native';
import {
  PERMISSIONS,
  checkMultiple,
  checkNotifications,
} from 'react-native-permissions';
import {WebViewMessageEvent} from 'react-native-webview';

const accessPermissionsCheck = async (
  e: WebViewMessageEvent,
  ref: RefObject<any>,
) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);

  if (nativeEvent.type === 'ACCESS_PERMISSION_CHECK') {
    if (Platform.OS === 'android') {
      try {
        const status = await checkMultiple([
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
          PERMISSIONS.ANDROID.WRITE_CALENDAR,
        ]);

        const permissions = {
          images: status[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES],
          notifications: status[PERMISSIONS.ANDROID.POST_NOTIFICATIONS],
          calendar: status[PERMISSIONS.ANDROID.WRITE_CALENDAR],
        };

        ref.current?.postMessage(JSON.stringify({permissions}));
      } catch (err) {
        console.error(err);
      }
    }

    if (Platform.OS === 'ios') {
      try {
        const status = await checkMultiple([
          PERMISSIONS.IOS.PHOTO_LIBRARY,
          PERMISSIONS.IOS.CALENDARS,
        ]);

        const notifications = await checkNotifications();

        const permissions = {
          images: status[PERMISSIONS.IOS.PHOTO_LIBRARY],
          notifications,
          calendar: status[PERMISSIONS.IOS.CALENDARS],
        };

        ref.current?.postMessage(JSON.stringify({permissions}));
      } catch (err) {
        console.error(err);
      }
    }
  }
};

export default accessPermissionsCheck;
