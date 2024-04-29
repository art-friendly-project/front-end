import {Platform} from 'react-native';
import {WebViewMessageEvent} from 'react-native-webview';
import RNCalendarEvents from 'react-native-calendar-events';
import {RefObject} from 'react';

const requestCalendars = async (
  e: WebViewMessageEvent,
  ref: RefObject<any>,
) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);
  if (nativeEvent.type === 'REQUEST_CALENDARS') {
    if (Platform.OS === 'android') {
      try {
        await RNCalendarEvents.requestPermissions();
        const calendars = await RNCalendarEvents.findCalendars();
        ref.current?.postMessage(JSON.stringify({calendars}));
      } catch (err) {
        console.error(err);
      }
      // RNCalendarEvents.checkPermissions().then(res => console.log(res));
      // RNCalendarEvents.requestPermissions()
      //
      // RNCalendarEvents.findCalendars().then(res => console.log(res));
      //
      // const today = new Date();
      // RNCalendarEvents.saveEvent('Test Event', {
      //   calendarId: '6',
      //   startDate: String(today.toISOString()),
      //   endDate: String(today.toISOString()),
      // })
      //   .then(id => {
      //     console.log('Event ID:', id);
      //   })
      //   .catch(error => {
      //     console.error('Error saving event:', error);
      //   });
    }
  }
};

export default requestCalendars;
