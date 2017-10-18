exports.up = function(knex, Promise) {
  return knex.schema.createTable("receipts", function (table) {
  table.increments('id').notNullable();
  table.integer('user_id').references('users.id').notNullable().onDelete('cascade');
  table.integer('receipt_number').notNullable();
  table.timestamps(false, true);
});

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("receipts");
};
