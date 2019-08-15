exports.up = function(knex) {
  return knex.schema.createTable('reservations', function(t) {
    t.increments('id').primary();
    t.string('room_id').notNullable();
    t.string('date_from').notNullable();
    t.string('date_to').notNullable();
    t.string('organizer').notNullable();
    t.json('attendees').notNullable();
    t.string('description').notNullable();
    t.string('summary').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reservations');
};
