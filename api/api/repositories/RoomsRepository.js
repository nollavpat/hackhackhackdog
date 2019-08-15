require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();
const TAG = '[RoomsRepository]';
const {map} = require('lodash');
const knex = require('knex')(require('knexfile'));

/**
 * Returns Array list of rooms
 */
async function getRoomList() {
  const METHOD = '[getRoomList]';
  console.log(`${TAG} ${METHOD}`);

  const result = await knex
      .select()
      .from('rooms');
  return map(result, (data) => {
    return {
      locationAddress: data.location_address,
      propertyType: data.property_type,
      buildingName: data.building_name,
      roomFloor: data.room_floor,
      roomCapacity: data.room_capacity,
      equipments: JSON.parse(data.equipments),
      hourlyRate: data.hourly_rate,
      reserved: data.reserved,
    };
  });
}

module.exports = {getRoomList};
