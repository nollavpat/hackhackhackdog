const express = require('express');
const router = new express.Router();
const {
  getRooms,
  postRoom,
  getRoomByRandomNum,
  getRoom,
} = require('api/controllers/RoomsController.js');

router.get('/rooms', getRooms);
router.post('/rooms', postRoom);
router.get('/rooms/:id', getRoom);
router.get('/rooms/random', getRoomByRandomNum);

module.exports = router;
