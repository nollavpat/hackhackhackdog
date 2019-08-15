exports.up = function(knex) {
  return knex.schema.createTable('rooms', function(t) {
    t.increments('id').primary();
    t.string('location_address').notNullable();
    t.string('property_type').notNullable();
    t.string('building_name').notNullable();
    t.string('room_floor').notNullable();
    t.integer('room_capacity').notNullable();
    t.string('room_type').notNullable();
    t.json('equipments').notNullable();
    t.float('hourly_rate').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('rooms');
};
