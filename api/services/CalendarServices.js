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
    console.log(this._calendar)
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
    console.log(this._calendar, 'pppp')
    // const data = {
    //   auth: this._jwtClient,
    //   calendarId,
    // };
    // return this._calendar.events.list(data);
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
    console.log('result', result);
    return result;
  }

  // eslint-disable-next-line require-jsdoc
  addEvent() {
    console.log(this._calendar.);
    // return this._calendar.events.insert(
    //     {
    //       auth: this._jwtClient,
    //       calendarId: 'seloriojoemarie@gmail.com',
    //       resource: {
    //         summary: 'Sample Event',
    //         description: 'Sample description',
    //         start: {
    //           dateTime: '2017-01-01T00:00:00',
    //           timeZone: 'GMT',
    //         },
    //         end: {
    //           dateTime: '2017-01-01T01:00:00',
    //           timeZone: 'GMT',
    //         },
    //       },
    //     },
    //     function(err, res) {
    //       if (err) {
    //         console.log('Error: ' + err);
    //         return;
    //       }
    //       console.log(res);
    //     }
    // );
  }
}

module.exports = CalendarService;
