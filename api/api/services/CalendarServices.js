require('app-module-path').addPath(require('app-root-path').toString());

const {google} = require('googleapis');
const privateKey = require('privateKey.json');

/**
 * Google calender API service
 */
class CalendarService {
  /**
   * @constructor
   */
  constructor() {
    this._jwtClient = new google.auth.JWT(
        privateKey.client_email,
        null,
        privateKey.private_key,
        [
          'https://www.googleapis.com/auth/calendar',
          'https://www.googleapis.com/auth/calendar.events',
        ]
    );

    this._calendar = google.calendar('v3');
  }

  /**
   * Authenticate request
   */
  authenticate() {
    this._jwtClient.authorize(function(err, tokens) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('Successfully connected!');
      }
    });
  }

  /**
   * Retrieve event list in the calendar
   * @param {String} calendarId - Unique identifier of the Google Calendar
   */
  async eventList(calendarId) {
    const data = {
      auth: this._jwtClient,
      calendarId,
    };
    const result = await this._calendar.events.list(data);
    console.log('result', result.data.items);
    return result;
  }

  /**
   * Adds new event in the calendar
   * @param {String} calendarId - Unique identifier of User's calendar
   */
  async calendarList(calendarId) {
    const result = await this._calendar.calendarList.get({
      auth: this._jwtClient,
      calendarId,
    });
    console.log('result', result.data.items);
    return result;
  }

  // eslint-disable-next-line require-jsdoc
  async addEvent(
      calendarId,
      summary,
      description,
      attendees,
      location,
      maxAttendees,
      startDate,
      endDate,
      sendNotification = false
  ) {
    const result = await this._calendar.events.insert({
      auth: this._jwtClient,
      calendarId,
      resource: {
        summary: summary,
        description: description,
        location: location,
        start: {
          dateTime: startDate,
          timeZone: 'GMT',
        },
        end: {
          dateTime: endDate,
          timeZone: 'GMT',
        },
        attendees: attendees,
        reminders: {
          useDefault: false,
          overrides: [
            {method: 'email', minutes: 24 * 60},
            {method: 'popup', minutes: 10},
          ],
        },
        sendNotifications: true,
        maxAttendees,
      },
    });
    return result;
  }
}

module.exports = CalendarService;
