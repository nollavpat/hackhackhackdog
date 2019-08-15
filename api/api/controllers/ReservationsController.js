require('app-module-path').addPath(require('app-root-path').toString());
const HttpSuccess = require('api/responses/HttpSuccess.js');
/**
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 * @param {Object} next - Next function to be called
 */
async function PostReservations(req, res, next) {
  res.locals.respObj = new HttpSuccess(200, `Successfully Reserved a room`);
  return next();
}

module.exports = {PostReservations};
