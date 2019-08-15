require('app-module-path').addPath(require('app-root-path').toString());
const bodyParser = require('body-parser');
const express = require('express');
const HttpSuccess = require('api/responses/HttpSuccess.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

