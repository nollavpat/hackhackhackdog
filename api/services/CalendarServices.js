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
      calendarId: 'jairus@ubx.ph',
    });
    console.log('result', result.data.items);
    return result;
  }

  /**
   *
   * @param {Object} eventDetails - Required eventDetails
   * @param {String} eventDetails.calendarId - Unique
   *  identifier of User's calendar
   * @param {String} eventDetails.summary - Summary of the event
   * @param {String} eventDetails.description - Description of the event
   * @param {dateTime} eventDetails.startDate - Start date and time of the event
   * @param {dateTime} eventDetails.endDate - End date and time of the event
   * @param {boolean} sendNotification - Sends notification to the attendees
   */
  async addEvent(eventDetails, sendNotification = false) {
    const {
      calendarId,
      summary,
      description,
      attendees,
      location,
      maxAttendees,
      startDate,
      endDate,
    } = eventDetails;
    const result = await this._calendar.events.insert({
      auth: this._jwtClient,
      calendarId,
      sendNotification: true,
      attendees: [attendees],
      location,
      maxAttendees,
      resource: {
        summary,
        description,
        start: {
          dateTime: startDate,
          timeZone: 'GMT',
        },
        end: {
          dateTime: endDate,
          timeZone: 'GMT',
        },
      },
    });
    console.log('result', result);
  }
}

module.exports = CalendarService;
