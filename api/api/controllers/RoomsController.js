require('app-module-path').addPath(require('app-root-path').toString());
const {
  getRoomList,
  addRoom,
  getRoomById,
  getRandomRoom,
} = require('api/repositories/RoomsRepository.js');
const HttpSuccess = require('api/responses/HttpSuccess.js');

/**
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 * @param {Object} next - Next function to be called
 */
async function getRooms(req, res, next) {
  let rooms;
  try {
    rooms = await getRoomList();
  } catch (dbError) {
    console.log(dbError.messsage);
  }
  res.locals.respObj = new HttpSuccess(
      200,
      'Successfully retrieved room list',
      {roomList: rooms}
  );
  return next();
}

/**
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 * @param {Object} next - Next function to be called
 */
async function getRoom(req, res, next) {
  const {id} = req.params;
  let rooms;
  try {
    rooms = await getRoomById(id);
  } catch (dbError) {
    console.log(dbError.messsage);
  }
  res.locals.respObj = new HttpSuccess(
      200,
      'Successfully retrieved room details',
      rooms
  );
  return next();
}


/**
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 * @param {Object} next - Next function to be called
 */
async function getRoomByRandomNum(req, res, next) {
  const roomList = [];
  let r1;
  let r2;
  try {
    r1 = await getRandomRoom(Math.trunc(Math.random() * 5) + 1);
    r2 = await getRandomRoom(Math.trunc(Math.random() * 5) + 1);
  } catch (dbError) {
    console.log(dbError.messsage);
  }
  console.log('room list', roomList);
  res.locals.respObj = new HttpSuccess(
      200,
      'Successfully retrieved room details',
      {roomList: [r1, r2]}
  );
  return next();
}
/**
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 * @param {Object} next - Next function to be called
 */
async function postRoom(req, res, next) {
  const {
    locationAddress,
    propertyType,
    buildingName,
    roomFloor,
    roomType,
    roomCapacity,
    equipments,
    hourlyRate,
  } = req.body;

  try {
    await addRoom(
        locationAddress,
        propertyType,
        buildingName,
        roomFloor,
        roomType,
        roomCapacity,
        JSON.stringify(equipments),
        hourlyRate
    );
  } catch (dbError) {
    console.log(dbError.message);
  }
  res.locals.respObj = new HttpSuccess(200, 'Successfully added new room');
  return next();
}

module.exports = {getRooms, postRoom, getRoom, getRoomByRandomNum};
