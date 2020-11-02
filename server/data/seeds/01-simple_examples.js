
exports.seed = async function(knex) {
await knex('simple_examples').insert([
  {argument: 'This restaurant is good because I had a good meal there last time.', untying: 'Last meal is assumed to be similar to next meal.', kind_id: 1},
  {argument: 'Boys will be boys.', untying: 'Likelihood that this boy acts in way boys tend to.', kind_id: 3},
  {argument: 'He is drunk because his eyes are red.', untying: 'Red eyes can be a sign of drunkenness.', kind_id: 3},
  {argument: 'X country attacked us after building up their military; therefore Y country is about to attack us because they are building up their military', untying: 'Past example is like what is happening now.', kind_id: 1},
  {argument: 'This species of arctic mammal is large. This other species of arctic mammal is large...Therefore species of arctic mammals are large.', untying: 'Assumes that we have discovered all species of arctic mammals, or have reason to believe that as yet unobserved arctic mammals will also be large.', kind_id: 2},
  {argument: 'George will get into trouble. For an idle mind is the devil\'s workshop.', untying: 'Those who are idle will get into trouble. George is idle. Therefore George will get into trouble. This is an enthymeme from a likelihood.', kind_id: 3},
  {argument: 'Every animal dies. Every human is an animal. Therefore every human dies.', untying: 'BARBARA syllogism.', kind_id: 4}
  
])
};
