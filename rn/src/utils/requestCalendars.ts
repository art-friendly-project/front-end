import {WebViewMessageEvent} from 'react-native-webview';
import RNCalendarEvents from 'react-native-calendar-events';
import {RefObject} from 'react';

const requestCalendars = async (
  e: WebViewMessageEvent,
  ref: RefObject<any>,
) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);
  if (nativeEvent.type === 'REQUEST_CALENDARS') {
    try {
      await RNCalendarEvents.requestPermissions();

      const calendars = await RNCalendarEvents.findCalendars();
      ref.current?.postMessage(JSON.stringify({calendars}));
    } catch (err) {
      console.error(err);
    }
  }
};

export default requestCalendars;
