require('app-module-path').addPath(require('app-root-path').toString());
const rooms = require('data/roomsData');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rooms').del()
      .then(()=>{
        return knex('rooms').insert(rooms);
      });
};

