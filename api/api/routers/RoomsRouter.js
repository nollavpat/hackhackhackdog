const express = require('express');
const router = new express.Router();
const {getRooms, postRoom} = require('api/controllers/RoomsController.js');

router.get('/rooms', getRooms);
router.post('/rooms', postRoom);

module.exports = router;
