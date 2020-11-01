
exports.seed = async function(knex) {
await knex('simple_examples').insert([
  {argument: 'This restaurant is good because I had a good meal there last time.', untying: 'Last meal is assumed to be similar to next meal.', kind_id: 2},
  {argument: 'Boys will be boys.', untying: 'Likelihood that this boy acts in way boys tend to.', kind_id: 1},
  {argument: 'He is drunk because his eyes are red.', untying: 'Red eyes can be a sign of drunkenness.', kind_id: 1},
  {argument: 'X country attacked us after building up their military; therefore Y country it about to attack us because they are building up their military', untying: 'Past example is like what is happening now.', kind_id: 2}
])
};
