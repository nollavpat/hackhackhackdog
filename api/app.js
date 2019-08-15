require('app-module-path').addPath(require('app-root-path').toString());

const CalendarService = require('services/CalendarServices.js');


const calendarService = new CalendarService();

calendarService.authorize();
