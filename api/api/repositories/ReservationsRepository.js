require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();
const {map} = require('lodash');
const knex = require('knex')(require('knexfile'));

/**
 * Returns Array list of reservations
 */
async function getReservationList() {
  return await knex
      .select(
          'id',
          'room_id as roomId',
          'date_from as dateFrom',
          'date_to as dateTo',
          'organizer',
          'attendees',
          'description',
          'summary'
      )
      .from('reservations');
}
/**
 * @param {integer} roomId - ID of the the selected room
 * @param {String} dateFrom - Start date and time
 * @param {String} dateTo  - End date and time
 * @param {String} organizer  - Orginizer
 * @param {Array} attendees  - Array of emails of attendees
 * @param {String} description - Description of the event
 * @param {String} summary - Summary of the event
 */
async function addNewReservation(
    roomId,
    dateFrom,
    dateTo,
    organizer,
    attendees,
    description,
    summary
) {
  const newReservations = {
    room_id: roomId,
    date_from: dateFrom,
    date_to: dateTo,
    organizer,
    attendees,
    description,
    summary,
  };
  return await knex('reservations').insert(newReservations);
}

module.exports = {
  getReservationList,
  addNewReservation,
};
