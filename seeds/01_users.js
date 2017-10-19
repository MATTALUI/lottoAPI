
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'matt', password: '$2a$10$OqzXjvs60XwMBC3v.UyoWe64wkcyto/XcnDWlb3Qa/bQme4yNX/Z6'},
        {id: 2, username: 'test', password: '$2a$10$fTHBpomhomAABuDJEW.W9.VrYTg3NxkWOfcuVOk4hbnNyP17waZAO'}
      ]);
    });
};
