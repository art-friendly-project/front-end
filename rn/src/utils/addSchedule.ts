import {Platform} from 'react-native';
import {WebViewMessageEvent} from 'react-native-webview';
import RNCalendarEvents from 'react-native-calendar-events';
import {RefObject} from 'react';

const addSchedule = async (e: WebViewMessageEvent, ref: RefObject<any>) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);
  if (nativeEvent.type === 'ADD_SCHEDULE') {
    if (Platform.OS === 'android') {
      try {
        const saveEvent = await RNCalendarEvents.saveEvent(
          nativeEvent.data.scheduleName,
          {
            calendarId: nativeEvent.data.calendarId,
            startDate: nativeEvent.data.deadlineDay,
            endDate: nativeEvent.data.deadlineDay,
            location: nativeEvent.data.location,
            allDay: true,
          },
        );

        ref.current?.postMessage(
          JSON.stringify({
            schedule: {
              fulfilled: true,
              eventId: saveEvent,
            },
          }),
        );
      } catch (err) {
        console.error(err);
      }
    }
  }
};

export default addSchedule;
