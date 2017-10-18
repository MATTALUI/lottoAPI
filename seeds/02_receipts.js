
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('receipts').del()
    .then(function () {
      // Inserts seed entries
      return knex('receipts').insert([
        {user_id: 1, receipt_number: 59973472},
        {user_id:1, receipt_number: 49847293}
      ]);
    });
};
