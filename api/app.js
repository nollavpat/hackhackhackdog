require('app-module-path').addPath(require('app-root-path').toString());
const bodyParser = require('body-parser');
// const cors = require('cors');
const express = require('express');
const HttpSuccess = require('api/responses/HttpSuccess.js');
const app = express();

// const allowedOrigins = ['http://localhost:3000'];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(
//     cors({
//       origin: function(origin, callback) {
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//           const msg =
//           'The CORS policy for this site does not ' +
//           'allow access from the specified Origin.';
//           return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//       },
//     })
// );

// ROUTERS
app.use('/api/ror/', require('api/routers/ReservationsRouter'));
app.use('/api/ror/', require('api/routers/RoomsRouter.js'));

app.use((req, res, next) => {
  if (res.locals.respObj && res.locals.respObj instanceof HttpSuccess) {
    return res.status(res.locals.respObj.status).json(res.locals.respObj);
  }
  return next();
});

app.listen(8080, () => {
  console.log(`Listening to port ${8080}`);
});
