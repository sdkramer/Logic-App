
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('kinds').insert([
    {kind: 'Enthymeme', definition: 'Argument through sign or likelihood.'},
    {kind: 'Example', definition: 'Argument through like instance.'},
  ])
};
