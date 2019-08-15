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
        ['https://www.googleapis.com/auth/calendar']
    );
    this.calender = google.calendar('v3');
  }

  /**
   * Authenticate request
   */
  authorize() {
    this._jwtClient.authorize(function(err, tokens) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('Successfully connected!');
      }
    });
  }
}

module.exports = CalendarService;
