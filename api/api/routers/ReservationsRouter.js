const express = require('express');
const router = new express.Router();
const {PostReservations} = require('api/controllers/ReservationsController.js');

router.get('/', PostReservations);

module.exports = router;
