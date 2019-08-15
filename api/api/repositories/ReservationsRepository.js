require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();
const {map} = require('lodash');
const knex = require('knex')(require('knexfile'));

/**
 * Returns Array list of reservations
 */
async function getReservations() {
  const result = await knex.select().from('rooms');
  return map(result, (data) => {
    return {
      id: data.id,
      dateFrom: data.date_from,
      dateTo: data.date_to,
      roomId: data.room_id,
      organizer: data.organizer,
      attendees: JSON.parse(data.attendees),
      description: data.description,
      summary: data.summary,
      reserved: JSON.parse(data.equipments),
    };
  });
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
  getReservations,
  addNewReservation,
};
