import {WebViewMessageEvent} from 'react-native-webview';
import RNCalendarEvents from 'react-native-calendar-events';
import {RefObject} from 'react';

const addSchedule = async (e: WebViewMessageEvent, ref: RefObject<any>) => {
  const nativeEvent = JSON.parse(e.nativeEvent.data);
  if (nativeEvent.type === 'ADD_SCHEDULE') {
    try {
      const saveEvent = await RNCalendarEvents.saveEvent(
        nativeEvent.data.scheduleName,
        {
          calendarId: nativeEvent.data.calendarId,
          startDate: nativeEvent.data.startDate,
          endDate: nativeEvent.data.endDate,
          location: nativeEvent.data.location,
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
};

export default addSchedule;
