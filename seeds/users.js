
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'matt', password: '$2a$10$fTHBpomhomAABuDJEW.W9.VrYTg3NxkWOfcuVOk4hbnNyP17waZAO'},
        {username: 'test', password: '$2a$10$fTHBpomhomAABuDJEW.W9.VrYTg3NxkWOfcuVOk4hbnNyP17waZAO'}
      ]);
    });
};
