require('app-module-path').addPath(require('app-root-path').toString());

const CalendarService = require('api/services/CalendarServices.js');
const calendarService = new CalendarService();

/**
 * Initialize google api
 */
async function authenticate() {
  try {
    await calendarService.authenticate();
  } catch (error) {
    console.log('Error in initializing google service');
  }
}

module.exports = {
  authenticate,
  calendarService,
};


