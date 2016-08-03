
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
  table.string('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
