require('app-module-path').addPath(require('app-root-path').toString());
const {getRoomList} = require('api/repositories/RoomsRepository.js');
const HttpSuccess = require('api/responses/HttpSuccess.js');
const TAG = '[RoomsController]';

/**
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 * @param {Object} next - Next function to be called
 */
async function getRooms(req, res, next) {
  const METHOD = '[getRooms]';
  console.log(`${TAG} ${METHOD}`);
  let rooms;
  try {
    rooms = await getRoomList();
  } catch (dbError) {
    console.log(dbError.messsage);
  }
  res.locals.respObj = new HttpSuccess(
      200,
      rooms
  );
  return next();
}

module.exports = {getRooms};
