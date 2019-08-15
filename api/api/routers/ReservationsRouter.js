const express = require('express');
const router = new express.Router();
const {
  PostReservations,
  getReservations,
} = require('api/controllers/ReservationsController.js');

router.post('/reservations', PostReservations);
router.get('/reservations', getReservations);

module.exports = router;
