
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('kinds').insert([
    {kind: 'Example', definition: 'An argument from one singular to another singular of the same kind.'},
    {kind: 'Induction', definition: 'An argument going forward from many singulars to the universal.'},
    {kind: 'Enthymeme', definition: 'An argument from likelihood or signs'},
    {kind: 'Syllogism', definition: 'An argument or speech in which some statements laid down, another follows necessarily because of those laid down.'}
  ])
};
