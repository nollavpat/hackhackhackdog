require('app-module-path').addPath(require('app-root-path').toString());
const {
  addNewReservation,
} = require('api/repositories/ReservationsRepository');
const {calendarService} = require('api/utilities/CalendarServiceUtil.js');

const HttpSuccess = require('api/responses/HttpSuccess.js');
/**
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 * @param {Object} next - Next function to be called
 */
async function PostReservations(req, res, next) {
  const {
    roomId,
    dateFrom,
    dateTo,
    organizer,
    attendees,
    description,
    summary,
  } = req.body;

  try {
    // ADDING EVENT TO GOOGLE CALENDAR
    await calendarService.addEvent(
        organizer,
        summary,
        description,
        attendees,
        10,
        dateFrom,
        dateTo,
        true,
    );

    // SAVING TO DATABASE
    await addNewReservation(
        roomId,
        dateFrom,
        dateTo,
        organizer,
        JSON.stringify(attendees),
        description,
        summary
    );
  } catch (reservationError) {
    console.log(reservationError.message);
  }
  res.locals.respObj = new HttpSuccess(200, `Successfully Reserved a room`);
  return next();
}

module.exports = {PostReservations};
