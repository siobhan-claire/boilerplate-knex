
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('profiles').insert({id: 1, URL: 'https://www.instagram.com/sbhnocnnr/', user_id: 99901}),
        knex('profiles').insert({id: 2, URL: 'https://www.instagram.com/janawinter/', user_id: 99902}),
        knex('profiles').insert({id: 3, URL: 'https://www.instagram.com/c00ms/', user_id: 99903})
      ]);
    });
};
