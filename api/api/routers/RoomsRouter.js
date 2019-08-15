const express = require('express');
const router = new express.Router();
const {getRooms, postRoom, getRoom} = require('api/controllers/RoomsController.js');

router.get('/rooms', getRooms);
router.post('/rooms', postRoom);
router.get('/rooms/:id', getRoom);

module.exports = router;
