/* eslint-disable valid-jsdoc */
require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();

const knex = require('knex')(require('knexfile'));

/**
 * Returns Array list of rooms
 */
async function getRoomList() {
  const result = await knex
      .select(
          'id',
          'location_address as locationAddress',
          'property_type as propertyType',
          'building_name as buildingName',
          'room_type as roomType',
          'room_floor as roomFloor',
          'room_capacity as roomCapicity',
          'equipments as equipments',
          'hourly_rate as hourlyRate',
          'reserved'
      )
      .from('rooms');
  return result;
}

/**
 * Returns Array list of rooms
 */
async function getRandomRoom(id) {
  const result = await knex
      .where({id})
      .select(
          'id',
          'location_address as locationAddress',
          'property_type as propertyType',
          'building_name as buildingName',
          'room_type as roomType',
          'room_floor as roomFloor',
          'room_capacity as roomCapicity',
          'equipments as equipments',
          'hourly_rate as hourlyRate',
          'reserved'
      )
      .from('rooms')
      .first();
  return result;
}

// eslint-disable-next-line require-jsdoc
async function getRoomById(id) {
  const data = await knex
      .where({id})
      .select()
      .from('rooms')
      .first();
  return {
    locationAddress: data.location_address,
    propertyType: data.property_type,
    buildingName: data.building_name,
    roomType: data.room_type,
    roomFloor: data.room_floor,
    roomCapacity: data.room_capacity,
    equipments: JSON.parse(data.equipments),
    hourlyRate: data.hourly_rate,
    reserved: data.reserved,
  };
}

/**
 *
 * @param {String} locationAddress - Location address
 * @param {String} propertyType - Property type
 * @param {String} buildingName - Building name
 * @param {String} roomFloor  - Room floor
 * @param {String} roomType - Room type
 * @param {Integer} roomCapacity  - Room capacity
 * @param {Array} equipments - Equipments
 * @param {Integer} hourlyRate  - Hourly rates
 */
async function addRoom(
    locationAddress,
    propertyType,
    buildingName,
    roomFloor,
    roomType,
    roomCapacity,
    equipments,
    hourlyRate
) {
  const newRoom = {
    location_address: locationAddress,
    property_type: propertyType,
    building_name: buildingName,
    room_type: roomType,
    room_floor: roomFloor,
    room_capacity: roomCapacity,
    equipments,
    hourly_rate: hourlyRate,
  };
  return await knex('rooms').insert(newRoom);
}

module.exports = {getRandomRoom, getRoomList, addRoom, getRoomById};
