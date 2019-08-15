const express = require('express');
const router = new express.Router();
const {getRooms} = require('api/controllers/RoomsController.js');

router.get('/rooms', getRooms);

module.exports = router;
